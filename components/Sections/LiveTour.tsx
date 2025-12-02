import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const tourDates = [
  { date: '15.01.2027', city: 'Hamburg', venue: 'Laeiszhalle' },
  { date: '17.01.2027', city: 'Berlin', venue: 'Tempodrom' },
  { date: '19.01.2027', city: 'München', venue: 'Circus Krone' },
  { date: '21.01.2027', city: 'Köln', venue: 'Flora' },
  { date: '24.01.2027', city: 'Frankfurt', venue: 'Alte Oper' },
  { date: '26.01.2027', city: 'Stuttgart', venue: 'Liederhalle' },
  { date: '02.02.2027', city: 'Wien', venue: 'Konzerthaus' },
  { date: '04.02.2027', city: 'Zürich', venue: 'Kaufleuten' },
];

export const LiveTour = () => {
  return (
    <section id="tour" className="py-24 md:py-32 bg-moss-900 text-white">
      <div className="container mx-auto px-6">
        
        <SectionHeading 
          eyebrow="Live on Stage"
          title="Tour 2027"
          light
        />

        <div className="max-w-3xl mt-8 mb-16">
          <p className="text-xl text-moss-200 leading-relaxed">
            Stories from the Kalahari—live and unfiltered. Exclusive footage, behind-the-scenes moments, 
            and the truth about life with lions. Coming to select cities in early 2027.
          </p>
        </div>

        {/* Tour Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {tourDates.map((show, index) => (
            <div 
              key={index}
              className="bg-moss-800/50 border border-moss-700 p-6 flex items-center justify-between hover:border-white/30 transition-colors group"
            >
              <div className="flex items-center gap-6">
                <div className="text-center min-w-[60px]">
                  <p className="font-display font-black text-2xl text-white">
                    {show.date.split('.')[0]}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-moss-400">
                    {show.date.split('.')[1]}.{show.date.split('.')[2]}
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide">
                    {show.city}
                  </h3>
                  <p className="text-moss-300 text-sm flex items-center gap-1">
                    <MapPin size={12} />
                    {show.venue}
                  </p>
                </div>
              </div>
              <a 
                href="#"
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-moss-900 px-4 py-2 text-xs font-bold uppercase tracking-widest"
              >
                Tickets
              </a>
            </div>
          ))}
        </div>

        {/* Early Access */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 text-center">
          <Calendar className="text-moss-400 mx-auto mb-4" size={32} />
          <h3 className="font-display font-bold text-2xl uppercase tracking-wide mb-4">
            Get Early Access
          </h3>
          <p className="text-moss-200 mb-8 max-w-xl mx-auto">
            Join the waitlist for pre-sale tickets and exclusive meet & greet packages. 
            Limited availability.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
            />
            <button 
              type="submit"
              className="bg-white text-moss-900 px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-moss-100 transition-colors flex items-center justify-center gap-2"
            >
              Notify Me
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
