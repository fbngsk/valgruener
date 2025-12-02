import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { href: '#sirga', label: 'Sirga' },
    { href: '#modisa', label: 'Modisa' },
    { href: '#book', label: 'Book' },
    { href: '#tour', label: 'Tour' },
    { href: '#media', label: 'Press' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/95 backdrop-blur-sm py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="container mx-auto px-5 sm:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wider">
          Val Grüner
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="text-stone-300 hover:text-white text-sm uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://modisawildlifeproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-moss-600 hover:bg-moss-500 text-white px-4 lg:px-5 py-2 text-xs uppercase tracking-widest font-bold transition-colors"
          >
            Support
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/98 backdrop-blur-sm border-t border-zinc-800">
          <div className="container mx-auto px-5 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-stone-300 hover:text-white py-3 text-sm uppercase tracking-widest transition-colors border-b border-zinc-800/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://modisawildlifeproject.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-moss-600 hover:bg-moss-500 text-white px-5 py-3 text-sm uppercase tracking-widest font-bold transition-colors text-center mt-4"
            >
              Support Modisa
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
