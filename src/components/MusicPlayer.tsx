import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music, Volume2, VolumeX } from 'lucide-react';

interface Song {
  name: string;
  file: string; // file inside public/music/
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0.7);
  const [isScrolling, setIsScrolling] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetVolumeRef = useRef(0.7);

  // Add your songs here (files must exist in public/music/)
  const songs: Song[] = [
    { name: 'Running Up That Hill', file: 'njfn.mp3' },
    { name: 'Nee Paata Madhuram', file: '3 (Telugu) - Nee Paata Madhuram Video  Dhanush, Shruti  Anirudh.mp3' },
    { name: 'Love Me Like You Do', file: 'ellie goulding - love me like you do (slowed  reverb) ✧.mp3' },
  ];

  const currentSong = songs[currentSongIndex];
  const currentSongSrc = `/music/${encodeURIComponent(currentSong.file)}`;

  // Smooth volume transition
  const smoothVolumeChange = useCallback((targetVolume: number) => {
    if (!audioRef.current) return;
    
    targetVolumeRef.current = targetVolume;
    const currentVol = audioRef.current.volume;
    const diff = targetVolume - currentVol;
    const steps = 20;
    const stepSize = diff / steps;
    let step = 0;

    const interval = setInterval(() => {
      if (!audioRef.current || step >= steps) {
        clearInterval(interval);
        return;
      }
      audioRef.current.volume = Math.max(0, Math.min(1, currentVol + stepSize * step));
      setCurrentVolume(audioRef.current.volume);
      step++;
    }, 15);
  }, []);

  // Scroll detection for volume control
  useEffect(() => {
    const handleScroll = () => {
      if (!isPlaying) return;
      
      setIsScrolling(true);
      smoothVolumeChange(0.7); // Full volume when scrolling
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        smoothVolumeChange(0.15); // Lower volume when stopped
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isPlaying, smoothVolumeChange]);

  // Reload audio when song changes
  useEffect(() => {
    if (!audioRef.current) return;
    setLoadError(null);
    audioRef.current.load();
  }, [currentSongSrc]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.volume = 0.15; // Start quiet
      setCurrentVolume(0.15);
      audioRef.current
        .play()
        .catch(() => {
          // Autoplay is often blocked until a user taps play.
          setLoadError('Tap play to start music (browser blocked autoplay).');
          setIsPlaying(false);
        });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const handleSongEnd = () => {
    nextSong();
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSongSrc}
        preload="auto"
        onEnded={handleSongEnd}
        onError={() => {
          setLoadError(`Could not load: ${currentSong.file}`);
          setIsPlaying(false);
        }}
        loop={songs.length === 1}
      />

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg"
          layout
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                className="flex items-center gap-3 px-4 py-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Song name */}
                <div className="min-w-[120px]">
                  <span className="font-body text-xs text-muted-foreground block truncate">
                    {currentSong.name}
                  </span>
                  {loadError && (
                    <span className="font-body text-[10px] text-destructive block truncate">
                      {loadError}
                    </span>
                  )}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={prevSong}
                    className="p-2 hover:bg-accent/20 rounded-full transition-colors"
                    aria-label="Previous song"
                  >
                    <SkipBack className="w-4 h-4 text-foreground" />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="p-2 bg-accent/20 hover:bg-accent/30 rounded-full transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-foreground" />
                    ) : (
                      <Play className="w-4 h-4 text-foreground" />
                    )}
                  </button>

                  <button
                    onClick={nextSong}
                    className="p-2 hover:bg-accent/20 rounded-full transition-colors"
                    aria-label="Next song"
                  >
                    <SkipForward className="w-4 h-4 text-foreground" />
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 hover:bg-accent/20 rounded-full transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-foreground" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-foreground" />
                    )}
                  </button>
                </div>

                {/* Collapse button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-accent/20 rounded-full transition-colors ml-1"
                  aria-label="Collapse player"
                >
                  <span className="text-muted-foreground text-xs">×</span>
                </button>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                onClick={() => setIsExpanded(true)}
                className="p-4 hover:bg-accent/10 rounded-full transition-colors flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Music className="w-5 h-5 text-foreground" />
                {isPlaying && (
                  <motion.div
                    className="flex gap-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-0.5 bg-accent rounded-full"
                        animate={{
                          height: ['8px', '16px', '8px'],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
