import React from 'react';
import { Music, Trophy, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Emotion-Based Music Player",
      description: "An innovative music player that uses facial emotion detection or mood input to curate and play personalized music playlists. Built with Java Full Stack architecture and integrated machine learning models for emotion recognition.",
      technologies: ["Java", "Spring Boot", "React", "Machine Learning", "OpenCV", "REST APIs"],
      icon: <Music className="text-white" size={24} />,
      color: "from-pink-500 to-rose-500",
      features: [
        "Real-time facial emotion detection",
        "Mood-based playlist generation",
        "User preference learning",
        "Responsive web interface"
      ]
    },
    {
      title: "IPL Winner Prediction",
      description: "A comprehensive machine learning project that predicts IPL match winners using historical match data. Implemented multiple algorithms including Logistic Regression and Random Forest classifiers with extensive data preprocessing.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Logistic Regression", "Random Forest"],
      icon: <Trophy className="text-white" size={24} />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Historical data analysis",
        "Multiple ML algorithms",
        "Model performance comparison",
        "Prediction accuracy optimization"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border border-gray-100">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-lg`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{project.title}</h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    <Github size={16} />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;