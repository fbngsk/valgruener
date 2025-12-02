import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';

const TOUR_DATES = [
    { city: 'Hamburg', venue: 'Laeiszhalle', date: '15 JAN', country: 'DE' },
    { city: 'Berlin', venue: 'Admiralspalast', date: '17 JAN', country: 'DE' },
    { city: 'Cologne', venue: 'Gloria Theater', date: '20 JAN', country: 'DE' },
    { city: 'Munich', venue: 'Alte Kongresshalle', date: '22 JAN', country: 'DE' },
    { city: 'Frankfurt', venue: 'Jahrhunderthalle', date: '25 JAN', country: 'DE' },
    { city: 'Zurich', venue: 'Volkshaus', date: '02 FEB', country: 'CH' },
    { city: 'Bern', venue: 'Kursaal', date: '04 FEB', country: 'CH' },
    { city: 'Basel', venue: 'Musical Theater', date: '05 FEB', country: 'CH' },
];

export const LiveTour = () => {
  return (
    <section id="tour" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-moss-600 rounded-full blur-[200px] absolute -top-1/2 -left-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
            <span className="bg-moss-600 text-white px-4 py-1 text-sm font-bold font-display uppercase tracking-widest mb-6">Jan / Feb 2027</span>
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none mb-6">
                Tales from <br/> <span className="text-outline">The Bush</span>
            </h2>
            <p className="max-w-2xl mx-auto text-stone-400 font-sans font-light text-xl">
                Live on stage. Uncensored stories. Breathtaking footage.
                <br/>Experience the Kalahari in Germany & Switzerland.
            </p>
        </div>

        <div className="max-w-5xl mx-auto">
            {TOUR_DATES.map((show, index) => (
                <div key={index} className="group relative border-t border-zinc-700 hover:border-moss-600 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-8 relative z-10">
                        {/* Date */}
                        <div className="w-full md:w-32 mb-4 md:mb-0 text-center md:text-left">
                            <span className="block text-3xl font-display font-bold text-stone-200 group-hover:text-moss-500 transition-colors">
                                {show.date.split(' ')[0]}
                            </span>
                            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                                {show.date.split(' ')[1]}
                            </span>
                        </div>

                        {/* City & Venue */}
                        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white group-hover:pl-4 transition-all duration-300">
                                {show.city}
                            </h3>
                            <p className="text-zinc-500 font-sans uppercase tracking-widest text-sm mt-1 group-hover:pl-4 transition-all duration-300">
                                {show.venue} <span className="text-moss-600 mx-2">•</span> {show.country}
                            </p>
                        </div>

                        {/* Button */}
                        <div>
                            <button className="w-full md:w-auto px-8 py-3 border border-stone-600 text-stone-300 font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all text-sm">
                                Tickets
                            </button>
                        </div>
                    </div>
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-zinc-800 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-center z-0"></div>
                </div>
            ))}
            <div className="border-t border-zinc-700"></div>
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-stone-500 text-sm uppercase tracking-widest mb-4">Don't miss the drop</p>
            <div className="inline-flex border-b border-stone-500 pb-1">
                <input type="email" placeholder="ENTER EMAIL FOR EARLY ACCESS" className="bg-transparent text-center text-white placeholder-zinc-600 focus:outline-none w-64 md:w-80 font-display uppercase tracking-widest" />
                <button className="text-moss-500 font-bold uppercase ml-4 hover:text-white transition-colors">Join</button>
            </div>
        </div>
      </div>
    </section>
  );
};