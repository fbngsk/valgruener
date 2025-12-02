import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white py-16 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-4">
              Valentin Grüner
            </h3>
            <p className="text-stone-400 leading-relaxed mb-6">
              Ranger. Conservationist. Author.<br/>
              Living in the Kalahari since 2009.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sirgathelioness/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 hover:bg-moss-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@ModisaWildlifeProject" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 hover:bg-moss-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-4 text-stone-400">
              Explore
            </h4>
            <ul className="space-y-3">
              <li><a href="#sirga" className="text-stone-300 hover:text-moss-400 transition-colors">Sirga</a></li>
              <li><a href="#modisa" className="text-stone-300 hover:text-moss-400 transition-colors">Modisa Project</a></li>
              <li><a href="#book" className="text-stone-300 hover:text-moss-400 transition-colors">The Book</a></li>
              <li><a href="#tour" className="text-stone-300 hover:text-moss-400 transition-colors">Live Tour</a></li>
              <li><a href="#media" className="text-stone-300 hover:text-moss-400 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-4 text-stone-400">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Press & Media</p>
                <a 
                  href="mailto:fabian@modisa.org" 
                  className="text-moss-400 hover:text-moss-300 transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  fabian@modisa.org
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Project</p>
                <a 
                  href="https://modisawildlifeproject.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-moss-400 transition-colors"
                >
                  modisawildlifeproject.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Support</p>
                <a 
                  href="https://www.patreon.com/modisa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-moss-400 transition-colors"
                >
                  Patreon
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {currentYear} Valentin Grüner. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs">
            Photos: Fabian Gieske / Modisa Wildlife Project
          </p>
        </div>
      </div>
    </footer>
  );
};
