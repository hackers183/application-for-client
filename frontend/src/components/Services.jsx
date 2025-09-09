import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Activity, Heart, Bone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: 'Sonography',
      description: 'Advanced ultrasound imaging for detailed internal examination with high-resolution visualization.',
      features: ['Abdominal Sonography', 'Pelvic Sonography', 'Obstetric Scans', 'Thyroid Scans'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Color Doppler',
      description: 'Specialized blood flow analysis to detect vascular conditions and monitor circulation.',
      features: ['Cardiac Doppler', 'Carotid Doppler', 'Renal Doppler', 'Peripheral Vascular'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Bone,
      title: 'Digital X-Ray',
      description: 'State-of-the-art digital radiography for accurate bone and tissue imaging.',
      features: ['Chest X-Ray', 'Bone X-Ray', 'Spine Imaging', 'Joint Analysis'],
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Activity className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Diagnostic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a complete range of diagnostic services using cutting-edge technology 
            and expert medical professionals to ensure accurate results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white group-hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Diagnostic Test?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Book your appointment today and get accurate results with our advanced diagnostic services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
                Call: 8877 123 888
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;