import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-400 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 inline-block">ExpertEdge</Link>
            <p className="text-light-300/60 text-sm mb-6">
              Connecting mentors and mentees for growth, learning, and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-300/60 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-light-300/60 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-light-300/60 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-light-300/80">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">How it Works</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Browse Mentors</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Success Stories</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Become a Mentor</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-light-300/80">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Guides</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Events</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-light-300/80">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Press</Link></li>
              <li><Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-300/60 text-sm">
            &copy; {new Date().getFullYear()} Mentor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="#" className="text-light-300/60 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;