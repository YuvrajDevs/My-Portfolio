"use client";

import React, { useContext } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';

const AnimationStyles = () => (
  <style>{`
    @keyframes appearQuick {
      from { opacity: 0.99; transform: translateY(2px) scale(0.99); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .animate-appear-quick { animation: appearQuick 120ms ease-out both; }
  `}</style>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
// 
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

export default function HomePage() {
  const { language } = useContext(LanguageContext);
  const tools = [
    { label: 'AWS', file: 'AWS' },
    { label: 'Docker', file: 'Docker' },
    { label: 'Kubernetes', file: 'Kubernetes' },
    { label: 'Terraform', file: 'Terraform' },
    { label: 'Python', file: 'Python' },
    { label: 'React', file: 'React' },
    { label: 'Next.js', file: 'NextJS' },
    { label: 'Git', file: 'Git' },
    { label: 'GitHub Actions', file: 'GithubActions' },
    { label: 'GitLab', file: 'GitLab' },
    { label: 'Jenkins', file: 'Jenkins' },
    { label: 'Ansible', file: 'Ansible' },
    { label: 'Linux', file: 'Linux' },
    { label: 'Tailwind CSS', file: 'TailwindCSS' },
    { label: 'Grafana', file: 'Grafana' },
    { label: 'Prometheus', file: 'Prometheus' },
    { label: 'Redis', file: 'Redis' },
    { label: 'MySQL', file: 'MySQL' },
    { label: 'Go', file: 'GoLang' },
    { label: 'Bash', file: 'Bash' },
    { label: 'Figma', file: 'Figma' },
    { label: 'Azure', file: 'Azure' },
  ].filter(t => [
    'Ansible','AWS','Azure','Bash','Docker','Figma','Git','GithubActions','GitLab','GoLang','Grafana','Jenkins','Kafka','Kubernetes','Linux','MySQL','NextJS','Prometheus','Python','React','Redis','TailwindCSS'
  ].includes(t.file));
  return (
    <div className="animate-appear-quick">
      <AnimationStyles />

        <main>
          <section id="about" className={`grid md:grid-cols-3 gap-12 items-start`}>
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">{language === 'de' ? 'Über mich' : 'About Me'}</h2>
              <ul className="space-y-3 text-gray-400 list-disc list-inside max-w-prose">
                  {language === 'de' ? (
                    <>
                      <li>Leidenschaftlich in Design und solider Technik vereint.</li>
                      <li>Fokus auf zuverlässige und schöne Nutzererlebnisse.</li>
                      <li>Erfahrung von Konzept bis Deployment.</li>
                      <li>Präzise Systeme mit Liebe zum Detail.</li>
                      <li>Ich gestalte ansprechende Oberflächen.</li>
                      <li>Ich sorge für Leistung – auch unter Last.</li>
                      <li>Engagiert für hochwertige End-to-End-Lösungen.</li>
                      <li>Funktional und elegant – das Ziel.</li>
                    </>
                  ) : (
                    <>
                      <li>Passionate about merging creative design with robust engineering.</li>
                      <li>Focused on crafting reliable and beautiful user experiences.</li>
                      <li>Skilled in managing the full project lifecycle, from concept to deployment.</li>
                      <li>Adept at building systems with precision and attention to detail.</li>
                      <li>I create visually captivating interfaces that users love.</li>
                      <li>I ensure systems perform flawlessly under any load.</li>
                      <li>Dedicated to building high-quality, end-to-end solutions.</li>
                      <li>Driven to deliver products that are both functional and elegant.</li>
                    </>
                  )}
              </ul>
              <div className="mt-8 flex space-x-4">
                <a href="mailto:your-email@example.com" className="p-3 bg-[#0d0d0d] rounded-full text-gray-400 hover:bg-white hover:text-black border border-[#262626]"><MailIcon /></a>
                <a href="#" className="p-3 bg-[#0d0d0d] rounded-full text-gray-400 hover:bg-white hover:text-black border border-[#262626]"><LinkedInIcon /></a>
                <a href="#" className="p-3 bg-[#0d0d0d] rounded-full text-gray-400 hover:bg-white hover:text-black border border-[#262626]"><GitHubIcon /></a>
              </div>
            </div>
            <div className="md:col-span-1 bg-[#0d0d0d]/50 p-6 rounded-lg border border-[#262626]">
              <h3 className="font-semibold text-white mb-4">{language === 'de' ? 'Was mir gefällt' : 'What I Enjoy'}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1a1a1a] text-gray-300 text-xs font-medium px-3 py-1 rounded-full">DevOps</span>
                <span className="bg-[#1a1a1a] text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Cloud Architecture</span>
                <span className="bg-[#1a1a1a] text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Gaming</span>
                <span className="bg-[#1a1a1a] text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Learning New Tech</span>
                <span className="bg-[#1a1a1a] text-gray-300 text-xs font-medium px-3 py-1 rounded-full">UI/UX Design</span>
                <span className="bg-[#1a1a1a] text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Brainstorming</span>
              </div>
            </div>
          </section>

          <section id="tools" className={`mt-20`}>
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-white">{language === 'de' ? 'Werkzeuge & Technologien' : 'Tools & Technologies'}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-8">
              {tools.map(({ label, file }) => (
                <div key={file} className="flex flex-col items-center justify-center">
                  <img
                    src={`/icons/${file}.svg`}
                    alt={label}
                    title={label}
                    className="h-8 w-auto md:h-10"
                    loading="lazy"
                  />
                  <span className="mt-2 text-[10px] text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="credentials" className={`mt-20`}>
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-white">{language === 'de' ? 'Zertifizierungen' : 'Certifications'}</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 p-6 bg-[#0d0d0d] rounded-lg border border-[#262626] flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-white">{language === 'de' ? 'AWS Zertifizierter Solutions Architekt' : 'AWS Certified Solutions Architect'}</h3>
                        <p className="text-gray-500 text-sm">Amazon Web Services</p>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 -mr-2 text-gray-500 rounded-full hover:bg-gray-800 hover:text-white">
                        <ExternalLinkIcon />
                    </a>
                </div>
                <div className="flex-1 p-6 bg-[#0d0d0d] rounded-lg border border-[#262626] flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-white">{language === 'de' ? 'Zertifizierter Kubernetes Administrator (CKA)' : 'Certified Kubernetes Administrator (CKA)'}</h3>
                        <p className="text-gray-500 text-sm">The Linux Foundation</p>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 -mr-2 text-gray-500 rounded-full hover:bg-gray-800 hover:text-white">
                        <ExternalLinkIcon />
                    </a>
                </div>
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-700 mt-24 pb-8">
          <p>&copy; 2024 Yuvraj Singh Shekhawat. Built with passion and code.</p>
        </footer>
    </div>
  );
}

