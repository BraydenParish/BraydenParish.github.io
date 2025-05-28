
import React from 'react';
import { ExternalLink, Github, Server, Users, Cloud, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Active Directory Home Lab',
      description: 'A comprehensive Windows Server environment simulating a small business network. Features organizational units, user management, group policies, and security configurations for hands-on domain administration experience.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=600',
      tech: ['Windows Server 2022', 'Active Directory', 'Group Policy', 'PowerShell'],
      github: 'https://github.com',
      live: '#',
      icon: Users,
      status: 'In Development'
    },
    {
      title: 'IT Ticketing System Setup',
      description: 'Implementation and configuration of an open-source ticketing system for efficient issue tracking. Includes department setup, SLA configuration, workflow automation, and user role management.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600',
      tech: ['osTicket', 'MySQL', 'PHP', 'Apache', 'Linux'],
      github: 'https://github.com',
      live: '#',
      icon: FileText,
      status: 'Planning'
    },
    {
      title: 'Cloud Infrastructure Project',
      description: 'Hands-on cloud deployment showcasing fundamental AWS/Azure services. Includes secure storage configuration, virtual machine deployment, and basic security implementations with proper IAM policies.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600',
      tech: ['AWS S3', 'EC2', 'IAM', 'Security Groups', 'CloudFormation'],
      github: 'https://github.com',
      live: '#',
      icon: Cloud,
      status: 'Planning'
    },
    {
      title: 'Troubleshooting Documentation',
      description: 'A collection of documented troubleshooting scenarios common in Help Desk environments. Includes step-by-step resolution processes, diagnostic methodologies, and best practice recommendations.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600',
      tech: ['Documentation', 'Troubleshooting', 'Process Design', 'Best Practices'],
      github: 'https://github.com',
      live: '#',
      icon: Server,
      status: 'Planning'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My IT Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some projects I've built to develop and demonstrate my skills in IT support, 
            system administration, and cloud fundamentals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'In Development' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                    <project.icon className="text-white" size={16} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
