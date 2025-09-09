import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SDC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Shinde</h3>
                <p className="text-green-400">Diagnostic Center</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing precise and transparent diagnostic services with state-of-the-art 
              equipment and expert medical care since over a decade.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <span className="text-sm">Registration No:</span>
              <span className="text-sm font-medium">2009/09/3378</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Sonography</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Color Doppler</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Digital X-Ray</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">8877 123 888</p>
                  <p className="text-sm text-gray-400">Call anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">drshindediagnosticcentre@gmail.com</p>
                  <p className="text-sm text-gray-400">Send us a message</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Plot No. 31, Tuljai Niwas, Godavari Colony</p>
                  <p className="text-sm text-gray-400">Chhatrapati Sambhajinagar Road</p>
                  <p className="text-sm text-gray-400">Near Nahadi (Indian Oil) Petrol pump</p>
                  <p className="text-sm text-gray-400">Ganganagar, Dist. Chhatrapati Sambhajinagar - 431109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-400">Sunday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Dr. Shinde Diagnostic Center. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Dr. Suresh Raosaheb Shinde - M.B.B.S., D.M.R.E, Consultant Radiologist
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Precise & Transparent Diagnosis</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;