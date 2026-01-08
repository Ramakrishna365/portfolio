import React from 'react';
import { Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated software engineer currently pursuing my B.Tech in Artificial Intelligence 
              and Machine Learning. My passion lies in building robust, scalable applications using 
              Java Full Stack technologies while exploring the cutting-edge world of AI and ML.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              As a hardworking learner, I believe in the power of practical experience. I constantly 
              challenge myself through real-world projects and internships, transforming theoretical 
              knowledge into tangible solutions that make a difference.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey is driven by curiosity and a commitment to excellence. Whether it's developing 
              an emotion-based music player or predicting IPL winners using machine learning, I approach 
              every project with enthusiasm and attention to detail.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Full Stack Development</h3>
              </div>
              <p className="text-gray-700">Passionate about creating end-to-end solutions using Java, Spring Boot, React, and modern web technologies.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-600 rounded-lg">
                  <Brain className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">AI & Machine Learning</h3>
              </div>
              <p className="text-gray-700">Exploring intelligent solutions through machine learning algorithms, data analysis, and predictive modeling.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Innovation Mindset</h3>
              </div>
              <p className="text-gray-700">Always seeking creative solutions and staying updated with the latest technologies and industry trends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;