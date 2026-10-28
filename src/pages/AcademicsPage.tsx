import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { CLASS_LEVELS } from '../data/initialData';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Plus, 
  Search, 
  Filter, 
  ArrowRight,
  Sparkles,
  FileCheck
} from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const { subjects, setIsStaffModalOpen, setCurrentPage } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Core', 'Sciences', 'Arts & Humanities', 'Commercial', 'General'];

  const filteredSubjects = subjects.filter((s) => {
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
          Academics & Curriculum
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Secondary Education
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Structured learning aligned strictly with the <strong>Lagos State Ministry Scheme of Work</strong>, fostering intellectual mastery, analytical rigor, and examination readiness across Junior and Senior secondary levels.
        </p>
      </div>

      {/* Curriculum Banner */}
      <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F50]">
              Official State Curriculum
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Lagos State Ministry Scheme of Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our syllabus adheres to the scheme of work approved by the Lagos State Ministry of Basic and Secondary Education. Every term's lesson plans, practical exercises, continuous assessments, and revision periods are carefully synchronized with state guidelines.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-xs space-y-2 text-xs">
            <strong className="text-slate-900 block font-bold">Academic Calendar Focus:</strong>
            <ul className="space-y-1 text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                <span>Three Structured Academic Terms</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                <span>Continuous Assessment Tests (CAT)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
                <span>End-of-Term Examinations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Confirmed Subjects & Interactive Subject Directory */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
              Course Offerings
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Academic Subjects
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Confirmed core subjects: <strong className="text-[#008F50]">Mathematics</strong> and <strong className="text-[#008F50]">English Language</strong>. Additional subjects are maintained dynamically by school administration.
            </p>
          </div>

          {/* Admin Add Subject Button */}
          <button
            onClick={() => setIsStaffModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4 text-[#D8C900]" />
            <span>Manage / Add Subjects (Staff)</span>
          </button>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#008F50] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subjects..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#008F50]"
            />
          </div>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSubjects.map((sub) => (
            <div 
              key={sub.id}
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                sub.isConfirmedCore 
                  ? 'bg-emerald-50/40 border-[#008F50] shadow-xs' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-slate-500">{sub.category}</span>
                  {sub.isConfirmedCore ? (
                    <span className="text-[10px] font-black text-[#008F50] bg-emerald-100 px-2 py-0.5 rounded-sm">
                      CONFIRMED CORE
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-sm">
                      {sub.level}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">{sub.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sub.description}</p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-400">
                <span>Aligned with Lagos State syllabus</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* External Examinations Supported */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-bold text-[#D8C900] uppercase tracking-wider">
            Standardised Certifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Examinations Supported
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            De-Amicable College provides rigorous academic preparation, past question analysis, and continuous revision for national and regional certificate examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 flex items-center justify-center text-[#D8C900]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">WAEC</h3>
            <p className="text-xs font-semibold text-emerald-400">West African Senior School Certificate Examination (WASSCE)</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard terminal examination for SSS3 students qualifying for university, polytechnic, and college of education admissions across Nigeria and West Africa.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 flex items-center justify-center text-[#D8C900]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">NECO</h3>
            <p className="text-xs font-semibold text-emerald-400">National Examinations Council (SSCE)</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              National certification examination for senior secondary school completion, recognised nationwide and internationally for higher education placement.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-900/60 flex items-center justify-center text-[#D8C900]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">BECE</h3>
            <p className="text-xs font-semibold text-emerald-400">Basic Education Certificate Examination</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              State and national certification examination written at the conclusion of JSS3, determining transition readiness into Senior Secondary education.
            </p>
          </div>

        </div>
      </section>

      {/* Class Level Structure Details */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
            Class Structure
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Junior & Senior Secondary Breakdown
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Junior Secondary */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Junior Secondary School (JSS1 – JSS3)</h3>
                <span className="text-xs text-slate-500">Foundation and Basic Certification</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              The junior secondary phase lays the foundation for broad-based literacy, mathematical reasoning, introductory sciences, civic consciousness, and study discipline. Culminates in BECE testing.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="font-bold text-slate-800">JSS1:</span>
                <span className="text-slate-600">Primary-to-secondary transition, study habits, core numeracy & literacy</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="font-bold text-slate-800">JSS2:</span>
                <span className="text-slate-600">Intermediate concept mastery, science foundations, essay writing</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-bold text-slate-800">JSS3:</span>
                <span className="text-slate-600">Pre-BECE revision, mock testing, and senior transition counseling</span>
              </div>
            </div>
          </div>

          {/* Senior Secondary */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-800">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Senior Secondary School (SSS1 – SSS3)</h3>
                <span className="text-xs text-slate-500">Specialisation and National Examination</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              The senior secondary division allows learners to pursue tailored career pathways across Sciences, Arts & Humanities, and Commercial disciplines, culminating in WAEC and NECO.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="font-bold text-slate-800">SSS1:</span>
                <span className="text-slate-600">Specialized subject selection, laboratory introductions, analytical depth</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="font-bold text-slate-800">SSS2:</span>
                <span className="text-slate-600">In-depth syllabus completion, practical coursework, continuous assessment</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-bold text-slate-800">SSS3:</span>
                <span className="text-slate-600">WAEC & NECO registration, past question series, intensive mock exams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra-Curricular Activities Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
        <div>
          <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
            Beyond the Classroom
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Extra-Curricular & Student Enrichment
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Complementing formal academic instruction with character-building co-curricular programmes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Debating & Literary Club</strong>
            <p className="text-slate-600 leading-relaxed">Fosters articulate public speaking, logical argumentation, and grammatical precision.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Science & Tech Club</strong>
            <p className="text-slate-600 leading-relaxed">Engages young learners in practical experiments, scientific inquiry, and technology projects.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Sports & Physical Fitness</strong>
            <p className="text-slate-600 leading-relaxed">Promotes active wellness, teamwork, endurance, and good sportsmanship.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Cultural & Drama Society</strong>
            <p className="text-slate-600 leading-relaxed">Encourages creative expression, moral drama presentations, and cultural appreciation.</p>
          </div>
        </div>
      </section>

      {/* Admissions Call to Action */}
      <div className="text-center pt-4">
        <button
          onClick={() => setCurrentPage('admissions')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold tracking-wide uppercase transition-colors shadow-sm cursor-pointer"
        >
          <span>Enquire for Admissions Placement</span>
          <ArrowRight className="w-4 h-4 text-[#D8C900]" />
        </button>
      </div>

    </div>
  );
};
