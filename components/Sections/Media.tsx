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
    <section id="media" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        
        <SectionHeading 
          eyebrow="Press & Media"
          title="In The News"
        />

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-20">
          {appearances.map((item, index) => (
            
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-stone-50 hover:bg-stone-100 p-6 transition-colors border border-stone-200 hover:border-moss-600"
            >
              <div className="flex items-start gap-4">
                <div className="bg-moss-600/10 p-3">
                  <item.icon className="text-moss-600" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">
                    {item.type}
                  </p>
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide text-zinc-900 group-hover:text-moss-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Press Kit Section */}
        <div className="bg-zinc-900 text-white p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Download className="text-moss-500" size={24} />
                <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
                  Press Kit
                </h3>
              </div>
              <p className="text-stone-400 leading-relaxed mb-6">
                Everything journalists and producers need. High-resolution photos, 
                official biography, and project facts.
              </p>
              <ul className="space-y-3 text-stone-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500" />
                  Hi-res photos (print & web)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500" />
                  Official biography (DE/EN)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500" />
                  Modisa Project fact sheet
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-moss-500" />
                  Video footage (on request)
                </li>
              </ul>
            </div>

            {/* Right: Contact */}
            <div className="lg:border-l lg:border-zinc-700 lg:pl-12">
              <h4 className="font-display font-bold uppercase tracking-widest text-sm text-stone-400 mb-6">
                Press Contact
              </h4>
              <div className="bg-zinc-800 p-6">
                <p className="font-display font-bold text-xl text-white mb-1">
                  Fabian Gieske
                </p>
                <p className="text-stone-400 text-sm mb-4">
                  Media & Communications<br/>
                  Modisa Wildlife Project
                </p>
                <a 
                  href="mailto:fabian@modisa.org?subject=Press%20Inquiry%20-%20Valentin%20Grüner"
                  className="inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-500 text-white px-6 py-3 font-bold uppercase tracking-widest text-sm transition-colors"
                >
                  <Mail size={16} />
                  fabian@modisa.org
                </a>
                <p className="text-stone-500 text-xs mt-4">
                  Response within 48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-zinc-700">
            <div>
              <p className="font-display font-black text-2xl text-moss-400">900K+</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Instagram</p>
            </div>
            <div>
              <p className="font-display font-black text-2xl text-moss-400">15+</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Years Botswana</p>
            </div>
            <div>
              <p className="font-display font-black text-2xl text-moss-400">#1</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Spiegel Bestseller</p>
            </div>
            <div>
              <p className="font-display font-black text-2xl text-moss-400">Netflix</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">Documentary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
