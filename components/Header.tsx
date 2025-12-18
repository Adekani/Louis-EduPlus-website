
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Books', path: '/books' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-eduBlue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-eduGold p-1 overflow-hidden">
               {/* Simplified Logo Placeholder representing the shield and person */}
               <svg viewBox="0 0 100 100" className="w-full h-full text-eduBlue">
                 <path d="M50 5 L15 25 L15 65 C15 85 50 95 50 95 C50 95 85 85 85 65 L85 25 L50 5 Z" fill="white" stroke="currentColor" strokeWidth="2" />
                 <circle cx="50" cy="35" r="8" fill="#B8860B" />
                 <path d="M30 60 Q50 45 70 60 L65 75 Q50 65 35 75 Z" fill="#B8860B" />
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight font-serif uppercase">Louis</span>
              <span className="text-xs text-eduGold font-bold uppercase tracking-widest leading-none">Eduplus Ltd</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-eduGold ${
                  isActive(link.path) ? 'text-eduGold border-b-2 border-eduGold' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-100 hover:text-eduGold focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-eduBlue border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'text-eduGold bg-blue-900' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
