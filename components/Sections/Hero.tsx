import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/images/val-sirga-hero.jpg)',
          backgroundPosition: '50% 30%'
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <p className="text-moss-400 font-bold uppercase tracking-[0.3em] text-sm mb-6">
            Ranger. Conservationist. Author.
          </p>

          {/* Main Headline */}
          <h1 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.85] mb-6 text-white">
            Valentin
            <span className="block bg-gradient-to-r from-white via-stone-300 to-stone-500 bg-clip-text text-transparent">
              Grüner
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-stone-300 leading-relaxed mb-10 max-w-xl">
            15 years in the Kalahari wilderness. Founder of Modisa Wildlife Project. 
            The man who walks with Sirga.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#tour"
              className="group bg-moss-600 hover:bg-moss-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3"
            >
              <Play size={16} fill="currentColor" />
              Live Tour 2027
            </a>
            <a 
              href="#sirga"
              className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3"
            >
              Meet Sirga
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Side Decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="text-stone-600 font-bold uppercase tracking-[0.4em] text-xs [writing-mode:vertical-lr] rotate-180">
          Botswana · Kalahari
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-stone-500 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-stone-500 to-transparent" />
      </div>
    </section>
  );
};
