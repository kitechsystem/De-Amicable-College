import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { PageTab } from '../types';
import { Phone, Mail, Clock, MapPin, ExternalLink, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { schoolInfo, setCurrentPage, setIsStaffModalOpen } = useSchool();

  const quickLinks: { label: string; tab: PageTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Academics', tab: 'academics' },
    { label: 'Admissions & Enrolment', tab: 'admissions' },
    { label: 'Student Life', tab: 'student-life' },
    { label: 'News & Announcements', tab: 'news' },
    { label: 'Photo Gallery', tab: 'gallery' },
    { label: 'Contact & Directions', tab: 'contact' }
  ];

  return (
    <footer className="bg-[#122419] text-white border-t border-[#1b3827]">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: School Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5 border-2 border-[#D8C900] shrink-0 shadow-md">
                <img 
                  src={schoolInfo.logoUrl} 
                  alt="De-Amicable College Crest" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white leading-tight">
                  {schoolInfo.name}
                </span>
                <span className="text-xs text-[#D8C900] font-medium tracking-wide">
                  Est. September 2010 · Lagos
                </span>
              </div>
            </div>

            <p className="text-xs italic text-emerald-200 border-l-2 border-[#D8C900] pl-3 py-0.5">
              “{schoolInfo.motto}”
            </p>

            <p className="text-xs text-slate-300 leading-relaxed">
              A private secondary school in Ikotun committed to structured teaching, moral discipline, academic excellence, and preparing young minds for a brighter future.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-emerald-800 hover:bg-emerald-700 text-emerald-100 hover:text-white px-3 py-1.5 rounded-md transition-colors border border-emerald-700"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D8C900]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={schoolInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-md transition-colors border border-slate-700"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D8C900]" />
                <span>Find on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4 text-[#D8C900]">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.tab}>
                  <button
                    onClick={() => setCurrentPage(link.tab)}
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <span className="text-[#008F50]">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Levels & Examinations */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4 text-[#D8C900]">
              Academic Programmes
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <p className="font-semibold text-emerald-300 mb-1">Junior Secondary School</p>
                <p className="text-slate-400">JSS1 · JSS2 · JSS3</p>
                <p className="text-[11px] text-slate-400 mt-0.5">BECE Examination Preparation</p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <p className="font-semibold text-emerald-300 mb-1">Senior Secondary School</p>
                <p className="text-slate-400">SSS1 · SSS2 · SSS3</p>
                <p className="text-[11px] text-slate-400 mt-0.5">WAEC & NECO Examination Preparation</p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <p className="font-semibold text-white mb-1">Approved Curriculum</p>
                <p className="text-[11px] text-slate-400">Lagos State Ministry Scheme of Work</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4 text-[#D8C900]">
              Contact Details
            </h3>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#D8C900] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-semibold text-white block">School Campus:</span>
                23, Ayodele Shitta Street, off Abogunloko Car Wash Bus Stop, Ijegun Road, Ikotun, Lagos State, Nigeria.
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#D8C900] shrink-0" />
              <a href={`tel:${schoolInfo.phone}`} className="hover:text-white transition-colors">
                {schoolInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#D8C900] shrink-0" />
              <a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition-colors">
                {schoolInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-[#D8C900] shrink-0" />
              <span>{schoolInfo.openingHours}</span>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 leading-normal border-t border-slate-800">
              <span className="text-[#D8C900] font-medium block">Route Guide:</span>
              From Ikotun, divert to Ijegun Road, proceed towards Car Wash Bus Stop, and locate Abogunloko.
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="bg-[#0b1710] py-5 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} De-Amicable College. All rights reserved. Ikotun, Lagos State, Nigeria.
          </p>

          <div className="flex items-center gap-5 text-slate-400">
            <span>Motto: God’s light @ impacting knowledge</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsStaffModalOpen(true)}
              className="text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer text-[11px] underline"
            >
              Staff Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
