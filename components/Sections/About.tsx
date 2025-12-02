import React from 'react';

export const About = () => {
  return (
    <section id="sirga" className="py-16 sm:py-24 md:py-32 bg-sand-50">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="relative order-1 lg:order-1">
            <div className="aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-stone-200">
              <img 
                src="/images/val-sirga-portrait.jpg" 
                alt="Valentin with Sirga"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-[10px] sm:text-xs text-white/70 bg-black/50 px-2 py-1">
              Photo: Fabian Gieske
            </p>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <p className="text-moss-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs font-medium mb-3 sm:mb-4">
              The Beginning
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-zinc-900 mb-6 sm:mb-8">
              A Bond<br/>
              <span className="text-moss-700">Beyond Words</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                In 2012, a days-old lion cub was abandoned by her mother in Botswana. 
                Weighing just 2.5 kilograms, she was dying. Val made a decision that 
                would define his life.
              </p>
              <p>
                He named her Sirga. For 13 years, they've walked the Kalahari together—
                hunting, exploring, surviving. She now weighs 180 kg and roams freely 
                across 2,000 hectares of protected wilderness.
              </p>
              <p className="text-zinc-900 font-medium italic border-l-2 border-moss-500 pl-4 sm:pl-6 py-2">
                "She's not my pet. She's my teacher. Everything I know about lions, 
                about trust, about patience—I learned from her."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-200">
              <div>
                <p className="font-display font-black text-2xl sm:text-3xl text-moss-700">13+</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mt-1">Years Together</p>
              </div>
              <div>
                <p className="font-display font-black text-2xl sm:text-3xl text-moss-700">180</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mt-1">Kilograms</p>
              </div>
              <div>
                <p className="font-display font-black text-2xl sm:text-3xl text-moss-700">2000</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mt-1">Ha Reserve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
