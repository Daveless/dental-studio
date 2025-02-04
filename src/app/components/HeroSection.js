'use client';
import { motion } from 'framer-motion';
import { BackgroundShapes } from './svg/BackgroundShapes';
import { SITE_CONFIG } from '../utils/constants';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 px-4" id="inicio">
      <BackgroundShapes />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center py-16 md:py-24 max-w-7xl 3xl:max-w-none mx-auto">
          {/* Image Section - Now First on Mobile */}
          <motion.div
            className="relative order-1 md:order-2 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-sm mx-auto relative">
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
              <div className="relative z-10 aspect-square bg-gray-800/30 backdrop-blur-sm rounded-full shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Hero"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section - Now Second on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              {SITE_CONFIG.slogan}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.button
                className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reservar Cita
              </motion.button>
              <motion.button
                className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-blue-400 border-2 border-blue-400 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conoce más
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;