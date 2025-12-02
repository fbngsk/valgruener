import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const tourDates = [
  { date: '15. Jan 2027', city: 'Hamburg', venue: 'Elbphilharmonie', status: 'soon' },
  { date: '18. Jan 2027', city: 'Berlin', venue: 'Tempodrom', status: 'soon' },
  { date: '22. Jan 2027', city: 'München', venue: 'Circus Krone', status: 'soon' },
  { date: '25. Jan 2027', city: 'Köln', venue: 'Palladium', status: 'soon' },
  { date: '29. Jan 2027', city: 'Frankfurt', venue: 'Alte Oper', status: 'soon' },
  { date: '01. Feb 2027', city: 'Stuttgart', venue: 'Liederhalle', status: 'soon' },
  { date: '05. Feb 2027', city: 'Wien', venue: 'Konzerthaus', status: 'soon' },
  { date: '08. Feb 2027', city: 'Zürich', venue: 'Kongresshaus', status: 'soon' },
];

export const LiveTour = () => {
  return (
    <section id="tour" className="py-16 sm:py-24 md:py-32 bg-moss-900 text-white">
      <div className="container mx-auto px-5 sm:px-6">
        
        <SectionHeading 
          eyebrow="Live on Stage"
          title="Tour 2027"
          light
        />

        <div className="max-w-3xl mt-6 sm:mt-8">
          <p className="text-stone-300 leading-relaxed text-sm sm:text-base md:text-lg">
            Experience the Kalahari in person. Stories, unseen footage, and a rare glimpse 
            into life with Sirga—straight from Val himself.
          </p>
        </div>

        {/* Tour Dates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-10 sm:mt-12">
          {tourDates.map((show, index) => (
            <div 
              key={index}
              className="bg-moss-800/50 border border-moss-700 p-4 sm:p-6 hover:border-moss-500 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div className="bg-moss-700 p-2 sm:p-3 shrink-0">
                    <Calendar className="text-moss-300" size={18} />
                  </div>
                  <div>
                    <p className="text-moss-300 text-xs sm:text-sm">{show.date}</p>
                    <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-white">
                      {show.city}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm flex items-center gap-1 mt-0.5">
                      <MapPin size={12} />
                      {show.venue}
                    </p>
                  </div>
                </div>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-500 text-white px-4 py-2 font-bold uppercase tracking-widest text-xs transition-all w-full sm:w-auto"
                >
                  Soon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Early Access */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-moss-700">
          <div className="max-w-xl">
            <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide mb-3 sm:mb-4">
              Early Access
            </h3>
            <p className="text-stone-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Be the first to know when tickets go on sale. No spam, just tour updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 bg-moss-800 border border-moss-600 px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:border-moss-400 text-sm"
              />
              <button 
                type="submit"
                className="bg-white hover:bg-stone-100 text-moss-900 px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
              >
                Notify Me
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
