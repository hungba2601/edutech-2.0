import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface BackgroundMusicProps {
  isDarkMode: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isDarkMode }) => {
  // Mặc định luôn ở trạng thái muốn MỞ nhạc
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [needsUserTap, setNeedsUserTap] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35; // Âm lượng 35%
    audio.loop = true;

    // Mở khóa Web Audio API cho iOS / Zalo WebView
    const unlockWebAudio = () => {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          if (ctx.state === 'suspended') {
            ctx.resume();
          }
        }
      } catch {
        // bỏ qua lỗi nếu không hỗ trợ
      }
    };

    // Hàm kích hoạt phát nhạc an toàn
    const startPlayback = () => {
      if (userMutedRef.current || !audio) return;
      unlockWebAudio();

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setNeedsUserTap(false);
          })
          .catch(() => {
            // Zalo In-App Browser hoặc trình duyệt di động chặn autoplay trước tương tác
            if (!userMutedRef.current) {
              setIsPlaying(true);
              setNeedsUserTap(true);
            }
          });
      }
    };

    // 1. Thử phát ngay khi vừa tải trang
    startPlayback();

    // 2. Lắng nghe các cử chỉ hợp lệ được iOS/Android WebView & Zalo chấp nhận (touchend, click)
    const handleGesture = () => {
      if (!userMutedRef.current && audio.paused) {
        startPlayback();
      }
    };

    // Chỉ dùng 'touchend' và 'click' - KHÔNG dùng 'scroll' hay 'touchstart' vì iOS WebKit sẽ từ chối và chặn quyền media
    window.addEventListener('touchend', handleGesture, { passive: true });
    window.addEventListener('click', handleGesture, { passive: true });

    // 3. Xử lý lặp lại dự phòng khi bài hát kết thúc
    const handleEnded = () => {
      if (!userMutedRef.current && audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };
    audio.addEventListener('ended', handleEnded);

    // 4. Khôi phục phát khi người dùng mở lại tab hoặc quay lại app Zalo
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && !userMutedRef.current && audio.paused) {
        startPlayback();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleVisibility);

    return () => {
      window.removeEventListener('touchend', handleGesture);
      window.removeEventListener('click', handleGesture);
      audio.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !needsUserTap) {
      audio.pause();
      setIsPlaying(false);
      setNeedsUserTap(false);
      userMutedRef.current = true;
    } else {
      userMutedRef.current = false;
      setIsPlaying(true);
      setNeedsUserTap(false);
      audio.currentTime = audio.currentTime || 0;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error('Không thể phát nhạc:', err);
      });
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Thẻ audio chuẩn HTML5 hỗ trợ tốt trong WebKit / Zalo */}
      <audio
        ref={audioRef}
        src="/love-story.mp3"
        loop
        playsInline
        preload="auto"
      />

      {/* Thông báo gợi ý nhỏ nhắn khi mở trong Zalo/trình duyệt bị chặn autoplay, chạm vào là phát ngay */}
      {needsUserTap && isPlaying && (
        <div 
          onClick={toggleMusic}
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2 flex items-center space-x-1 px-2 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-md animate-bounce cursor-pointer whitespace-nowrap z-50 pointer-events-auto"
        >
          <Music className="w-3 h-3 animate-spin" />
          <span>Chạm để bật nhạc 🎵</span>
        </div>
      )}

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
    </div>
  );
};
