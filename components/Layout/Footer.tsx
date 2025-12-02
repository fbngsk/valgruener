import React from 'react';
import { Instagram, Youtube, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12 sm:py-16">
      <div className="container mx-auto px-5 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider mb-3 sm:mb-4">
              Valentin Grüner
            </p>
            <p className="text-stone-400 text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
              Conservationist, author, and founder of the Modisa Wildlife Project 
              in Botswana's Kalahari Desert.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sirgathelioness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors p-2 -ml-2"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://www.youtube.com/@ModisaWildlifeProject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors p-2"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs text-stone-500 mb-4 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#sirga" className="text-stone-400 hover:text-white transition-colors text-sm">Sirga</a></li>
              <li><a href="#modisa" className="text-stone-400 hover:text-white transition-colors text-sm">Modisa Project</a></li>
              <li><a href="#book" className="text-stone-400 hover:text-white transition-colors text-sm">Book</a></li>
              <li><a href="#tour" className="text-stone-400 hover:text-white transition-colors text-sm">Live Tour</a></li>
              <li><a href="#media" className="text-stone-400 hover:text-white transition-colors text-sm">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs text-stone-500 mb-4 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="mailto:fabian@modisa.org"
                  className="text-stone-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                >
                  <Mail size={14} />
                  <span className="truncate">fabian@modisa.org</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://modisawildlifeproject.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  modisawildlifeproject.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.patreon.com/modisawildlifeproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-moss-400 hover:text-moss-300 transition-colors text-sm font-medium"
                >
                  Support on Patreon →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-stone-500 text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} Valentin Grüner. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs order-1 sm:order-2">
            Photos: Fabian Gieske / Modisa Wildlife Project
          </p>
        </div>
      </div>
    </footer>
  );
};
