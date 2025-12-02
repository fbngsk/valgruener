import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import { SectionHeading } from '../UI/SectionHeading';

export const Book = () => {
  return (
    <section id="book" className="py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            
            {/* Text Side */}
            <div className="flex-1">
                <SectionHeading eyebrow="Spiegel Bestseller" title="Löwenland" large />
                
                <h3 className="font-sans text-xl md:text-2xl text-zinc-500 mb-8 font-light">
                    "My life in Africa's last wilderness."
                </h3>
                
                <p className="text-zinc-800 mb-8 leading-relaxed text-lg font-light max-w-xl">
                    An unfiltered account of survival. In <strong>Löwenland</strong>, I take you beyond the jeep tracks. 
                    It is a story of adventure, hardship, and the primal bond between man and beast. 
                    No fences. No filters. Just the Kalahari.
                </p>

                <div className="flex items-center gap-2 mb-10">
                    <div className="flex text-moss-600">
                        <Star fill="currentColor" size={18} />
                        <Star fill="currentColor" size={18} />
                        <Star fill="currentColor" size={18} />
                        <Star fill="currentColor" size={18} />
                        <Star fill="currentColor" size={18} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Readers Choice</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://www.amazon.de/L%C3%B6wenland-Leben-Afrikas-letzte-Wildnis/dp/3499007800" 
                        target="_blank"
                        rel="noreferrer"
                        className="bg-zinc-900 text-white px-8 py-4 uppercase font-display font-bold tracking-widest hover:bg-moss-600 transition-colors text-center"
                    >
                        Buy The Book
                    </a>
                    <a 
                        href="#" 
                        className="px-8 py-4 border-2 border-zinc-200 text-zinc-900 uppercase font-display font-bold tracking-widest hover:border-zinc-900 transition-colors flex items-center justify-center gap-2"
                    >
                        <BookOpen size={18} /> Read Sample
                    </a>
                </div>
            </div>

            {/* Book Visual Side */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
                <div className="relative w-72 md:w-96 aspect-[2/3] transform transition-transform duration-500 hover:scale-105">
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-zinc-900 z-0"></div>
                    <img 
                        src="https://m.media-amazon.com/images/I/81h+0D+tHBL._SL1500_.jpg" 
                        alt="Löwenland Book Cover" 
                        className="w-full h-full object-cover relative z-10 shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all"
                    />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};