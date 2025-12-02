import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';

export const About = () => {
  return (
    <section id="sirga" className="py-24 md:py-32 bg-sand-50">
      <div className="container mx-auto px-6">
        
        <SectionHeading 
          eyebrow="The Bond"
          title="Sirga"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200">
              <img 
                src="/images/val-sirga-portrait.jpg" 
                alt="Valentin Grüner with Sirga the lioness in the Kalahari"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="absolute bottom-4 right-4 text-xs text-stone-500 bg-white/80 px-2 py-1">
              Photo: Fabian Gieske
            </p>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
              In 2012, a three-week-old lion cub was abandoned by her pride in the Kalahari. 
              She weighed 2.5 kilograms. Her chances of survival were close to zero.
            </p>
            
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
              I raised her by hand. Bottle-fed her every two hours. Slept next to her in the dirt. 
              Today, Sirga weighs 180 kilograms. She's 13 years old. And we still walk together—
              no fences, no tricks. Just respect.
            </p>

            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8">
              She can't be released into the wild. Lions raised by humans don't survive out there. 
              So I built her a 2,000-hectare reserve. Her own piece of Kalahari. 
              It's the least I could do.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-moss-600 pl-6 py-2 mb-10">
              <p className="text-xl md:text-2xl font-display italic text-stone-800">
                "She's not my pet. She's my teacher."
              </p>
              <cite className="text-sm text-stone-500 mt-2 block">— Valentin Grüner</cite>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-display font-black text-3xl md:text-4xl text-moss-700">13+</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Years Together</p>
              </div>
              <div>
                <p className="font-display font-black text-3xl md:text-4xl text-moss-700">180</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Kilograms</p>
              </div>
              <div>
                <p className="font-display font-black text-3xl md:text-4xl text-moss-700">2000</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Hectare Reserve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
