'use client';

import { Film, Tv, Newspaper, Radio, Download, Mail, Camera, FileText, ExternalLink } from 'lucide-react';

export default function Media() {
  const appearances = [
    {
      type: 'Dokumentation',
      title: 'Saving Sirga: Journey into the Wild',
      outlet: 'Netflix / Nat Geo Wild',
      year: '2020',
      icon: Film,
      link: '#'
    },
    {
      type: 'TV-Auftritt',
      title: 'Stern TV',
      outlet: 'RTL',
      year: '2019',
      icon: Tv,
      link: '#'
    },
    {
      type: 'Artikel',
      title: 'Der Mann, der mit Löwen lebt',
      outlet: 'GEO Magazin',
      year: '2021',
      icon: Newspaper,
      link: '#'
    },
    {
      type: 'Podcast',
      title: 'Kalahari Diaries',
      outlet: 'Modisa Wildlife Project',
      year: '2023',
      icon: Radio,
      link: '#'
    },
  ];

  const pressAssets = [
    { label: 'Pressefotos (High-Res)', icon: Camera },
    { label: 'Offizielle Biografie', icon: FileText },
    { label: 'Logo & Branding', icon: Download },
  ];

  return (
    <section id="media" className="py-16 sm:py-24 md:py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sand-500 text-xs sm:text-sm tracking-[0.15em] uppercase mb-3 sm:mb-4">Presse & Medien</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6">In den Medien</h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg">Dokumentationen, Interviews und Berichte über meine Arbeit und das Leben mit Sirga.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {appearances.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="group bg-zinc-800/50 p-5 sm:p-6 hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <IconComponent size={20} className="text-sand-500 sm:w-6 sm:h-6" />
                  <span className="text-zinc-600 text-xs sm:text-sm">{item.year}</span>
                </div>
                <p className="text-sand-500 text-xs uppercase tracking-wider mb-1 sm:mb-2">{item.type}</p>
                <h3 className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-sand-400 transition-colors">{item.title}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm">{item.outlet}</p>
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 bg-zinc-800/30 border border-zinc-700/50">
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4">Presse-Kit</h3>
            <p className="text-zinc-400 text-sm sm:text-base mb-4 sm:mb-6">Für Journalisten und Medienvertreter stelle ich gerne hochauflösende Fotos, Hintergrundinformationen und Interview-Möglichkeiten zur Verfügung.</p>
            <div className="space-y-2 sm:space-y-3">
              {pressAssets.map((asset, index) => {
                const AssetIcon = asset.icon;
                return (
                  <button key={index} className="w-full flex items-center gap-3 text-left text-zinc-300 hover:text-white text-sm sm:text-base py-2 transition-colors">
                    <AssetIcon size={16} className="text-sand-500 shrink-0 sm:w-[18px] sm:h-[18px]" />
