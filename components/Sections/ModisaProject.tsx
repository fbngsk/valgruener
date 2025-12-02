import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { MapPin, Shield, Users, ExternalLink } from 'lucide-react';

export const ModisaProject = () => {
  return (
    <section id="modisa" className="py-16 sm:py-24 md:py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-5 sm:px-6">
        
        <SectionHeading 
          eyebrow="The Project"
          title="Modisa Wildlife Project"
          light
        />

        <div className="max-w-3xl mt-6 sm:mt-8">
          <p className="text-stone-400 leading-relaxed text-sm sm:text-base md:text-lg">
            Modisa means "shepherd" in Setswana. Since 2009, this grassroots conservation 
            effort protects over 10,000 hectares of Kalahari wilderness—working alongside 
            local communities, not above them.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          
          <div className="bg-zinc-800/50 border border-zinc-700 p-5 sm:p-8 hover:border-moss-600 transition-colors">
            <MapPin className="text-moss-500 mb-4 sm:mb-6" size={28} />
            <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-3">
              Deep Kalahari
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Operating in one of Earth's last wild places. No fences with nature, 
              just open savanna and ancient riverbeds.
            </p>
            <p className="text-moss-400 font-bold text-xl sm:text-2xl mt-4 sm:mt-6">10,000+ ha</p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 p-5 sm:p-8 hover:border-moss-600 transition-colors">
            <Shield className="text-moss-500 mb-4 sm:mb-6" size={28} />
            <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-3">
              Active Protection
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Anti-poaching patrols, wildlife monitoring, and habitat restoration. 
              Direct action, not paperwork.
            </p>
            <p className="text-moss-400 font-bold text-xl sm:text-2xl mt-4 sm:mt-6">24/7 Presence</p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 p-5 sm:p-8 hover:border-moss-600 transition-colors sm:col-span-2 lg:col-span-1">
            <Users className="text-moss-500 mb-4 sm:mb-6" size={28} />
            <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-3">
              Community First
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Every team member is from Botswana. Conservation that creates jobs and 
              respects local knowledge.
            </p>
            <p className="text-moss-400 font-bold text-xl sm:text-2xl mt-4 sm:mt-6">100% Local</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-zinc-700">
          <a 
            href="https://modisawildlifeproject.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-white hover:text-moss-400 transition-colors text-sm sm:text-base"
          >
            <span className="font-bold uppercase tracking-widest">modisawildlifeproject.com</span>
            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
          </a>
          <span className="hidden sm:block text-zinc-600">|</span>
          <a 
            href="https://www.patreon.com/modisawildlifeproject"
            target="_blank"
            rel="noopener noreferrer"
            className="text-moss-400 hover:text-moss-300 font-bold uppercase tracking-widest transition-colors text-sm sm:text-base"
          >
            Support on Patreon →
          </a>
        </div>
      </div>
    </section>
  );
};
