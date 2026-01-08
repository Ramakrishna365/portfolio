import React from 'react';
import { Download, Github, Linkedin as LinkedIn, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Rama_Krishna_Vempadapu_Resume.pdf';
    link.download = 'Rama_Krishna_Vempadapu_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300">
              <img 
                src="/profile-photo.jpg" 
                alt="Rama Krishna Vempadapu" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient with initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center"><span class="text-4xl font-bold text-white">RK</span></div>';
                  }
                }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            <span className="block">Rama Krishna</span>
            <span className="block text-blue-600">Vempadapu</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
            Software Engineer | Java Full Stack | AI/ML Enthusiast
          </p>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital space! I'm passionate about crafting innovative software solutions 
            and exploring the fascinating world of artificial intelligence and machine learning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Ramakrishna365"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-900 hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rama-krishna-vempadapu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <LinkedIn size={24} />
            </a>
            <a
              href="mailto:ramakrishna21183@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-red-500 hover:text-white"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+919390492076"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-green-500 hover:text-white"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;