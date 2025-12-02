import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { BookOpen, ExternalLink } from 'lucide-react';

export const Book = () => {
  return (
    <section id="book" className="py-24 md:py-32 bg-sand-100">
      <div className="container mx-auto px-6">
        
        <SectionHeading 
          eyebrow="The Book"
          title="Löwenland"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          
          {/* Book Cover Placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-zinc-900 flex items-center justify-center">
              <div className="text-center p-12">
                <BookOpen className="text-moss-500 mx-auto mb-6" size={64} />
                <h3 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-tight mb-4">
                  Löwenland
                </h3>
                <p className="text-stone-400 uppercase tracking-widest text-sm">
                  Valentin Grüner
                </p>
                <div className="mt-6 inline-block bg-amber-500 text-zinc-900 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Spiegel Bestseller
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
              From Lake Constance to the Kalahari. 15 years of adventure, hardship, 
              and an unbreakable bond with a lioness named Sirga.
            </p>
            
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
              This book doesn't sugarcoat anything. Fire, drought, bureaucracy, near-death experiences—
              it's all in there. But also: the silence of the desert at night. 
              The trust of a 180-kilogram predator. The moments that made it all worth it.
            </p>

            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-10">
              Published in German. 320 pages of Kalahari reality.
            </p>

            {/* Buy Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.amazon.de/dp/3492071198"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3"
              >
                Amazon
                <ExternalLink size={16} />
              </a>
              <a 
                href="https://www.thalia.de/shop/home/artikeldetails/A1062692838"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-zinc-300 hover:border-zinc-900 text-zinc-900 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3"
              >
                Thalia
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
