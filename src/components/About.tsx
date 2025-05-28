
import React from 'react';
import { Code, HelpCircle, Users, GraduationCap, Server, Cloud, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Troubleshooting & Support', icon: HelpCircle, description: 'Problem-solving and technical diagnosis' },
    { name: 'Active Directory', icon: Users, description: 'User management and authentication' },
    { name: 'Cloud Solutions', icon: Cloud, description: 'Cloud infrastructure and implementation' },
    { name: 'Ticketing Systems', icon: Server, description: 'Issue tracking and configuration' },
    { name: 'Linux Administration', icon: Terminal, description: 'Command-line proficiency and system management' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            I am an aspiring IT professional with a genuine passion for troubleshooting and problem-solving. 
            There's something deeply satisfying about diagnosing technical issues and finding solutions that get people back to work efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Drives Me</h3>
              <p className="text-gray-600 mb-4">
                My approach combines patience with persistence – I believe every technical challenge has a solution, and I enjoy the process of discovering it. 
                What drives me most in technology is the opportunity to help others.
              </p>
              <p className="text-gray-600">
                Whether it's resolving a software conflict, setting up user accounts, or explaining a technical process in simple terms, 
                I find fulfillment in making technology work seamlessly for end users. Throughout my personal computing journey, I've consistently 
                enjoyed the challenge of diagnosing and resolving technical issues, from software conflicts to network connectivity problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                Computers have been a constant presence in my life for as long as I can remember. My fascination with technology deepened when I began exploring Linux environments over a year ago, learning to navigate the command line, manage packages, and troubleshoot system configurations. This hands-on experience opened my eyes to the deeper workings of operating systems and solidified my passion for understanding how technology works from the ground up.
              </p>
              <p className="text-gray-600">
                Currently, I'm pursuing a Computer Science degree through Western Governors University, which provides the academic foundation to complement my practical experience. The combination of self-directed learning and formal education has strengthened my understanding of both theoretical concepts and real-world applications. This innate curiosity for problem-solving is what draws me to IT support.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What I'm Looking For</h3>
            <p className="text-gray-600 mb-6">
              I am actively seeking an IT Help Desk/Technical Support role where I can apply my troubleshooting skills, technical aptitude, and commitment to user satisfaction. I'm eager to contribute to a team, learn industry best practices, and build a strong foundation for a career in IT, with a long-term goal of specializing in cloud engineering.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Building and configuring ticketing systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Working with Active Directory</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Implementing cloud solutions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
