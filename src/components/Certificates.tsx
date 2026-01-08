import React, { useState } from 'react';
import { Award, BarChart3, Palette, Cloud, Eye, Download, X } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      title: "Power BI",
      description: "Comprehensive certification covering data visualization, DAX functions, and interactive dashboard creation for business intelligence solutions.",
      skills: ["Data Visualization", "DAX Functions", "Interactive Dashboards", "Business Intelligence"],
      icon: <BarChart3 className="text-white" size={24} />,
      color: "from-yellow-500 to-orange-500",
      imagePath: "/certificates/powerbi-certificate.jpg",
      pdfPath: "/certificates/powerbi-certificate.pdf",
      issuer: "Microsoft",
      date: "2024"
    },
    {
      title: "UI/UX Design",
      description: "Professional certification in user interface and user experience design, covering wireframes, prototypes, and design thinking methodologies.",
      skills: ["Wireframing", "Prototyping", "Figma/Adobe XD", "Design Thinking", "User Research"],
      icon: <Palette className="text-white" size={24} />,
      color: "from-purple-500 to-pink-500",
      imagePath: "/certificates/uiux-certificate.jpg",
      pdfPath: "/certificates/uiux-certificate.pdf",
      issuer: "Google",
      date: "2024"
    },
    {
      title: "Python Full Stack with Django",
      description: "Complete full-stack development certification with Python and AWS cloud services, including deployment and infrastructure management.",
      skills: ["Python Development", "AWS EC2", "AWS S3", "IAM Management", "Cloud Deployment"],
      icon: <Cloud className="text-white" size={24} />,
      color: "from-green-500 to-teal-500",
      imagePath: "/certificates/python-aws-certificate.jpg",
      pdfPath: "/certificates/python-aws-certificate.pdf",
      issuer: "AWS",
      date: "2024"
    }
  ];

  const handleViewCertificate = (certificate: any) => {
    setSelectedCertificate(certificate);
  };

  const handleDownloadCertificate = (certificate: any) => {
    const link = document.createElement('a');
    link.href = certificate.pdfPath;
    link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certificates & Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className={`h-3 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg`}>
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{cert.title}</h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{cert.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award size={16} className="mr-2 text-blue-600" />
                    Skills Acquired:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span><strong>Issued by:</strong> {cert.issuer}</span>
                    <span><strong>Year:</strong> {cert.date}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleViewCertificate(cert)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200"
                  >
                    <Eye size={16} />
                    View
                  </button>
                  <button 
                    onClick={() => handleDownloadCertificate(cert)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200"
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-8">
            Continuously expanding my skill set through professional certifications and hands-on learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Certificates
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Download All
            </button>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-2xl font-bold text-gray-900">{selectedCertificate.title} Certificate</h3>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="bg-gray-100 rounded-lg p-8 mb-4">
                    <img 
                      src={selectedCertificate.imagePath} 
                      alt={`${selectedCertificate.title} Certificate`}
                      className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAsMTUwIEwyMDAsMTUwIiBzdHJva2U9IiM5Q0E5QkEiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjM3MzgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iPkNlcnRpZmljYXRlIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button 
                      onClick={() => handleDownloadCertificate(selectedCertificate)}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200"
                    >
                      <Download size={18} />
                      Download Certificate
                    </button>
                    <button 
                      onClick={closeModal}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;