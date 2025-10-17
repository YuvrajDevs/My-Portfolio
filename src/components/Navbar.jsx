"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useContext } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="flex justify-between items-center mb-16">
      <Link href="/" className="text-xl font-bold tracking-tight text-white cursor-pointer" aria-label="Go to home">Y S S</Link>
      <nav className="flex items-center space-x-6 md:space-x-8">
        <Link 
          href="/" 
          className={`transition-colors duration-300 ${
            pathname === '/' 
              ? 'text-white font-semibold border-b-2 border-white pb-1' 
              : 'text-gray-500 hover:text-white'
          }`}
        >
          Home
        </Link>
        <Link 
          href="/projects" 
          className={`transition-colors duration-300 ${
            pathname === '/projects' 
              ? 'text-white font-semibold border-b-2 border-white pb-1' 
              : 'text-gray-500 hover:text-white'
          }`}
        >
          Projects
        </Link>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-white transition-colors duration-300"
        >
          Resume
        </a>
        <div className="h-6 w-px bg-[#262626]"></div>
        <button
          onClick={toggleLanguage}
          className="inline-flex items-center rounded-md border border-[#262626] bg-[#0d0d0d] px-3 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-600 transition-colors cursor-pointer"
          aria-label="Toggle language"
        >
          <span className={`${language === 'en' ? 'font-semibold text-white' : 'text-gray-500'}`}>EN</span>
          <span className="mx-2 text-gray-700">/</span>
          <span className={`${language === 'de' ? 'font-semibold text-white' : 'text-gray-500'}`}>DE</span>
        </button>
      </nav>
    </header>
  );
}
