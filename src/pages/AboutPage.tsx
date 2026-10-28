import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  ArrowRight,
  Compass,
  FileText
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { schoolInfo, setCurrentPage } = useSchool();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
          About De-Amicable College
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          A Legacy of Knowledge, Character and Discipline
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Founded on 20 September 2010 in Ikotun, Lagos State, De-Amicable College is dedicated to imparting quality secondary education, guiding young learners under the divine motto: “God’s light @ impacting knowledge”.
        </p>
      </div>

      {/* Founder & School History Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-block text-xs font-bold text-[#008F50] uppercase tracking-wider">
            Our Foundation & Growth
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our School History
          </h2>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="text-base font-semibold text-slate-900">
              Established on 20 September 2010, De-Amicable College is a private secondary school founded by Falowo Oluwasegun Benjamin, an education professional with teaching experience and experience holding important positions in different schools.
            </p>
            <p>
              Drawing upon deep classroom expertise and practical school management insights, the founder set out to build an institution focused on grounded learning, disciplined character, and personal development for secondary students in Ikotun and its surrounding communities.
            </p>
            <p>
              Since its establishment, the college has continued to grow steadily, with its senior secondary school section experiencing significant growth as parents seek dependable preparation for national and regional examinations.
            </p>
          </div>

          <div className="pt-2">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
              <strong>Campus Location:</strong>
              <p>23, Ayodele Shitta Street, off Abogunloko Car Wash Bus Stop, Ijegun Road, Ikotun, Lagos State, Nigeria.</p>
            </div>
          </div>
        </div>

        {/* Timeline Visual Starting 2010 */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-[#008F50]">
              Institutional Timeline
            </h3>

            <div className="relative border-l-2 border-[#008F50] ml-3 pl-6 space-y-6 text-xs">
              
              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#008F50] ring-4 ring-emerald-100" />
                <span className="font-bold text-slate-900 text-sm block">20 September 2010</span>
                <p className="text-slate-600 mt-0.5">
                  Establishment of De-Amicable College by Falowo Oluwasegun Benjamin as a private secondary school in Ikotun.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#008F50] ring-4 ring-emerald-100" />
                <span className="font-bold text-slate-900 text-sm block">Curriculum Consolidation</span>
                <p className="text-slate-600 mt-0.5">
                  Integration of the Lagos State Ministry scheme of work across all junior secondary class levels.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#008F50] ring-4 ring-emerald-100" />
                <span className="font-bold text-slate-900 text-sm block">Senior Secondary Expansion</span>
                <p className="text-slate-600 mt-0.5">
                  Significant growth in the Senior Secondary section (SSS1–SSS3) preparing students for WAEC and NECO.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-3.5 h-3.5 rounded-full bg-[#D8C900] ring-4 ring-yellow-100" />
                <span className="font-bold text-slate-900 text-sm block">Present Day</span>
                <p className="text-slate-600 mt-0.5">
                  A trusted, disciplined secondary school committed to nurturing future leaders and impacting knowledge.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="bg-[#fbfcfa] rounded-2xl border border-slate-200 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="w-48 h-56 rounded-2xl bg-gradient-to-br from-emerald-100 via-white to-emerald-50 border-2 border-[#008F50] p-4 flex flex-col items-center justify-center shadow-md">
              <div className="w-16 h-16 rounded-full bg-white p-1 border border-slate-200 mb-2">
                <img 
                  src={schoolInfo.logoUrl} 
                  alt="De-Amicable crest" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-slate-900 text-sm">Mr Segun Falowo</span>
              <span className="text-xs text-[#008F50] font-semibold mt-0.5">Proprietor & Principal</span>
              <span className="text-[10px] text-slate-500 mt-2 bg-slate-100 px-2 py-0.5 rounded">
                School Leadership Portrait
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Founder & School Head
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
              School Leadership
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900">
              Message from the Principal, Mr Segun Falowo
            </h2>

            <div className="border-l-4 border-[#008F50] pl-4 py-2 bg-emerald-50/70 rounded-r-lg">
              <blockquote className="text-lg font-semibold text-slate-900 italic">
                “We are delighted to always have you in our midst.”
              </blockquote>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              As an educator with extensive teaching and administrative experience across diverse educational settings, Mr Segun Falowo founded De-Amicable College with a clear mandate: to create a secondary school where no student is left behind, where teachers inspire with diligence, and where moral uprightness is cherished as dearly as academic scores.
            </p>

            <p className="text-sm text-slate-700 leading-relaxed">
              Under his continuous leadership, the school has sustained an orderly learning atmosphere, maintaining a close partnership with parents and guardians in guiding each child toward their fullest academic potential.
            </p>
          </div>

        </div>
      </section>

      {/* Motto and Educational Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <Sparkles className="w-5 h-5 text-[#D8C900]" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Our Motto: “God’s light @ impacting knowledge”
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            The school motto encapsulates our guiding principle: all genuine knowledge and wisdom flow from divine illumination. By placing God at the centre of learning, we ensure that intellectual achievement is accompanied by humility, compassion, integrity, and good character.
          </p>
          <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
              <span>Divine illumination guiding student understanding</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
              <span>Moral integrity interwoven with academic rigor</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#008F50]" />
              <span>Impactful learning that equips young minds for life</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <Compass className="w-5 h-5 text-[#008F50]" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Commitment to Student Development
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            Education at De-Amicable College is structured to nurture the whole child. We focus on four core pillars:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-800">
              <strong className="text-[#008F50] block mb-0.5">1. Knowledge</strong>
              Structured mastery of the Lagos State curriculum.
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-800">
              <strong className="text-[#008F50] block mb-0.5">2. Discipline</strong>
              Punctuality, respect, and personal accountability.
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-800">
              <strong className="text-[#008F50] block mb-0.5">3. Confidence</strong>
              Oral presentation, debate, and problem-solving.
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 font-medium text-slate-800">
              <strong className="text-[#008F50] block mb-0.5">4. Character</strong>
              Integrity, honesty, and positive community impact.
            </div>
          </div>
        </div>

      </section>

      {/* Clearly Labeled Draft Proposals for Mission and Vision */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <FileText className="w-4 h-4 text-[#008F50]" />
          <span>Institutional Proposals · For School Board Review</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900">
          Proposed Mission & Vision Statements
        </h3>

        <p className="text-xs text-slate-500 italic">
          (As per institutional guidelines, the following statements are draft working proposals provided for review by the school administration and advisory council.)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F50]">Proposed Mission Statement</span>
            <p className="text-xs text-slate-700 leading-relaxed">
              “To provide a supportive, disciplined, and intellectually stimulating secondary education that equips students with academic competence, moral strength, and self-confidence under God’s guidance.”
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F50]">Proposed Vision Statement</span>
            <p className="text-xs text-slate-700 leading-relaxed">
              “To be a reference point for disciplined private secondary education in Ikotun and Lagos State, recognized for academic diligence, upright student character, and preparation for tertiary success.”
            </p>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setCurrentPage('admissions')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold tracking-wide uppercase transition-colors shadow-sm cursor-pointer"
        >
          <span>Enquire for Student Admission</span>
          <ArrowRight className="w-4 h-4 text-[#D8C900]" />
        </button>
      </div>

    </div>
  );
};
