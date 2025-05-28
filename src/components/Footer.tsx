
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Brayden Parish</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
