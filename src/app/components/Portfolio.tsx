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
          'Implemented Data validation and Redis caching in Bikespace API',
          'Enhanced Rucio\'s data warehouse analytics system',
          'Devised Nginx Kubernetes Ingress codebase improvements'
        ]
      },
      {
        title: 'Software Development Engineer',
        company: 'UrbanPiper',
        date: '2022-2023',
        points: [
          'Constructed aggregator-specific features integrating new systems',
          'Spearheaded EIS integration processing million+ daily orders',
          'Implemented store analytics dashboard with Elasticsearch'
        ]
      }
    ],
    projects: [
      {
        title: 'Text-To-SQL Model',
        points: [
            'Implemented Data validation and Redis caching in Bikespace API',
            'Enhanced Rucio\'s data warehouse analytics system',
            'Devised Nginx Kubernetes Ingress codebase improvements'
          ],
        link: 'https://github.com'
      },
      {
        title: 'Custom RAG System',
        points: [
            'Implemented Data validation and Redis caching in Bikespace API',
            'Enhanced Rucio\'s data warehouse analytics system',
            'Devised Nginx Kubernetes Ingress codebase improvements'
          ],
        link: 'https://blog'
      }
    ],
    education:[{
      title: 'Text-To-SQL Model',
      points: [
          'Implemented Data validation and Redis caching in Bikespace API',
          'Enhanced Rucio\'s data warehouse analytics system',
          'Devised Nginx Kubernetes Ingress codebase improvements'
        ],
      link: 'https://github.com'
    },
    {
      title: 'Custom RAG System',
      points: [
          'Implemented Data validation and Redis caching in Bikespace API',
          'Enhanced Rucio\'s data warehouse analytics system',
          'Devised Nginx Kubernetes Ingress codebase improvements'
        ],
      link: 'https://blog'
    }]
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
          <p className="mt-4 text-2xl text-gray-400">About Me</p>
            <div className="container mx-auto w-2/3 ml-[16.67%]">
            <p className="mt-4 text-xl text-gray-400">I am a software engineer with a passion for building scalable and reliable systems. I have experience working on large-scale distributed systems, data warehousing, and cloud infrastructure. I am also an open-source contributor and have worked on various projects in the ML and NLP domains.</p>
            </div>
          <div className="flex space-x-6 mt-6 justify-center">
            <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={32} />
            </a>
            <a href="mailto:placeholder@example.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaEnvelope size={32} />
            </a>
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
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                  {project.title}
                  <a href={project.link} className="text-yellow-400 hover:text-white">
                    <FaExternalLinkAlt size={16} />
                  </a>
                </h3>
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
          {sections.projects.length > 0 ? (
            sections.projects.map((project, index) => (
              <div key={index} className="border border-gray-700 p-6 hover:border-yellow-400 transition-colors rounded-lg mb-6 w-full">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                  {project.title}
                  <a href={project.link} className="text-yellow-400 hover:text-white">
                    <FaExternalLinkAlt size={16} />
                  </a>
                </h3>
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

      {activeTab === 'contact' && (
        <section className="mt-10 w-full max-w-3xl text-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
          <p className="text-xl">You can reach me at <a href="mailto:sriharsha">sriharsha@example.com or 9999999999</a></p>
        </section>)}

    </div>
  );
};

export default Portfolio;