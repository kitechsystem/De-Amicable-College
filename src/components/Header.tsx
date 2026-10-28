import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { PageTab } from '../types';
import { Phone, Mail, Clock, MapPin, Menu, X, ArrowRight, Settings } from 'lucide-react';

export const Header: React.FC = () => {
  const { schoolInfo, currentPage, setCurrentPage, setIsStaffModalOpen } = useSchool();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: PageTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Academics', tab: 'academics' },
    { label: 'Admissions', tab: 'admissions' },
    { label: 'Student Life', tab: 'student-life' },
    { label: 'News & Events', tab: 'news' },
    { label: 'Gallery', tab: 'gallery' },
    { label: 'Contact Us', tab: 'contact' }
  ];

  const handleNavClick = (tab: PageTab) => {
    setCurrentPage(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Slim Top Information Bar */}
      <div className="bg-[#008F50] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#007a44]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Contact Details & Hours */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-1 text-emerald-50">
            <a 
              href={`tel:${schoolInfo.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call De-Amicable College"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8C900]" />
              <span>{schoolInfo.phone}</span>
            </a>

            <a 
              href={`mailto:${schoolInfo.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Email De-Amicable College"
            >
              <Mail className="w-3.5 h-3.5 text-[#D8C900]" />
              <span>{schoolInfo.email}</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-emerald-100">
              <Clock className="w-3.5 h-3.5 text-[#D8C900]" />
              <span>{schoolInfo.openingHours}</span>
            </div>

            <div className="hidden xl:flex items-center gap-1.5 text-emerald-100">
              <MapPin className="w-3.5 h-3.5 text-[#D8C900]" />
              <span>Ikotun, Lagos State</span>
            </div>
          </div>

          {/* Quick Staff Access & Motto */}
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline italic text-emerald-100">
              “{schoolInfo.motto}”
            </span>
            <button
              onClick={() => setIsStaffModalOpen(true)}
              className="flex items-center gap-1 text-[11px] text-emerald-200 hover:text-white transition-colors py-0.5 px-2 rounded-sm bg-black/15 hover:bg-black/25"
              title="School Administration Portal"
            >
              <Settings className="w-3 h-3 text-[#D8C900]" />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (3-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* Zone 1: School Identity & Brand Lockup */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none shrink-0"
            aria-label="De-Amicable College Homepage"
          >
            <div className="relative w-13 h-13 rounded-full overflow-hidden p-0.5 bg-white border-2 border-[#008F50] shadow-xs shrink-0 transition-transform group-hover:scale-105">
              <img 
                src={schoolInfo.logoUrl} 
                alt="De-Amicable College Official Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#008F50] group-hover:text-[#007340] transition-colors leading-none">
                De-Amicable College
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wider uppercase mt-1">
                Private Secondary School · Ikotun
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav 
            className="hidden xl:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-700" 
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`px-3 py-2 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer rounded-md ${
                    isActive 
                      ? 'text-[#008F50] bg-emerald-50' 
                      : 'text-slate-700 hover:text-[#008F50] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('admissions')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#008F50] hover:bg-[#007340] text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase shadow-xs transition-all duration-200 active:scale-98 whitespace-nowrap cursor-pointer border border-[#007a44]"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D8C900]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-[#008F50] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                    isActive 
                      ? 'text-[#008F50] bg-emerald-50' 
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#008F50]"></span>}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('admissions')}
              className="w-full text-center bg-[#008F50] hover:bg-[#007340] text-white py-3 rounded-lg text-sm font-bold tracking-wide uppercase transition-colors"
            >
              Apply for Admission
            </button>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
              <span>{schoolInfo.phone}</span>
              <span>{schoolInfo.openingHours}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
