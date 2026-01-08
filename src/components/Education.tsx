import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech (AIML)",
      institution: "Sri Vasavi Engineering College",
      duration: "08/2023 – 04/2026",
      score: "CGPA: 8.3",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on software engineering principles."
    },
    {
      degree: "Diploma (EEE)",
      institution: "Sri Mullapudi Venkataraya Memorial College",
      duration: "09/2020 – 05/2023",
      score: "Score: 82%",
      description: "Strong foundation in Electrical and Electronics Engineering with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg text-gray-600">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center text-gray-700 bg-gray-100 px-4 py-2 rounded-lg">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-blue-700 bg-blue-100 px-4 py-2 rounded-lg">
                      <Award size={16} className="mr-2" />
                      <span className="text-sm font-semibold">{edu.score}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;