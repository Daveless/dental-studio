'use client';
import { motion } from 'framer-motion';
import { BackgroundShapes } from './svg/BackgroundShapes';
import { SITE_CONFIG } from '../utils/constants';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 px-5" id="inicio">
      <BackgroundShapes />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="sm:text-4xl sm:text-left text-center text-5xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              {SITE_CONFIG.slogan}
            </p>
            <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
              <motion.button
                className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reservar Cita
              </motion.button>
              <motion.button
                className="px-8 py-3 bg-gray-800 text-blue-400 border-2 border-blue-400 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce más
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/30 backdrop-blur-sm rounded-full shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Hero"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-full"
              />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;