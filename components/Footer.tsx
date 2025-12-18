
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eduBlue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2">
             <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-eduGold p-1">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-eduBlue">
                    <path d="M50 5 L15 25 L15 65 C15 85 50 95 50 95 C50 95 85 85 85 65 L85 25 L50 5 Z" fill="white" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="35" r="8" fill="#B8860B" />
                    <path d="M30 60 Q50 45 70 60 L65 75 Q50 65 35 75 Z" fill="#B8860B" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight font-serif uppercase">Louis Eduplus Ltd</span>
                </div>
              </Link>
              <p className="text-blue-100 max-w-md leading-relaxed mb-8">
                Empowering Minds, Transforming Learning. We provide Christ-centred educational solutions for schools, teachers, and parents to raise well-rounded learners.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 bg-blue-800 hover:bg-eduGold text-white rounded-full flex items-center justify-center transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                  </a>
                ))}
              </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="text-eduGold font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-eduGold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-eduGold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-eduGold transition-colors">Our Services</Link></li>
              <li><Link to="/books" className="hover:text-eduGold transition-colors">Publications</Link></li>
              <li><Link to="/contact" className="hover:text-eduGold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-eduGold font-bold uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center space-x-3">
                <span>📍</span>
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📧</span>
                <span>hello@louiseduplus.org</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📞</span>
                <span>+234 000 000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Louis Eduplus Ltd — Empowering Minds, Transforming Learning. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
