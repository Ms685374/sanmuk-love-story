import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

interface Movie {
  title: string;
  date?: string;
  note?: string;
}

const MoviesSection = () => {
  // Add your movies here
  const movies: Movie[] = [
    { title: 'Movie 1', date: 'Dec 2024', note: 'First movie together' },
    { title: 'Movie 2', date: 'Dec 2024', note: 'We cried so much' },
    { title: 'Movie 3', date: 'Dec 2024', note: 'Your favorite' },
    { title: 'Movie 4', date: 'Dec 2024', note: 'Watched twice' },
    { title: 'Movie 5', date: 'Jan 2025', note: 'Late night' },
    { title: 'Movie 6', date: 'Jan 2025', note: 'So romantic' },
  ];

  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.span
          className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          (Movies We Watched)
        </motion.span>

        <motion.h2
          className="font-display text-4xl md:text-6xl font-bold text-foreground mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Cinema
        </motion.h2>

        {/* Movies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <motion.div
              key={index}
              className="group relative border border-border/50 rounded-lg p-6 hover:bg-accent/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Film className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-foreground mb-1">
                    {movie.title}
                  </h3>
                  {movie.date && (
                    <p className="font-body text-xs text-muted-foreground mb-2">
                      {movie.date}
                    </p>
                  )}
                  {movie.note && (
                    <p className="font-body text-sm text-foreground/70 italic">
                      "{movie.note}"
                    </p>
                  )}
                </div>
              </div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center font-body text-sm text-muted-foreground mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ...and many more to come
        </motion.p>
      </div>
    </section>
  );
};

export default MoviesSection;
