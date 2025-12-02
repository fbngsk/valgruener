import React from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { MapPin, Shield, Users, ExternalLink } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Deep Kalahari',
    description: '10,000+ hectares of protected wilderness. No roads. No neighbors. Just desert, dunes, and predators.',
  },
  {
    icon: Shield,
    title: 'Active Protection',
    description: 'Anti-poaching patrols, wildlife monitoring, and emergency rescue. 24/7, 365 days a year.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: '100% local team from surrounding villages. Jobs, training, and a future tied to conservation.',
  },
];

export const ModisaProject = () => {
  return (
    <section id="modisa" className="py-24 md:py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        
        <SectionHeading 
          eyebrow="The Project"
          title="Modisa Wildlife"
          light
        />

        <div className="max-w-3xl mt-8 mb-16">
          <p className="text-xl text-stone-400 leading-relaxed">
            Modisa means "shepherd" in Setswana. This isn't ecotourism theater. 
            It's a life. Since 2009, I've worked to protect one of Africa's last wild frontiers—
            one hectare, one animal, one day at a time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-zinc-800/50 border border-zinc-700 p-8 hover:border-moss-600 transition-colors"
            >
              <feature.icon className="text-moss-500 mb-4" size={32} />
              <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://modisawildlifeproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-moss-600 hover:bg-moss-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3"
          >
            Modisa Website
            <ExternalLink size={16} />
          </a>
          <a 
            href="https://www.patreon.com/modisa"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-white/30 hover:border-moss-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3"
          >
            Support on Patreon
          </a>
        </div>
      </div>
    </section>
  );
};
