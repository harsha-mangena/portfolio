"use client";

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  const sections = {
    experience: [
      {
        title: 'Open Source Contributor',
        company: 'Remote',
        date: 'Present',
        points: [
          'Engineered caching and validation layers for Bikespace API infrastructure',
          'Enhanced analytics capabilities in Rucio data warehouse systems',
          'Optimized Kubernetes ingress configurations for Nginx deployments',
          'Resolved file size representation inconsistencies in ZIM archival format',
          'Improved module interoperability in Spring RTS ecosystem'
        ]
      },
      {
        title: 'Graduate Student Operations',
        company: 'Clemson University',
        date: '2023-2024',
        points: [
          'Managed technical infrastructure for campus event spaces',
          'Provided IT support and mentorship for student initiatives',
          'Maintained AV systems for academic conferences and seminars'
        ]
      },
      {
        title: 'Software Development Engineer',
        company: 'UrbanPiper',
        date: '2022-2023',
        points: [
          'Developed core platform features for restaurant aggregator integrations',
          'Implemented Elasticsearch-powered analytics dashboards',
          'Optimized CI/CD pipelines for enterprise-scale applications',
          'Designed automated testing frameworks for order processing systems',
          'Improved code quality through monitoring and debugging tools'
        ]
      },
      {
        title: 'Fellowship Scholar',
        company: 'Crio.Do',
        date: '2022',
        points: [
          'Architected full-stack applications with microservices architecture',
          'Implemented JWT-based authentication systems with Redis',
          'Optimized database performance through query optimization'
        ]
      },
      {
        title: 'Associate Software Engineer',
        company: 'DXC Technology',
        date: '2021-2022',
        points: [
          'Modernized legacy data processing workflows',
          'Developed queue monitoring solutions for enterprise systems',
          'Automated incident management processes'
        ]
      }
    ],
    projects: [
      {
        title: 'Text-to-SQL LLM Fine-tuning',
        points: [
          'Fine-tuned large language models for natural language to SQL conversion',
          'Implemented schema-aware training data generation pipelines',
          'Optimized model inference through quantization techniques'
        ],
        link: 'https://github.com/harsha-mangena/LLMS'
      },
      {
        title: 'Custom RAG System',
        points: [
          'Developed multi-format document processing pipeline',
          'Implemented hybrid search with vector similarity and keyword matching',
          'Integrated web search augmentation for knowledge gaps'
        ],
        link: 'https://blog'
      },
      {
        title: 'DC-GAN Image Generation',
        points: [
          'Designed deep convolutional GAN architecture from scratch',
          'Adapted model for image denoising applications',
          'Implemented progressive training for high-resolution outputs'
        ],
        link: 'https://github.com/harsha-mangena/gan-projects'
      },
      {
        title: 'Interactive Hangman Game',
        points: [
          'Developed web-based game with dynamic word generation',
          'Integrated dictionary API for word validation',
          'Implemented multiple gameplay modes and difficulty levels'
        ],
        link: 'https://github.com/harsha-mangena/hangman'
      }
    ],
    education: [
      {
        title: 'MS in Computer Science',
        company: 'Clemson University',
        points: [
          'Focus on machine learning and distributed systems',
          'Authored research papers on adaptive boosting systems',
          'Coursework in cloud computing and data science'
        ],
        link: 'https://clemson.edu'
      },
      {
        title: 'BTech in Computer Science',
        company: 'Aditya University',
        points: [
          'Specialization in software architecture',
          'Led technical workshops and developer events',
          'Coursework in algorithms and network security'
        ],
        link: 'https://adityauniversity.edu.in'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center">
      <nav className="w-full bg-gray-900 text-white flex justify-center space-x-6 py-4 border-b border-gray-700">
        {['home', 'projects', 'experience', 'education', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveTab(section)}
            className={`text-lg uppercase tracking-wider ${activeTab === section ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-500'} hover:text-white transition-colors px-4 py-2`}
          >
            {section}
          </button>
        ))}
      </nav>
      
      {activeTab === 'home' && (
  <section className="text-center mt-10">
    <h1 className="text-6xl font-bold tracking-wide">VAMSI SAI RANGA M</h1>
    <p className="mt-4 text-xl text-gray-400">Software Engineer // ML Enthusiast</p>
    
    {/* Typing Animation */}
    <div className="my-8 h-16 flex items-center justify-center">
      <div className="text-yellow-400 text-4xl font-mono pixel-text relative inline-block">
        <span className="border-r-2 border-yellow-400 animate-typewriter">
          Hello World
        </span>
      </div>
    </div>

    <p className="mt-4 text-2xl text-gray-400">About Me</p>
    <div className="container mx-auto w-2/3 ml-[16.67%]">
      <p className="mt-4 text-xl text-gray-400">I am a software engineer with a passion for building scalable and reliable systems. I have experience working on large-scale distributed systems, data warehousing, and cloud infrastructure. I am also an open-source contributor and have worked on various projects in the ML and NLP domains.</p>
    </div>
    
    <div className="flex space-x-6 mt-6 justify-center">
      {/* Social links remain same */}
    </div>
  </section>
)}
      
      {activeTab === 'experience' && (
        <section className="mt-10 w-full max-w-3xl text-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>
          {sections.experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-yellow-400 pl-6 relative hover:border-white transition-colors pb-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
              <p className="text-gray-500 mb-4">{exp.company} • {exp.date}</p>
              <ul className="space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaChevronRight size={16} className="mt-1 text-yellow-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
      
{activeTab === 'projects' && (
  <section className="mt-10 w-full max-w-3xl text-gray-300 flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
    {sections.projects.length > 0 ? (
      sections.projects.map((project, index) => (
        <div key={index} className="border border-gray-700 p-6 hover:border-yellow-400 transition-colors rounded-lg mb-6 w-full">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
              {project.title}
              <a href={project.link} className="text-yellow-400 hover:text-white">
                <FaExternalLinkAlt size={16} />
              </a>
            </h3>
          </div>
          
          {/* Animated Tech Preview */}
          <div className="my-4 mx-auto w-full h-24 bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
            {index % 3 === 0 && (
              <div className="absolute inset-0 animate-circuit-slow">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path
                    d="M10 25 Q30 10 50 25 T90 25"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    fill="none"
                    className="text-gray-700"
                  />
                  <circle cx="30" cy="25" r="1.5" className="animate-pulse text-yellow-400" />
                  <circle cx="70" cy="25" r="1.5" className="animate-pulse-delay text-yellow-400" />
                </svg>
              </div>
            )}

            {index % 3 === 1 && (
              <div className="absolute inset-0 animate-binary-flow">
                <div className="text-gray-600 font-mono text-xs tracking-widest whitespace-nowrap">
                  0101 0010 0111 0001 0101 0010 0111 0001
                </div>
              </div>
            )}

            {index % 3 === 2 && (
              <div className="absolute inset-0 animate-particle-flow">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animation: `float ${4 + i % 3}s infinite linear`
                    }}
                  />
                ))}
              </div>
            )}

            <div className="relative z-10 text-gray-400 text-sm">
              {['Tech Flow', 'Data Stream', 'Code Preview'][index % 3]}
            </div>
          </div>

          <ul className="space-y-2">
            {project.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaChevronRight size={16} className="mt-1 text-yellow-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No projects available at the moment.</p>
    )}
  </section>
)}

      {activeTab === 'education' && (
        <section className="mt-10 w-full max-w-3xl text-gray-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
          {sections.education.length > 0 ? (
            sections.education.map((education, index) => (
              <div key={index} className="border border-gray-700 p-6 hover:border-yellow-400 transition-colors rounded-lg mb-6 w-full">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                  {education.title}
                  <a href={education.link} className="text-yellow-400 hover:text-white">
                    <FaExternalLinkAlt size={16} />
                  </a>
                </h3>
                <ul className="space-y-2">
                {education.points.map((education, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaChevronRight size={16} className="mt-1 text-yellow-400" />
                    <span>{education}</span>
                  </li>
                ))}
              </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No projects available at the moment.</p>
          )}
        </section>
      )}

      {activeTab === 'contact' && (
        <section className="mt-10 w-full max-w-3xl text-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
          <p className="text-xl">You can reach me at <a href="mailto:sriharsha">sriharsha@example.com or 9999999999</a></p>
        </section>)}

    </div>
  );
};

export default Portfolio;