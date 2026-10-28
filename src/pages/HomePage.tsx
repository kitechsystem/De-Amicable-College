import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { CLASS_LEVELS } from '../data/initialData';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Compass, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Calendar,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { schoolInfo, setCurrentPage, news, setSelectedNewsArticle } = useSchool();

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* =========================================================
          SECTION A: HERO SECTION
          ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#072414] via-[#005a33] to-[#008F50] text-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Subtle patterned backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8C900_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Motto Tagline */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D8C900] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Motto: “{schoolInfo.motto}”</span>
              </div>

              {/* Exact Required Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Building Bright Minds. Inspiring Future Leaders.
              </h1>

              {/* Exact Required Supporting Text */}
              <p className="text-base sm:text-lg text-emerald-100 font-normal leading-relaxed max-w-2xl">
                At De-Amicable College, we are committed to nurturing knowledge, discipline, confidence, and character in every student. Since September 2010, our mission has been to provide an environment where young people can learn, grow, and prepare for a brighter future.
              </p>

              {/* Two Required CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-6 py-3.5 bg-white text-[#008F50] hover:bg-emerald-50 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Our School</span>
                  <ArrowRight className="w-4 h-4 text-[#008F50]" />
                </button>

                <button
                  onClick={() => setCurrentPage('admissions')}
                  className="px-6 py-3.5 bg-[#D8C900] hover:bg-[#c4b600] text-slate-900 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center gap-2 border border-yellow-300"
                >
                  <span>Apply for Admission</span>
                  <GraduationCap className="w-4 h-4 text-slate-900" />
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-emerald-600/50 flex flex-wrap gap-x-6 gap-y-2 text-xs text-emerald-100">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D8C900]" />
                  <span>Est. 20 September 2010</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D8C900]" />
                  <span>Lagos State Scheme of Work</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D8C900]" />
                  <span>WAEC · NECO · BECE Candidate Centre</span>
                </span>
              </div>
            </div>

            {/* Right Card / Logo Carrier */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white/95 text-slate-900 rounded-2xl p-8 shadow-2xl border border-white/20 backdrop-blur-md">
                
                {/* Official Crest Badge */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 rounded-full bg-white p-2 border-4 border-[#008F50] shadow-md mb-4 flex items-center justify-center">
                    <img 
                      src={schoolInfo.logoUrl} 
                      alt="Official Crest of De-Amicable College" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <span className="text-xl font-extrabold text-[#008F50]">
                    De-Amicable College
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
                    Ikotun, Lagos State, Nigeria
                  </span>
                  <span className="text-xs italic text-[#C82035] font-semibold mt-1">
                    “{schoolInfo.motto}”
                  </span>
                </div>

                {/* Academic Structure Pill Grid */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-600 py-1 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">School Type:</span>
                    <span>Private Secondary School</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 py-1 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Academic Levels:</span>
                    <span className="font-mono text-emerald-800 font-bold">JSS1 – SSS3</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 py-1 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Opening Hours:</span>
                    <span>{schoolInfo.openingHours}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 py-1">
                    <span className="font-semibold text-slate-800">Principal:</span>
                    <span className="text-slate-900 font-semibold">{schoolInfo.principal}</span>
                  </div>
                </div>

                {/* Fast Action */}
                <div className="mt-6">
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-[#008F50] rounded-lg text-xs font-bold transition-colors text-center cursor-pointer border border-emerald-200"
                  >
                    Locate School Campus on Ayodele Shitta St
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION G: SCHOOL FACTS AND HIGHLIGHTS STRIP
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            <div className="pt-3 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#008F50] tabular-nums">
                2010
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                Established
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                September 2010
              </span>
            </div>

            <div className="pt-3 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#008F50]">
                Private
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                School Type
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Secondary School
              </span>
            </div>

            <div className="pt-3 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#008F50]">
                JSS & SSS
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                Class Levels
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                JSS1–JSS3 & SSS1–SSS3
              </span>
            </div>

            <div className="pt-3 lg:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#008F50]">
                Ikotun
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                Location
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Lagos State, Nigeria
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION B: WELCOME MESSAGE FROM PRINCIPAL
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fbfcfa] rounded-2xl p-8 sm:p-12 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Principal Placeholder Photo Container */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-56 h-64 rounded-xl bg-gradient-to-b from-emerald-100 to-emerald-200 border-2 border-emerald-300 p-3 shadow-md flex flex-col items-center justify-center text-center relative overflow-hidden group">
                {/* Visual placeholder with school crest */}
                <div className="w-20 h-20 rounded-full bg-white p-1 border-2 border-[#008F50] mb-3 shadow-xs">
                  <img 
                    src={schoolInfo.logoUrl} 
                    alt="School crest" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <Users className="w-8 h-8 text-[#008F50] mb-1" />
                <span className="text-xs font-bold text-slate-800">Mr Segun Falowo</span>
                <span className="text-[11px] text-emerald-900 font-medium">Proprietor & Principal</span>
                <span className="text-[10px] text-slate-500 mt-2 bg-white/70 px-2 py-0.5 rounded">
                  Official Leadership Portrait Placeholder
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 text-center">
                De-Amicable College Leadership
              </p>
            </div>

            {/* Principal Message Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block text-xs font-bold text-[#008F50] uppercase tracking-wider">
                Leadership Message
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome to De-Amicable College
              </h2>

              {/* Exact Quotation Supplied by User */}
              <div className="border-l-4 border-[#008F50] pl-4 py-2 my-3 bg-emerald-50/60 rounded-r-lg">
                <blockquote className="text-lg sm:text-xl font-semibold text-slate-900 italic">
                  “We are delighted to always have you in our midst.”
                </blockquote>
                <p className="text-xs font-bold text-[#008F50] mt-1">
                  — Mr Segun Falowo, Principal
                </p>
              </div>

              {/* Professional Expansion */}
              <p className="text-sm text-slate-700 leading-relaxed">
                At De-Amicable College, our doors are open to every young person with a desire to learn, grow, and excel. We believe that true education combines academic diligence with sound moral principles. In our school, students are treated with genuine care, guided with experienced teaching, and nurtured in an atmosphere where discipline and mutual respect thrive.
              </p>

              <p className="text-sm text-slate-700 leading-relaxed">
                Whether your child is taking their first steps in junior secondary school or preparing for senior secondary examinations, our dedicated staff work tirelessly to instill the confidence, knowledge, and character necessary for lifelong accomplishment.
              </p>

              <div className="pt-3 flex items-center gap-4">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#008F50] hover:text-[#007340] hover:underline cursor-pointer"
                >
                  <span>Meet Our School Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-slate-300">·</span>

                <button
                  onClick={() => setCurrentPage('admissions')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#008F50] cursor-pointer"
                >
                  <span>Inquire for New Student Admission</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION C: ABOUT THE SCHOOL BRIEF
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
              Our Heritage & Foundation
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A School Built on Knowledge and Character
            </h2>

            {/* Exact Required School Description */}
            <p className="text-base text-slate-800 leading-relaxed font-medium">
              Established on 20 September 2010, De-Amicable College is a private secondary school founded by Falowo Oluwasegun Benjamin, an education professional with teaching experience and experience holding important positions in different schools. Since its establishment, the college has continued to grow, with its senior secondary school section experiencing significant growth.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Rooted in the vibrant community of Ikotun, Lagos State, the college provides a structured, disciplined environment that prepares learners for both national certifying examinations and the broader moral expectations of society.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold tracking-wide uppercase shadow-xs transition-colors cursor-pointer"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#D8C900]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-[#008F50]">
                Key Institutional Milestones
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#008F50] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block">20 September 2010</strong>
                    <span className="text-slate-600">Founded by Falowo Oluwasegun Benjamin as a private secondary educational institution.</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#008F50] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block">Lagos State Scheme Alignment</strong>
                    <span className="text-slate-600">Full adoption of the Lagos State Ministry scheme of work across Junior and Senior curricula.</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#008F50] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block">Senior Secondary Expansion</strong>
                    <span className="text-slate-600">Significant expansion of senior secondary student capacity with WAEC and NECO preparation pathways.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-[11px] text-slate-500 italic block">
                  Campus Address: 23, Ayodele Shitta Street, off Abogunloko Car Wash Bus Stop, Ijegun Road, Ikotun.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION D: EDUCATIONAL LEVELS (JSS1-JSS3, SSS1-SSS3)
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
            Academic Levels
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Learning for Every Stage
          </h2>
          <p className="text-sm text-slate-600">
            From foundational junior secondary education to specialized senior secondary study, our structured classes guide students progressively toward academic and personal excellence.
          </p>
        </div>

        {/* Junior Secondary Group */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Junior Secondary School</h3>
              <p className="text-xs text-slate-500">BECE Preparation · Foundational Knowledge · 3 Academic Years</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLASS_LEVELS.filter(c => c.section.includes('Junior')).map((lvl) => (
              <div 
                key={lvl.code}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#008F50] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-[#008F50] font-mono">{lvl.code}</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                      {lvl.ageRange}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{lvl.focus}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{lvl.description}</p>
                </div>

                <button
                  onClick={() => setCurrentPage('academics')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008F50] hover:underline pt-2 border-t border-slate-100 cursor-pointer"
                >
                  <span>View Curriculum Scheme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Senior Secondary Group */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-800">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Senior Secondary School</h3>
              <p className="text-xs text-slate-500">WAEC & NECO Preparation · Specialized Pathways · Advanced Learning</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLASS_LEVELS.filter(c => c.section.includes('Senior')).map((lvl) => (
              <div 
                key={lvl.code}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#008F50] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-[#008F50] font-mono">{lvl.code}</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                      {lvl.ageRange}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{lvl.focus}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{lvl.description}</p>
                </div>

                <button
                  onClick={() => setCurrentPage('academics')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008F50] hover:underline pt-2 border-t border-slate-100 cursor-pointer"
                >
                  <span>View Examination Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================================
          SECTION E: OUR ACADEMIC APPROACH
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 overflow-hidden relative">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block text-xs font-bold text-[#D8C900] uppercase tracking-wider">
              Educational Framework
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Preparing Students for the Future
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              De-Amicable College adheres strictly to the <strong>Lagos State Ministry scheme of work</strong>, ensuring all curriculum standards, termly teaching plans, and learning objectives meet state educational guidelines.
            </p>

            {/* Core Confirmed Subjects & Supported Exams */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="flex items-center gap-2 mb-2 text-[#D8C900]">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Confirmed Core Subjects</span>
                </div>
                <ul className="text-xs space-y-1.5 text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                    <strong className="text-white">Mathematics</strong> (JSS1–SSS3)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                    <strong className="text-white">English Language</strong> (JSS1–SSS3)
                  </li>
                </ul>
                <p className="text-[11px] text-slate-400 mt-2">
                  * Full subject directory managed by school administration on the Academics page.
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="flex items-center gap-2 mb-2 text-[#D8C900]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">External Examinations Supported</span>
                </div>
                <ul className="text-xs space-y-1.5 text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                    <span><strong>WAEC</strong> – West African Senior School Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                    <span><strong>NECO</strong> – National Examinations Council</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                    <span><strong>BECE</strong> – Basic Education Certificate Examination</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setCurrentPage('academics')}
                className="px-5 py-2.5 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Explore Full Curriculum & Subjects
              </button>

              <button
                onClick={() => setCurrentPage('student-life')}
                className="text-xs font-semibold text-slate-300 hover:text-white underline cursor-pointer"
              >
                Learn about extra-curricular activities ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION F: WHY CHOOSE DE-AMICABLE COLLEGE?
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
            Our Commitments
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose De-Amicable College?
          </h2>
          <p className="text-sm text-slate-600">
            We focus on authentic educational values and practical student support without inflated claims or unverified awards.
          </p>
        </div>

        {/* 4 Feature Cards as Specified */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Quality Education</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A commitment to structured teaching and meaningful learning based on the prescribed state syllabus and experienced teacher oversight.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Academic Development</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Continuous academic support for students as they progress step-by-step through junior secondary into senior secondary specialization.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Character and Discipline</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              An unyielding emphasis on positive values, moral responsibility, punctuality, and respectful behaviour toward teachers and fellow students.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Extra-Curricular Activities</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Opportunities to develop personal interests, build self-confidence, cultivate teamwork, and acquire practical social skills beyond textbooks.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION H: ADMISSIONS CALL TO ACTION
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#008F50] to-[#006e3d] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-[#007a44]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-bold text-[#D8C900] uppercase tracking-wider">
              Admissions & Enrolment
            </div>

            {/* Exact Required CTA Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Give Your Child a Strong Foundation for the Future
            </h2>

            {/* Exact Required Supporting Text */}
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Discover the learning opportunities available at De-Amicable College. Contact us to enquire about admission, class placement, and the information required for enrolment.
            </p>

            <div className="p-3 rounded-lg bg-emerald-950/30 text-xs text-emerald-100 border border-emerald-400/30 max-w-xl">
              <strong>Notice:</strong> Current admissions guidelines, placement assessments, and term schedules are provided directly by the school administrative desk.
            </div>

            {/* Exact Two Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setCurrentPage('admissions')}
                className="px-6 py-3 bg-[#D8C900] hover:bg-[#c4b600] text-slate-900 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer border border-yellow-300"
              >
                Enquire About Admission
              </button>

              <button
                onClick={() => setCurrentPage('contact')}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-[#008F50] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                Contact the School
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION I: NEWS & EVENTS PREVIEW (LIFE AT DE-AMICABLE)
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
              School Communication
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Life at De-Amicable College
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('news')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008F50] hover:underline cursor-pointer"
          >
            <span>View All Announcements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-[#008F50]">{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">By {item.author}</span>
                <button
                  onClick={() => setSelectedNewsArticle(item)}
                  className="text-xs font-bold text-[#008F50] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION J: LOCATION & CONTACT PREVIEW
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
                Visit & Contact Us
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Ikotun Campus Location
              </h2>

              {/* Exact Location Guidance from Prompt */}
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
                <strong className="text-xs uppercase tracking-wider text-[#008F50] block">
                  Route & Travel Guidance:
                </strong>
                <p className="text-sm font-medium text-slate-900 leading-relaxed">
                  “From Ikotun, divert to Ijegun Road, proceed towards Car Wash Bus Stop, and locate Abogunloko. The school is at 23, Ayodele Shitta Street.”
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-700 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#008F50] shrink-0 mt-0.5" />
                  <span><strong>Physical Address:</strong> {schoolInfo.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#008F50] shrink-0" />
                  <span><strong>Telephone:</strong> <a href={`tel:${schoolInfo.phone}`} className="hover:underline text-emerald-800 font-semibold">{schoolInfo.phone}</a></span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#008F50] shrink-0" />
                  <span><strong>Email:</strong> <a href={`mailto:${schoolInfo.email}`} className="hover:underline text-emerald-800 font-semibold">{schoolInfo.email}</a></span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#008F50] shrink-0" />
                  <span><strong>Opening Hours:</strong> {schoolInfo.openingHours}</span>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Contact Us */}
              <div className="pt-3 flex flex-wrap gap-3 items-center">
                <a
                  href={schoolInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D8C900]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                </a>

                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-5 py-2.5 bg-white border border-slate-300 hover:border-[#008F50] text-slate-800 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Visual Location Map Preview Container */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="h-48 rounded-lg bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#008F50] text-white flex items-center justify-center mb-2 shadow-sm">
                    <MapPin className="w-6 h-6 text-[#D8C900]" />
                  </div>
                  <strong className="text-xs text-slate-900">De-Amicable College Campus</strong>
                  <p className="text-[11px] text-slate-500 mt-0.5">23 Ayodele Shitta St, Ikotun</p>
                  <span className="text-[10px] text-emerald-800 font-medium mt-2 bg-emerald-100/70 px-2 py-0.5 rounded">
                    off Abogunloko Car Wash Bus Stop, Ijegun Rd
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500">Ikotun / Ijegun Axis, Lagos</span>
                  <a
                    href={schoolInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#008F50] font-bold hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
