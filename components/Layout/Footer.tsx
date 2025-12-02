import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-stone-400 py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Brand */}
            <div className="md:col-span-5">
                <h4 className="text-4xl font-display font-bold text-white uppercase mb-6 italic">Valentin Grüner</h4>
                <p className="max-w-sm text-stone-500 font-light leading-relaxed mb-8">
                    Ranger. Conservationist. Author. <br/>
                    Living in the wilderness of Botswana. Dedicated to the conservation of lions and the preservation of the Kalahari ecosystem.
                </p>
                <div className="flex space-x-6">
                    <a href="https://instagram.com" className="text-white hover:text-moss-500 transition-colors"><Instagram size={24} /></a>
                    <a href="https://facebook.com" className="text-white hover:text-moss-500 transition-colors"><Facebook size={24} /></a>
                    <a href="https://youtube.com" className="text-white hover:text-moss-500 transition-colors"><Youtube size={24} /></a>
                </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
                <h5 className="text-white font-bold font-display uppercase tracking-widest text-lg mb-8">Menu</h5>
                <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                    <li><a href="#about" className="hover:text-moss-500 transition-colors">Story</a></li>
                    <li><a href="#modisa" className="hover:text-moss-500 transition-colors">Modisa Project</a></li>
                    <li><a href="#tour" className="hover:text-moss-500 transition-colors">Live Tour 2027</a></li>
                    <li><a href="#book" className="hover:text-moss-500 transition-colors">Book</a></li>
                    <li><a href="#media" className="hover:text-moss-500 transition-colors">Media</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-4">
                <h5 className="text-white font-bold font-display uppercase tracking-widest text-lg mb-8">From the Bush</h5>
                <p className="text-sm mb-6 font-light">Join the newsletter for tour updates and stories.</p>
                <form className="flex flex-col gap-4">
                    <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS" 
                        className="bg-zinc-900 border border-zinc-800 text-white px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-moss-600 transition-colors placeholder-zinc-600"
                    />
                    <button type="button" className="bg-white text-zinc-950 px-4 py-4 text-sm font-bold uppercase tracking-widest hover:bg-moss-600 hover:text-white transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>

        </div>

        <div className="border-t border-zinc-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 font-bold uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Valentin Grüner.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-stone-300">Imprint</a>
                <a href="#" className="hover:text-stone-300">Privacy</a>
                <a href="#" className="hover:text-stone-300">Contact</a>
            </div>
        </div>
      </div>
    </footer>
  );
};