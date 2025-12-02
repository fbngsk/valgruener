import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#sirga', label: 'Sirga' },
  { href: '#modisa', label: 'Modisa' },
  { href: '#book', label: 'Book' },
  { href: '#tour', label: 'Tour' },
  { href: '#media', label: 'Press' },
];

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl uppercase tracking-tight text-white">
          Val Grüner
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-stone-300 hover:text-moss-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
            href="https://modisawildlifeproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-moss-600 hover:bg-moss-500 text-white px-5 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
          >
            Support
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-widest text-stone-300 hover:text-moss-400 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            
              href="https://modisawildlifeproject.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-moss-600 text-white px-5 py-3 text-center font-bold uppercase tracking-widest mt-4"
            >
              Support Modisa
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
