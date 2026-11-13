import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play, SkipForward, X, Music } from 'lucide-react';

interface BackgroundMusicProps {
  isDarkMode: boolean;
}

interface Track {
  title: string;
  artist: string;
  tag: string;
  src: string;
  defaultVolume: number;
}

const PLAYLIST: Track[] = [
  {
    title: 'Woman in Love',
    artist: 'Barbra Streisand',
    tag: 'Du dương',
    src: '/woman-in-love.mp3',
    defaultVolume: 50,
  },
  {
    title: 'Love Story',
    artist: 'Francis Lai',
    tag: 'Lãng mạn',
    src: '/love-story.mp3',
    defaultVolume: 30,
  },
  {
    title: 'Sealed With A Kiss',
    artist: 'Brian Hyland',
    tag: 'Nhẹ nhàng',
    src: '/sealed-with-a-kiss.m4a',
    defaultVolume: 30,
  },
];

const PRESETS = [
  { percent: 15, label: 'Nhẹ' },
  { percent: 30, label: 'Chuẩn' },
  { percent: 50, label: 'Vừa' },
  { percent: 80, label: 'To' },
];

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isDarkMode }) => {
  // Chọn ngẫu nhiên 1 bản nhạc mỗi lần mở trang
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(() =>
    Math.floor(Math.random() * PLAYLIST.length)
  );
  const currentTrackIndexRef = useRef<number>(currentTrackIndex);
  currentTrackIndexRef.current = currentTrackIndex;

  // Trạng thái phát và âm lượng theo bài hát (Woman in Love: 50%, các bài khác: 30%)
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(
    () => PLAYLIST[currentTrackIndex]?.defaultVolume ?? 30
  );
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [needsUserTap, setNeedsUserTap] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef<boolean>(false);
  const prevVolumeRef = useRef<number>(PLAYLIST[currentTrackIndex]?.defaultVolume ?? 30);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Đóng popover khi click ra ngoài hoặc bấm ESC
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsPopoverOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Khởi tạo audio và xử lý autoplay an toàn (WebKit / Zalo)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const initialVol = PLAYLIST[currentTrackIndexRef.current]?.defaultVolume ?? 30;
    audio.volume = initialVol / 100;
    audio.loop = true;

    // Mở khóa Web Audio API cho iOS / Zalo WebView
    const unlockWebAudio = () => {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
            // Trình duyệt chặn autoplay khi chưa có tương tác
            if (!userMutedRef.current) {
              setIsPlaying(true);
              setNeedsUserTap(true);
            }
          });
      }
    };

    startPlayback();

    const handleGesture = () => {
      if (!userMutedRef.current && audio.paused) {
        startPlayback();
      }
    };

    window.addEventListener('touchend', handleGesture, { passive: true });
    window.addEventListener('click', handleGesture, { passive: true });

    const handleEnded = () => {
      if (!userMutedRef.current && audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    };
    audio.addEventListener('ended', handleEnded);

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

  // Thay đổi âm lượng
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume / 100;
    }
  };

  // Bật/tắt tiếng nhanh
  const toggleMute = () => {
    const audio = audioRef.current;
    if (isMuted || volume === 0) {
      const defaultVol = PLAYLIST[currentTrackIndexRef.current]?.defaultVolume ?? 30;
      const restored = prevVolumeRef.current > 0 ? prevVolumeRef.current : defaultVol;
      setVolume(restored);
      setIsMuted(false);
      if (audio) audio.volume = restored / 100;
    } else {
      prevVolumeRef.current = volume;
      setVolume(0);
      setIsMuted(true);
      if (audio) audio.volume = 0;
    }
  };

  // Tạm dừng / Phát tiếp
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
      userMutedRef.current = true;
    } else {
      userMutedRef.current = false;
      if (!audio.src) {
        audio.src = PLAYLIST[currentTrackIndexRef.current].src;
      }
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setNeedsUserTap(false);
        })
        .catch((err) => {
          console.error('Không thể phát nhạc:', err);
        });
    }
  };

  // Chuyển bài ngẫu nhiên khác
  const handleNextTrack = () => {
    let nextIndex = currentTrackIndex;
    if (PLAYLIST.length > 1) {
      while (nextIndex === currentTrackIndex) {
        nextIndex = Math.floor(Math.random() * PLAYLIST.length);
      }
    }
    setCurrentTrackIndex(nextIndex);
    currentTrackIndexRef.current = nextIndex;

    const nextTrack = PLAYLIST[nextIndex];
    const newVolume = nextTrack.defaultVolume ?? 30;
    setVolume(newVolume);
    setIsMuted(false);
    prevVolumeRef.current = newVolume;

    const audio = audioRef.current;
    if (audio) {
      audio.src = nextTrack.src;
      audio.volume = newVolume / 100;
      audio.currentTime = 0;
      userMutedRef.current = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setNeedsUserTap(false);
        })
        .catch((err) => {
          console.error('Không thể phát nhạc:', err);
        });
    }
  };

  const currentTrack = PLAYLIST[currentTrackIndex];

  return (
    <div className="relative flex items-center">
      {/* Thẻ audio HTML5 */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop
        playsInline
        preload="auto"
      />

      {/* Thông báo gợi ý nhỏ nhắn khi bị chặn autoplay */}
      {needsUserTap && isPlaying && !isPopoverOpen && (
        <div
          onClick={() => {
            handlePlayPause();
            setIsPopoverOpen(true);
          }}
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2 flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md animate-bounce cursor-pointer whitespace-nowrap z-50 pointer-events-auto"
        >
          <Music className="w-3 h-3 animate-spin" />
          <span>Chạm để bật nhạc ({currentTrack.title}) 🎵</span>
        </div>
      )}

      {/* Nút loa trên Header */}
      <button
        ref={buttonRef}
        onClick={() => setIsPopoverOpen((prev) => !prev)}
        className={`relative shrink-0 p-2 rounded-xl transition-all active:scale-95 flex items-center justify-center border shadow-sm ${
          isPopoverOpen
            ? 'bg-sky-100 text-sky-700 border-sky-300 ring-2 ring-sky-400/30 dark:bg-sky-900/60 dark:text-sky-300 dark:border-sky-600'
            : isPlaying && volume > 0 && !isMuted
            ? isDarkMode
              ? 'bg-sky-950/60 text-sky-400 border-sky-800/80 hover:bg-sky-900/60'
              : 'bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-100/70'
            : isDarkMode
            ? 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            : 'bg-slate-100 text-slate-500 border-slate-200 hover:text-slate-800'
        }`}
        title={`Điều khiển nhạc (${currentTrack.title})`}
        aria-label={`Bảng điều khiển nhạc nền - ${currentTrack.title}`}
        aria-expanded={isPopoverOpen}
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
        ) : (
          <Volume2 className={`w-4 h-4 sm:w-5 sm:h-5 ${isPlaying ? 'text-sky-600 dark:text-sky-400' : ''}`} />
        )}

        {/* Chấm tròn xanh báo trạng thái đang phát */}
        {isPlaying && volume > 0 && !isMuted && (
          <span className="absolute top-1 right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        )}
      </button>

      {/* Popover Bảng điều khiển âm nhạc */}
      {isPopoverOpen && (
        <div
          ref={popoverRef}
          className={`absolute right-0 top-full mt-3 w-80 sm:w-[325px] rounded-2xl p-4 shadow-2xl border z-50 animate-in fade-in zoom-in-95 duration-150 select-none ${
            isDarkMode
              ? 'bg-slate-900/95 border-slate-700/80 text-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md'
              : 'bg-white border-slate-200/90 text-slate-800 shadow-[0_15px_40px_rgba(15,23,42,0.15)]'
          }`}
        >
          {/* Mũi tên trỏ lên nút loa */}
          <div
            className={`absolute -top-2 right-3.5 w-4 h-4 rotate-45 border-t border-l pointer-events-none ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700/80'
                : 'bg-white border-slate-200/90'
            }`}
          />

          {/* Dòng 1: Đĩa than + Thông tin bài hát + Nút đóng */}
          <div className="relative flex items-center justify-between gap-3">
            {/* Đĩa than xoay */}
            <div
              className={`relative w-11 h-11 rounded-full bg-slate-950 flex items-center justify-center shrink-0 border border-slate-800 shadow-md ${
                isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
              }`}
            >
              <div className="absolute inset-1.5 rounded-full border border-slate-800/80" />
              <div className="absolute inset-3 rounded-full border border-slate-800/60" />
              <div className="w-4 h-4 rounded-full bg-sky-500 flex items-center justify-center shadow-[0_0_8px_rgba(14,165,233,0.8)] border border-sky-300">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
              </div>
            </div>

            {/* Tiêu đề bài hát & Nghệ sĩ */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-[15px] leading-tight truncate">
                <span className="text-sky-600 dark:text-sky-400">🎵</span>
                <span className="truncate">{currentTrack.title}</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                <span className="truncate">
                  {currentTrack.artist} ({currentTrack.tag}) • {volume}%
                </span>
                {/* Sóng equalizer */}
                <div className="flex items-end gap-0.5 h-3 shrink-0 ml-0.5">
                  <span
                    className={`w-0.5 bg-sky-500 rounded-full transition-all duration-200 ${
                      isPlaying ? 'animate-pulse h-3' : 'h-1'
                    }`}
                  />
                  <span
                    className={`w-0.5 bg-sky-500 rounded-full transition-all duration-200 ${
                      isPlaying ? 'animate-pulse delay-75 h-2' : 'h-1'
                    }`}
                  />
                  <span
                    className={`w-0.5 bg-sky-500 rounded-full transition-all duration-200 ${
                      isPlaying ? 'animate-pulse delay-150 h-3.5' : 'h-1'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Nút đóng X */}
            <button
              onClick={() => setIsPopoverOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Đóng bảng điều khiển"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dòng 2: Các nút điều khiển */}
          <div className="flex items-center gap-2 mt-4">
            {/* Nút chính: Tạm dừng / Tiếp tục */}
            <button
              onClick={handlePlayPause}
              className="flex-1 py-2.5 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition shadow-sm flex items-center justify-center gap-2 text-sm"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Tiếp tục</span>
                </>
              )}
            </button>

            {/* Nút chuyển bài ngẫu nhiên */}
            <button
              onClick={handleNextTrack}
              className="w-11 h-11 shrink-0 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-200 transition flex items-center justify-center shadow-xs"
              title="Chuyển ngẫu nhiên bài khác"
              aria-label="Chuyển ngẫu nhiên bài khác"
            >
              <SkipForward className="w-4 h-4 text-slate-700 dark:text-slate-200" />
            </button>

            {/* Nút bật/tắt tiếng */}
            <button
              onClick={toggleMute}
              className="w-11 h-11 shrink-0 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 text-slate-700 dark:text-slate-200 transition flex items-center justify-center shadow-xs"
              title={isMuted || volume === 0 ? 'Bật âm thanh' : 'Tắt âm thanh'}
              aria-label="Bật tắt âm thanh"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-slate-700 dark:text-slate-200" />
              )}
            </button>
          </div>

          {/* Dòng 3: Âm lượng & Slider */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                Âm lượng
              </span>
              <span className="font-bold text-sky-600 dark:text-sky-400 text-xs sm:text-sm">
                {volume}%
              </span>
            </div>

            {/* Thanh trượt Slider tùy biến */}
            <div className="relative flex items-center my-2">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-sky-500 focus:outline-hidden"
                style={{
                  background: `linear-gradient(to right, #0284c7 0%, #0284c7 ${volume}%, ${
                    isDarkMode ? '#334155' : '#e2e8f0'
                  } ${volume}%, ${isDarkMode ? '#334155' : '#e2e8f0'} 100%)`,
                }}
              />
            </div>

            {/* 4 Nút mốc âm lượng */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-2.5">
              {PRESETS.map((p) => {
                const isSelected = volume === p.percent && !isMuted;
                return (
                  <button
                    key={p.percent}
                    onClick={() => handleVolumeChange(p.percent)}
                    className={`py-1.5 px-1 rounded-xl transition flex flex-col items-center justify-center text-center ${
                      isSelected
                        ? 'bg-[#0284c7] text-white font-bold shadow-sm'
                        : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium'
                    }`}
                  >
                    <span className="text-xs font-bold leading-tight">{p.percent}%</span>
                    <span className="text-[11px] leading-tight opacity-90">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dòng 4: Chú thích dưới cùng */}
          <div className="border-t border-dashed border-slate-200 dark:border-slate-800 mt-3 pt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500 dark:text-slate-400">
            <span className="text-sky-500">🎶</span>
            <span>Mỗi phiên mở trang chọn ngẫu nhiên 1 bản nhạc và phát lặp lại liên tục.</span>
          </div>
        </div>
      )}
    </div>
  );
};