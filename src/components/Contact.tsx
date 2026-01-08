import React from 'react';
import { Mail, Phone, Github, Linkedin as LinkedIn, Download, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "ramakrishna21183@gmail.com",
      href: "mailto:ramakrishna21183@gmail.com",
      color: "hover:bg-red-500"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9390492076",
      href: "tel:+919390492076",
      color: "hover:bg-green-500"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "Ramakrishna365",
      href: "https://github.com/Ramakrishna365",
      color: "hover:bg-gray-900"
    },
    {
      icon: <LinkedIn size={24} />,
      label: "LinkedIn",
      value: "Rama Krishna Vempadapu",
      href: "https://www.linkedin.com/in/rama-krishna-vempadapu",
      color: "hover:bg-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-teal-300 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group ${item.color} hover:text-white`}
                >
                  <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-blue-100 group-hover:text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Quick Actions</h3>
            <div className="space-y-6">
              <button className="w-full bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download size={20} />
                Download My Resume
              </button>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-semibold mb-4 flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Current Location
                </h4>
                <p className="text-blue-100">Andhra Pradesh, India</p>
                <p className="text-blue-100 text-sm mt-2">Open to remote opportunities and relocation</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-semibold mb-4">Availability</h4>
                <p className="text-blue-100">Currently seeking full-time opportunities</p>
                <p className="text-blue-100 text-sm mt-2">Available for freelance projects and collaborations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-100 mb-4">
            " still a student,already debugging life."
          </p>
          <p className="text-sm text-blue-200">
            © 2025 Rama Krishna Vempadapu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;