import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music, Volume2, VolumeX } from 'lucide-react';

interface Song {
  name: string;
  src: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Add your songs here - just add more objects with name and src
  const songs: Song[] = [
    { name: 'Song 1', src: '/music/song1.mp3' },
    { name: 'Song 2', src: '/music/song2.mp3' },
    { name: 'Song 3', src: '/music/song3.mp3' },
  ];

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, user needs to interact first
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
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
        src={currentSong.src}
        onEnded={handleSongEnd}
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
                <span className="font-body text-xs text-muted-foreground min-w-[60px] truncate">
                  {currentSong.name}
                </span>

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
