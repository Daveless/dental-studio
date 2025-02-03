import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from './components/Navigation';
import { WhatsappButton } from './components/WhatsappButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sonríe Dental Studio - Clínica Dental de Confianza',
  description: 'Cuidamos tu sonrisa con tecnología y empatía. Servicios dentales de alta calidad con atención personalizada.',
  keywords: 'dentista, clínica dental, ortodoncia, blanqueamiento dental, limpieza dental',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
