"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../utils/constants';
import { Star } from 'lucide-react';

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white" id="testimonios">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mejor recompensa.
          </p>
        </motion.div>

        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg max-w-2xl w-full">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6 italic">
                  &quot;{TESTIMONIALS[currentIndex].text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-gray-500">
                      {TESTIMONIALS[currentIndex].service}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};