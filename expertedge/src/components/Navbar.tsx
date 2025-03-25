import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui-elements/Button';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Find Mentors', href: '/mentors' },
    { name: 'Categories', href: '/category' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-6',
      isScrolled ? 'glass-darker backdrop-blur-xl' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gradient mr-8">ExpertEdge</Link>
          
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  className="text-light-200 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>

        <button 
          className="md:hidden text-light-200" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-dark-400/95 backdrop-blur-xl transition-transform duration-300 transform pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="px-4 py-2 space-y-6">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  className="text-light-200 hover:text-white block text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="space-y-3 pt-4 border-t border-white/10">
            <Button variant="ghost" fullWidth>Sign In</Button>
            <Button variant="primary" fullWidth>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;