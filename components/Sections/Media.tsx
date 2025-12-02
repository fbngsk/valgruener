import React from 'react';
import { Mic, Tv, MonitorPlay, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../UI/SectionHeading';

const APPEARANCES = [
    { name: 'Hotel Matze', type: 'Podcast', icon: <Mic />, desc: "Deep dive conversation about isolation and connection." },
    { name: 'Stern TV', type: 'Television', icon: <Tv />, desc: "Feature story on Sirga and the project." },
    { name: '3nach9', type: 'Talk Show', icon: <Tv />, desc: "Guest appearance discussing 'Löwenland'." },
    { name: 'Galileo', type: 'Documentary', icon: <MonitorPlay />, desc: "Science feature on lion behavior." },
    { name: 'RTL', type: 'News', icon: <Tv />, desc: "Ongoing coverage of Modisa." },
];

export const Media = () => {
  return (
    <section id="media" className="py-24 bg-stone-100 text-zinc-900">
        <div className="container mx-auto px-6">
            <SectionHeading eyebrow="Press & Features" title="In The Media" center />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-zinc-300 max-w-6xl mx-auto mt-16">
                {APPEARANCES.map((item, idx) => (
                    <div key={idx} className="bg-stone-50 p-12 border-b border-r border-zinc-300 hover:bg-white transition-colors group relative overflow-hidden">
                        <div className="absolute top-6 right-6 text-zinc-300 group-hover:text-moss-500 transition-colors">
                            {item.icon}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-moss-600 mb-2 block">{item.type}</span>
                        <h3 className="font-display font-bold text-3xl text-zinc-900 mb-4">{item.name}</h3>
                        <p className="text-zinc-600 font-light text-sm mb-6">{item.desc}</p>
                        
                        <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">
                            Watch / Listen <ArrowRight size={14} />
                        </a>
                    </div>
                ))}
                
                {/* Contact Card */}
                <div className="bg-zinc-900 p-12 border-b border-r border-zinc-300 flex flex-col justify-center items-center text-center">
                    <h3 className="font-display font-bold text-3xl text-white mb-4 uppercase">Press Inquiries</h3>
                    <p className="text-zinc-400 text-sm mb-6">For interviews and booking</p>
                    <a href="mailto:contact@valentingruener.com" className="bg-moss-600 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-zinc-900 transition-colors">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};