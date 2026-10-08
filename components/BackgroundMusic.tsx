import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  isDarkMode: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isDarkMode }) => {
  // Mặc định loa luôn ở trạng thái MỞ (Bật)
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef<boolean>(false);

  useEffect(() => {
    // Khởi tạo audio đối tượng với file nhạc trong thư mục public
    const audio = new Audio('/love-story.mp3');
    audio.loop = true;
    audio.volume = 0.35; // Âm lượng 35% (theo dải 30-40%)
    audioRef.current = audio;

    // Cố gắng tự động phát ngay khi trang nạp
    audio.play().catch(() => {
      // Nếu trình duyệt chặn autoplay trước tương tác, vẫn giữ loa ở trạng thái mở
      // và sẽ tự động phát ngay khi có tương tác đầu tiên
    });

    // Lắng nghe tương tác đầu tiên của người dùng trên toàn màn hình để phát nhạc
    const handleFirstInteraction = () => {
      if (!userMutedRef.current && audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleFirstInteraction, true);
      window.removeEventListener('keydown', handleFirstInteraction, true);
      window.removeEventListener('touchstart', handleFirstInteraction, true);
    };

    window.addEventListener('click', handleFirstInteraction, true);
    window.addEventListener('keydown', handleFirstInteraction, true);
    window.addEventListener('touchstart', handleFirstInteraction, true);

    const handleEnded = () => {
      if (audio.loop) {
        audio.play().catch(() => {});
      }
    };
    audio.addEventListener('ended', handleEnded);

    return () => {
      cleanupListeners();
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
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
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Không thể phát nhạc:', err);
      });
    }
  };

  return (
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
  );
};
