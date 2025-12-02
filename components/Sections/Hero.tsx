import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background Image - Simulating the shot of Valentin walking with Sirga in the grass */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          // Placeholder URL that closely matches the "Walking in tall grass with Lion" description. 
          // Replace this with your actual image file.
          backgroundImage: 'url("https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2663&auto=format&fit=crop")',
          backgroundPosition: '50% 20%' 
        }}
      >
        {/* Subtle Gradient Overlay to ensure text readability without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent md:from-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
                <span className="h-[3px] w-12 bg-moss-600"></span>
                <p className="text-moss-500 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                Ranger. Conservationist.
                </p>
            </div>
            
            <h1 className="font-display font-bold text-7xl md:text-9xl text-white uppercase leading-[0.85] tracking-tighter mb-8 drop-shadow-2xl">
            Valentin <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-stone-500">Grüner</span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-stone-200 font-sans font-light leading-relaxed mb-10 border-l-4 border-moss-600 pl-6 bg-zinc-950/40 backdrop-blur-sm py-2">
            Life on the edge of the Kalahari. <br/>
            Founder of the Modisa Wildlife Project. <br/>
            Author of "Löwenland".
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
                <a href="#tour" className="group relative px-8 py-4 bg-moss-600 text-white font-display font-bold uppercase tracking-widest text-lg overflow-hidden hover:bg-moss-500 transition-colors">
                    <span className="relative z-10">Live Tour 2027</span>
                </a>
                
                <a href="#about" className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-display font-bold uppercase tracking-widest text-lg transition-colors text-center sm:text-left backdrop-blur-sm">
                    The Story
                </a>
            </div>
        </div>
      </div>

      {/* Decorative Side Element */}
      <div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-8">
        <div className="w-[1px] h-24 bg-white/20"></div>
        <span className="writing-mode-vertical text-xs font-bold tracking-[0.3em] uppercase text-white/50 rotate-180">
            Est. Botswana 2011
        </span>
        <div className="w-[1px] h-24 bg-white/20"></div>
      </div>
    </div>
  );
};