import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/images/val-sirga-hero.jpg)',
          backgroundPosition: '50% 30%'
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 py-20">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <p className="text-moss-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Ranger. Conservationist. Author.
          </p>
          
          {/* Main Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight text-white mb-4 sm:mb-6">
            Valentin
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-moss-400 to-moss-600">
              Grüner
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-xl leading-relaxed mb-8 sm:mb-10">
            15 years in the Kalahari wilderness. Protecting lions, fighting for wild spaces, 
            and sharing the story that changed everything.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#tour" 
              className="group inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all"
            >
              Live Tour 2027
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#sirga" 
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all hover:bg-white/5"
            >
              Meet Sirga
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element - Hidden on mobile */}
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <p className="text-white/20 uppercase tracking-[0.4em] text-xs font-medium" style={{ writingMode: 'vertical-rl' }}>
          Botswana · Kalahari
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-moss-500 to-transparent" />
      </div>
    </section>
  );
};
