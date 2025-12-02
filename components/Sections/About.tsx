import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { Quote } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-100 text-zinc-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-200/50 -skew-x-12 transform origin-top-right"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1510265119258-db115b0e8172?q=80&w=2070&auto=format&fit=crop" 
                    alt="Valentin in the bush" 
                    className="w-full h-[700px] object-cover grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Text on Image */}
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                    <p className="text-white font-display uppercase tracking-widest text-xl">The Kalahari Bond</p>
                </div>
            </div>
            {/* Hard Graphic Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-moss-600 z-20"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 pt-8">
            <SectionHeading eyebrow="Origin Story" title="Blood, Dust & Wilderness" />
            
            <div className="space-y-8 text-zinc-700 text-lg leading-relaxed font-sans font-light">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px]">
                It wasn't a holiday. It was an escape that turned into a destiny. 
                Stranded in the vastness of Botswana, I found clarity in the chaos of nature.
              </p>
              <p>
                Raising <strong className="text-zinc-900 font-bold border-b-2 border-moss-500">Sirga</strong>—a lioness rejected by her pride—taught me more about humanity than civilization ever could. 
                We hunt together, we walk together, we exist as equals in a land that shows no mercy.
              </p>
              <p>
                This isn't just about cuddling lions. It's about the brutal reality of conservation. 
                The <a href="#modisa" className="text-moss-600 font-bold hover:text-black transition-colors">Modisa Wildlife Project</a> is our answer to the disappearing wild. We stand between the wilderness and its extinction.
              </p>
            </div>

            <div className="mt-12 bg-white p-8 border-l-4 border-zinc-900 shadow-xl">
                <Quote className="text-moss-500 mb-4 opacity-50" size={40} />
                <p className="font-display text-2xl md:text-3xl uppercase leading-tight text-zinc-900">
                    "Wilderness is not a luxury. It is a necessity of the human spirit."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};