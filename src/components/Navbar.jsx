"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useContext } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="mb-16">
      {/* Desktop / Tablet layout (>= 501px) */}
      <div className="hidden max-[500px]:hidden md:flex w-full items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white cursor-pointer whitespace-nowrap" aria-label="Go to home">Y S S</Link>
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
      </div>

      {/* Mobile layout (<= 500px) */}
      <div className="flex max-[500px]:flex w-full flex-col items-center md:hidden">
        <div className="w-full flex items-center justify-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-white cursor-pointer whitespace-nowrap" aria-label="Go to home">Y S S</Link>
        </div>
        <div className="w-full mt-3 flex items-center justify-between">
          <nav className="flex items-center space-x-5">
            <Link 
              href="/" 
              className={`transition-colors duration-300 ${
                pathname === '/' 
                  ? 'text-white font-semibold border-b-2 border-white pb-0.5' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`transition-colors duration-300 ${
                pathname === '/projects' 
                  ? 'text-white font-semibold border-b-2 border-white pb-0.5' 
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
          </nav>
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center rounded-md border border-[#262626] bg-[#0d0d0d] px-3 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-600 transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            <span className={`${language === 'en' ? 'font-semibold text-white' : 'text-gray-500'}`}>EN</span>
            <span className="mx-2 text-gray-700">/</span>
            <span className={`${language === 'de' ? 'font-semibold text-white' : 'text-gray-500'}`}>DE</span>
          </button>
        </div>
      </div>
    </header>
  );
}
