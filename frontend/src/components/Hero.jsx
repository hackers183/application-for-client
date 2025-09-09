import React from 'react';
import { Button } from './ui/button';
import { Shield, Clock, Award, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-in slide-in-from-left-5 duration-700">
              <Shield className="w-4 h-4" />
              <span>Trusted Healthcare Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-in slide-in-from-left-5 duration-700 delay-200">
              Precise &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Transparent
              </span>{' '}
              Diagnosis
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-in slide-in-from-left-5 duration-700 delay-400">
              Advanced diagnostic services with state-of-the-art equipment and expert care. 
              Your health is our priority with accurate results you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in slide-in-from-left-5 duration-700 delay-600">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg group transform hover:scale-105 transition-all duration-300">
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-in slide-in-from-left-5 duration-700 delay-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">99%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Medical Equipment */}
          <div className="relative animate-in slide-in-from-right-5 duration-700 delay-300">
            <div className="relative">
              {/* Main Equipment Illustration */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                <div className="space-y-6">
                  {/* Ultrasound Machine */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="w-full h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-green-400 text-lg font-mono">~ SONOGRAPHY ~</div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800">Advanced Ultrasound</h3>
                      <p className="text-sm text-gray-600">High-resolution imaging</p>
                    </div>
                  </div>

                  {/* X-Ray Display */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="w-full h-20 bg-gray-700 rounded-lg mb-2 flex items-center justify-center">
                        <div className="text-blue-400 text-xs font-mono">DIGITAL X-RAY</div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-600">Digital Imaging</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="w-full h-20 bg-gray-700 rounded-lg mb-2 flex items-center justify-center">
                        <div className="text-red-400 text-xs font-mono">COLOR DOPPLER</div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-600">Blood Flow Analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                <Award className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;