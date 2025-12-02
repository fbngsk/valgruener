import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { BookOpen, ExternalLink } from 'lucide-react';

export const Book = () => {
  return (
    <section id="book" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        
        <SectionHeading 
          eyebrow="The Book"
          title="Löwenland"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-12 sm:mt-16 items-center">
          
          {/* Book Cover */}
          <div className="relative mx-auto lg:mx-0 max-w-xs sm:max-w-sm">
            <div className="aspect-[2/3] bg-gradient-to-br from-moss-900 via-moss-800 to-zinc-900 shadow-2xl flex items-center justify-center">
              <div className="text-center p-6 sm:p-8">
                <BookOpen className="text-moss-400 mx-auto mb-4 sm:mb-6" size={48} />
                <p className="text-moss-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs mb-2">Valentin Grüner</p>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  Löwen<span className="text-moss-400">land</span>
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-3 sm:mt-4">
                  Mein Leben für die<br/>letzten wilden Tiere Afrikas
                </p>
              </div>
            </div>
            {/* Bestseller Badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-amber-500 text-zinc-900 px-3 sm:px-4 py-1.5 sm:py-2 font-bold uppercase text-[10px] sm:text-xs tracking-wider shadow-lg">
              Spiegel Bestseller
            </div>
          </div>

          {/* Book Info */}
          <div>
            <p className="text-stone-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              The full story. From a small town in Germany to the heart of the Kalahari. 
              How a young man built a life among lions—and what it taught him about 
              wildness, loss, and what's worth fighting for.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <div className="flex justify-between py-2 sm:py-3 border-b border-stone-200 text-sm sm:text-base">
                <span className="text-stone-500">Publisher</span>
                <span className="font-medium text-zinc-900">Piper Verlag</span>
              </div>
              <div className="flex justify-between py-2 sm:py-3 border-b border-stone-200 text-sm sm:text-base">
                <span className="text-stone-500">Language</span>
                <span className="font-medium text-zinc-900">German</span>
              </div>
              <div className="flex justify-between py-2 sm:py-3 border-b border-stone-200 text-sm sm:text-base">
                <span className="text-stone-500">Pages</span>
                <span className="font-medium text-zinc-900">288</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="https://www.amazon.de/dp/3492071198"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all"
              >
                Amazon
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://www.thalia.de/suche?sq=löwenland+grüner"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border-2 border-zinc-900 hover:bg-zinc-900 text-zinc-900 hover:text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all"
              >
                Thalia
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
