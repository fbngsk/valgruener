'use client';

import { MapPin, Calendar, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '15+', label: 'Jahre in Botswana' },
    { number: '700k', label: 'Hektar Schutzgebiet' },
    { number: '1', label: 'Löwin namens Sirga' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-zinc-900">
              <img 
                src="/images/val-sirga-portrait.jpg" 
                alt="Valentin Grüner mit Sirga in der Kalahari"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-4 sm:p-6">
              <p className="text-zinc-400 text-xs sm:text-sm flex items-center gap-2">
                <MapPin size={14} className="shrink-0" />
                Kalahari, Botswana
              </p>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-sand-600/30 -z-10" />
            {/* Photo Credit */}
            <p className="absolute -bottom-8 sm:-bottom-10 right-0 text-[10px] sm:text-xs text-zinc-600">
              Foto: Modisa Wildlife Project
            </p>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Eyebrow */}
            <p className="text-sand-500 text-xs sm:text-sm tracking-[0.15em] uppercase mb-3 sm:mb-4">
              Über mich
            </p>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 sm:mb-8 leading-tight">
              Ein Leben für den<br />
              <span className="text-sand-400">Naturschutz</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Aufgewachsen am Bodensee, träumte ich schon als Kind davon, wilde Tiere 
                in Afrika zu schützen. Mit Anfang zwanzig wagte ich den Sprung – erst nach 
                Kanada, um Geld zu verdienen, dann nach Namibia und schließlich nach Botswana.
              </p>
              <p>
                Heute lebe ich in einer der abgelegensten Ecken der Kalahari. Hier habe ich 
                Sirga aufgezogen, eine Löwin, die als wenige Tage altes Jungtier von ihrer 
                Mutter verstoßen wurde. Ihre Geschichte wurde weltweit bekannt.
              </p>
              <p>
                Mit dem <strong className="text-white">Modisa Wildlife Project</strong> arbeite 
                ich daran, Wildtiere zu schützen, Lebensräume zu bewahren und lokale 
                Gemeinschaften einzubinden.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-zinc-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-light text-white mb-1">{stat.number}</p>
                  <p className="text-zinc-500 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
