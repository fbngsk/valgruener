'use client';

import { ChevronDown, Play, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/val-sirga-hero.jpg)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="text-sand-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6">
          Naturschützer · Autor · Botswana
        </p>
        
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 sm:mb-6 tracking-tight">
          Valentin Grüner
        </h1>
        
        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          Seit über 15 Jahren schütze ich Wildtiere in der Kalahari. 
          Die Geschichte von Sirga zeigt, was möglich ist.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a 
            href="#documentary" 
            className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-zinc-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-sand-100 transition-colors"
          >
            <Play size={18} className="sm:w-5 sm:h-5" />
            <span>Dokumentation ansehen</span>
          </a>
          <a 
            href="#support" 
            className="w-full sm:w-auto group flex items-center justify-center gap-2 border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
          >
            <Heart size={18} className="sm:w-5 sm:h-5" />
            <span>Projekt unterstützen</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-zinc-500 text-xs tracking-wider uppercase">Mehr erfahren</span>
        <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
        <ChevronDown size={20} className="text-zinc-500 animate-bounce" />
      </div>
      
      {/* Decorative Element */}
      <div className="hidden md:block absolute top-1/2 right-8 lg:right-12 -translate-y-1/2">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-sand-500/50 to-transparent" />
      </div>
    </section>
  );
}
