import React from 'react';
import { ArrowUpRight, Crosshair, ShieldAlert, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../UI/SectionHeading';

export const ModisaProject = () => {
  return (
    <section id="modisa" className="py-24 bg-zinc-950 text-white relative border-y border-zinc-800">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-dust-texture"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeading eyebrow="The Mission" title="Modisa Wildlife Project" light />
            <a 
                href="https://modisawildlifeproject.com" 
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-3 text-stone-400 hover:text-moss-500 transition-colors font-display font-bold uppercase tracking-widest text-sm mb-4"
            >
                Official Site <ArrowUpRight size={18} />
            </a>
        </div>

        <div className="grid md:grid-cols-3 border-t border-zinc-800">
            {/* Card 1 */}
            <div className="group border-b md:border-b-0 md:border-r border-zinc-800 p-10 hover:bg-zinc-900 transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-zinc-800 group-hover:text-moss-600 transition-colors">
                    <Crosshair size={32} />
                </div>
                <span className="text-moss-600 font-mono text-xs mb-4 block">01 / LOCATION</span>
                <h3 className="text-3xl font-display font-bold uppercase mb-4 text-white">The Frontline</h3>
                <p className="text-stone-400 font-light leading-relaxed">
                    Operating in the heart of the Kalahari. A harsh, uncompromising landscape where we manage 10,000 hectares of pure wilderness facing encroachment.
                </p>
            </div>

            {/* Card 2 */}
            <div className="group border-b md:border-b-0 md:border-r border-zinc-800 p-10 hover:bg-zinc-900 transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-zinc-800 group-hover:text-moss-600 transition-colors">
                    <ShieldAlert size={32} />
                </div>
                <span className="text-moss-600 font-mono text-xs mb-4 block">02 / ACTION</span>
                <h3 className="text-3xl font-display font-bold uppercase mb-4 text-white">Active Protection</h3>
                <p className="text-stone-400 font-light leading-relaxed">
                    We don't just observe; we intervene. Mitigating human-wildlife conflict, relocating predators, and securing the perimeter for future generations.
                </p>
            </div>

            {/* Card 3 */}
            <div className="group p-10 hover:bg-zinc-900 transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-zinc-800 group-hover:text-moss-600 transition-colors">
                    <HeartHandshake size={32} />
                </div>
                <span className="text-moss-600 font-mono text-xs mb-4 block">03 / FUTURE</span>
                <h3 className="text-3xl font-display font-bold uppercase mb-4 text-white">Coexistence</h3>
                <p className="text-stone-400 font-light leading-relaxed">
                    Education is our weapon. Creating a sustainable model where local communities benefit from the wildlife, turning poachers into protectors.
                </p>
            </div>
        </div>

        {/* Mobile Link */}
        <div className="mt-12 md:hidden">
            <a 
                href="https://modisawildlifeproject.com" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-zinc-950 px-8 py-4 uppercase font-display font-bold tracking-widest"
            >
                Support Mission <ArrowUpRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};