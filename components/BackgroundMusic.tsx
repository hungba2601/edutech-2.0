import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  isDarkMode: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isDarkMode }) => {
  // Mặc định luôn ở trạng thái MỞ nhạc
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35; // Âm lượng 35%
    audio.loop = true;

    // Hàm thực hiện phát nhạc
    const tryPlayAudio = () => {
      if (userMutedRef.current || !audio) return;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Trình duyệt chặn autoplay khi chưa có cử chỉ người dùng
            // Vẫn giữ trạng thái loa MỞ để tự động phát ngay ở cử chỉ tiếp theo
            if (!userMutedRef.current) {
              setIsPlaying(true);
            }
          });
      }
    };

    // 1. Thử phát ngay lập tức khi mở trang
    tryPlayAudio();

    // 2. Bắt tất cả các loại tương tác (click, chạm, cuộn trang, nhấn phím) để phát ngay
    const handleUserInteraction = () => {
      if (!userMutedRef.current && audio.paused) {
        tryPlayAudio();
      }
    };

    const interactionEvents = ['click', 'pointerdown', 'touchstart', 'touchend', 'keydown', 'scroll', 'wheel'];
    interactionEvents.forEach(evt => {
      window.addEventListener(evt, handleUserInteraction, { passive: true });
    });

    // 3. Đảm bảo lặp lại vô tận (xử lý dự phòng nếu thuộc tính loop của trình duyệt gặp trục trặc)
    const handleAudioEnded = () => {
      if (!userMutedRef.current) {
        audio.currentTime = 0;
        tryPlayAudio();
      }
    };
    audio.addEventListener('ended', handleAudioEnded);

    // 4. Khi người dùng chuyển tab và quay lại, tự động tiếp tục phát nhạc nếu đang mở
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !userMutedRef.current && audio.paused) {
        tryPlayAudio();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleVisibilityChange);

    return () => {
      interactionEvents.forEach(evt => {
        window.removeEventListener(evt, handleUserInteraction);
      });
      audio.removeEventListener('ended', handleAudioEnded);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleVisibilityChange);
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      userMutedRef.current = true;
    } else {
      userMutedRef.current = false;
      setIsPlaying(true);
      audio.currentTime = audio.currentTime || 0;
      audio.play().catch(err => {
        console.error('Không thể phát nhạc:', err);
      });
    }
  };

  return (
    <>
      {/* Thẻ audio đặt trực tiếp trong DOM với autoPlay và loop giúp trình duyệt hỗ trợ tốt nhất */}
      <audio
        ref={audioRef}
        src="/love-story.mp3"
        autoPlay
        loop
        playsInline
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className={`relative shrink-0 p-1 sm:p-2 rounded-full transition-all active:scale-90 flex items-center justify-center ${
          isPlaying
            ? isDarkMode
              ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.25)]'
              : 'bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm'
            : isDarkMode
              ? 'bg-slate-800 text-slate-400 hover:text-slate-200'
              : 'bg-slate-100 text-slate-500 hover:text-slate-800'
        }`}
        title={isPlaying ? "Tắt nhạc nền (Love Story)" : "Bật nhạc nền (Love Story)"}
        aria-label="Điều khiển nhạc nền"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        )}
      </button>
    </>
  );
};
