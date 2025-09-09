import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: GraduationCap, title: 'M.B.B.S.', description: 'Medical Degree' },
    { icon: Award, title: 'D.M.R.E', description: 'Radiology Expertise' },
    { icon: Users, title: '5000+', description: 'Patients Treated' },
    { icon: Clock, title: '10+', description: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Meet Our Expert</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dr. Suresh Raosaheb{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Shinde
              </span>
            </h2>
            
            <div className="mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-sm px-3 py-1 mr-2 mb-2">
                M.B.B.S.
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-sm px-3 py-1 mr-2 mb-2">
                D.M.R.E
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-sm px-3 py-1 mb-2">
                Consultant Radiologist
              </Badge>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dr. Suresh Raosaheb Shinde is a highly qualified radiologist with extensive experience 
              in diagnostic imaging. With his M.B.B.S. degree and specialized training in D.M.R.E 
              (Diploma in Medical Radio-diagnosis and Electrology), he brings precision and expertise 
              to every diagnostic procedure.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our diagnostic center is equipped with state-of-the-art technology and follows the 
              highest standards of medical care. We are committed to providing accurate, reliable, 
              and timely diagnostic services to help you maintain optimal health.
            </p>

            {/* Registration Info */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Professional Registration</h4>
              <p className="text-gray-600">Registration No: 2009/09/3378</p>
              <p className="text-gray-600">Consultant Radiologist (Radiodiagnosis)</p>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-green-500"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Mission Statement */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-700 leading-relaxed">
                  "To provide precise and transparent diagnostic services that empower patients 
                  and healthcare providers with accurate information for better health outcomes. 
                  We believe in combining advanced technology with compassionate care."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;