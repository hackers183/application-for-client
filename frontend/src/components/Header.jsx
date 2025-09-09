import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">SDC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Dr. Shinde</h1>
              <p className="text-sm text-green-600">Diagnostic Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Home</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Services</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4 text-green-600" />
              <span>8877 123 888</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span>8877 123 888</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;