import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#about' },
    { name: 'Modisa', href: '#modisa' },
    { name: 'Book', href: '#book' },
    { name: 'Live Tour 2027', href: '#tour', highlight: true },
    { name: 'Press', href: '#media' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-display font-bold tracking-tighter text-white uppercase italic">
          Valentin <span className="text-moss-600">Grüner</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold tracking-widest uppercase font-sans hover:text-moss-500 transition-colors ${
                link.highlight ? 'text-moss-500' : 'text-stone-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://modisawildlifeproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:border-moss-500 hover:text-moss-500 text-white px-5 py-2 text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-2"
          >
            Support <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 h-screen border-t border-zinc-800">
          <div className="flex flex-col p-8 space-y-8 text-center pt-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display font-bold uppercase ${link.highlight ? 'text-moss-600' : 'text-stone-300'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://modisawildlifeproject.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-moss-600 text-white py-4 px-8 text-lg font-display font-bold uppercase tracking-widest inline-block"
            >
              Support Modisa
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};