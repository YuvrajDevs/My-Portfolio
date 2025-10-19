"use client";

import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const AnimationStyles = () => (
    <style>{`
        @keyframes appearQuick { from {opacity: 0.99; transform: translateY(2px) scale(0.99);} to {opacity: 1; transform: translateY(0) scale(1);} }
        .animate-appear-quick { animation: appearQuick 120ms ease-out both; }

        @keyframes modalIn { from {opacity: 0; transform: translateY(4px) scale(0.98);} to {opacity: 1; transform: translateY(0) scale(1);} }
        @keyframes modalOut { from {opacity: 1; transform: translateY(0) scale(1);} to {opacity: 0; transform: translateY(4px) scale(0.98);} }
        @keyframes backdropIn { from {opacity: 0;} to {opacity: 1;} }
        @keyframes backdropOut { from {opacity: 1;} to {opacity: 0;} }
        .animate-modal-in { animation: modalIn 140ms ease-out both; }
        .animate-modal-out { animation: modalOut 120ms ease-in both; }
        .animate-backdrop-in { animation: backdropIn 120ms ease-out both; }
        .animate-backdrop-out { animation: backdropOut 100ms ease-in both; }
    `}</style>
);

const projectData = [
    {
        id: 1,
        title: "Cloud-Native E-Commerce Platform",
        shortDescription: "A scalable and resilient e-commerce backend built on Kubernetes.",
        imageUrl: "https://placehold.co/600x400/0d0d0d/FFF?text=Project+1",
        tags: ["Kubernetes", "Docker", "AWS", "Microservices", "React"],
        longDescription: "This project is a fully containerized e-commerce application designed for high availability and scalability. It uses a microservices architecture, with each service running in its own Docker container and managed by a Kubernetes cluster on AWS. The frontend is a responsive React application that communicates with the backend via a secure API Gateway.",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "CI/CD Pipeline Automation",
        shortDescription: "Automated build, test, and deployment pipeline using Jenkins and Terraform.",
        imageUrl: "https://placehold.co/600x400/0d0d0d/FFF?text=Project+2",
        tags: ["DevOps", "Jenkins", "Terraform", "Ansible", "Git"],
        longDescription: "I designed and implemented a complete CI/CD pipeline to automate the software delivery process. This pipeline uses Jenkins for continuous integration, Terraform for infrastructure as code to provision environments, and Ansible for configuration management. It significantly reduced deployment times and improved reliability.",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Real-time Analytics Dashboard",
        shortDescription: "A serverless dashboard for visualizing real-time data streams.",
        imageUrl: "https://placehold.co/600x400/0d0d0d/FFF?text=Project+3",
        tags: ["Serverless", "AWS Lambda", "Next.js", "Data Visualization"],
        longDescription: "This project is a real-time analytics dashboard built with a serverless backend on AWS Lambda and a Next.js frontend. It processes and visualizes data streams from various sources, providing instant insights. The serverless architecture ensures it is cost-effective and scales automatically with demand.",
        githubUrl: "#"
    }
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const { language } = useContext(LanguageContext);


    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedProject(null);
            setIsClosing(false);
        }, 140);
    };
    
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <>
            <AnimationStyles />
            <div className="animate-appear-quick">

                <main>
                    <section id="projects">
                        <h2 className="text-4xl font-bold mb-2 tracking-tight text-white">{language === 'de' ? 'Projekte' : language === 'ja' ? 'プロジェクト' : 'Projects'}</h2>
                        <p className="text-gray-400 mb-10 leading-relaxed max-w-none">
                            {language === 'de'
                              ? 'Eine Auswahl meiner Arbeiten in Cloud-Architektur und DevOps. Klicken Sie auf eine Karte, um mehr zu erfahren.'
                              : language === 'ja'
                                ? 'クラウドアーキテクチャやDevOpsのスキルを示すプロジェクトの一部です。カードをクリックして詳細をご覧ください。'
                                : "Here's a selection of my work that showcases my skills in cloud architecture, DevOps, and building robust applications. Click on any card to learn more."}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectData.map((project) => (
                                <div 
                                  key={project.id} 
                                  onClick={() => openModal(project)} 
                                  className={`bg-[#0d0d0d] rounded-lg border border-[#262626] overflow-hidden cursor-pointer group hover:border-gray-700 hover:shadow-2xl hover:shadow-white/5 transition-transform duration-150 hover:scale-[1.01]`}
                                >
                                    <div className="overflow-hidden">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm">{project.shortDescription}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
                
                <footer className="text-center text-gray-700 mt-24 pb-8">
                  <p>&copy; 2024 Yuvraj Singh Shekhawat. Built with passion and code.</p>
                </footer>
            </div>

            {selectedProject && (
                <>
                    {/* Backdrop layer - dims the page only */}
                    <div className={`${isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'} fixed inset-0 z-40 bg-black/70`} onClick={closeModal} />
                    {/* Modal layer - fully opaque */}
                    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4`} onClick={closeModal}>
                        <div className={`${isClosing ? 'animate-modal-out' : 'animate-modal-in'} bg-[#0d0d0d] rounded-lg border border-[#262626] max-w-2xl w-full mx-auto overflow-hidden`} onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover" />
                             <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/50 rounded-full p-1 transition-transform duration-150 hover:scale-110 cursor-pointer" aria-label="Close modal">
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="bg-[#1a1a1a] text-gray-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <p className="text-gray-400 mb-6">{selectedProject.longDescription}</p>
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-700">
                                <GitHubIcon />
                                View on GitHub
                            </a>
                         </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

