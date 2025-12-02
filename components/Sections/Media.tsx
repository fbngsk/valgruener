import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { Tv, Radio, Film, Mail, Download } from 'lucide-react';

const appearances = [
  {
    type: 'Podcast',
    icon: Radio,
    title: 'Hotel Matze',
    description: 'Deep conversation about life in the Kalahari',
    link: 'https://hotelmatze.de/valentin-gruener',
  },
  {
    type: 'TV',
    icon: Tv,
    title: 'Stern TV',
    description: 'Feature story on RTL',
    link: '#',
  },
  {
    type: 'TV',
    icon: Tv,
    title: '3nach9',
    description: 'Talk show appearance',
    link: '#',
  },
  {
    type: 'TV',
    icon: Tv,
    title: 'Galileo',
    description: 'ProSieben documentary segment',
    link: '#',
  },
  {
    type: 'Documentary',
    icon: Film,
    title: 'Saving Sirga',
    description: 'Netflix documentary series',
    link: 'https://www.netflix.com/title/81251647',
  },
];

export const Media = () => {
  return (
    <section id="media" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        
        <SectionHeading 
          eyebrow="Press & Media"
          title="In The News"
        />

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 mb-16 sm:mb-20">
          {appearances.map((item, index) => {
            const IconComponent = item.icon;
            return (
              
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-stone-50 hover:bg-stone-100 p-4 sm:p-6 transition-colors border border-stone-200 hover:border-moss-600"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-moss-600/10 p-2.5 sm:p-3 shrink-0">
                    <IconComponent className="text-moss-600" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mb-1">
                      {item.type}
                    </p>
                    <h3 className="font-display font-bold text-base sm:text-lg uppercase tracking-wide text-zinc-900 group-hover:text-moss-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Press Kit Section */}
        <div className="bg-zinc-900 text-white p-5 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Download className="text-moss-500" size={24} />
                <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide">
                  Press Kit
                </h3>
              </div>
              <p className="text-stone-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Everything journalists and producers need. High-resolution photos, 
                official biography, and project facts.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-stone-300 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500 shrink-0" />
                  Hi-res photos (print & web)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500 shrink-0" />
                  Official biography (DE/EN)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500 shrink-0" />
                  Modisa Project fact sheet
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500 shrink-0" />
                  Video footage (on request)
                </li>
              </ul>
            </div>

            {/* Right: Contact */}
            <div className="lg:border-l lg:border-zinc-700 lg:pl-12">
              <h4 className="font-display font-bold uppercase tracking-widest text-xs sm:text-sm text-stone-400 mb-4 sm:mb-6">
                Press Contact
              </h4>
              <div className="bg-zinc-800 p-4 sm:p-6">
                <p className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                  Fabian Gieske
                </p>
                <p className="text-stone-400 text-xs sm:text-sm mb-4">
                  Media & Communications<br/>
                  Modisa Wildlife Project
                </p>
                <a 
                  href="mailto:fabian@modisa.org?subject=Press%20Inquiry%20-%20Valentin%20Gruener"
                  className="inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 font-bold uppercase tracking-widest text-xs transition-colors"
                >
                  <Mail size={14} />
                  <span className="truncate">fabian@modisa.org</span>
                </a>
                <p className="text-stone-500 text-xs mt-3 sm:mt-4">
                  Response within 48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-700">
            <div>
              <p className="font-display font-black text-xl sm:text-2xl text-moss-400">900K+</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mt-1">Instagram</p>
            </div>
            <div>
              <p className="font-display font-black text-xl sm:text-2xl text-moss-400">15+</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mt-1">Years Botswana</p>
            </div>
            <div>
              <p className="font-display font-black text-xl sm:text-2xl text-moss-400">#1</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mt-1">Spiegel Bestseller</p>
            </div>
            <div>
              <p className="font-display font-black text-xl sm:text-2xl text-moss-400">Netflix</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mt-1">Documentary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
