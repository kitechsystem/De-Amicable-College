import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  BookOpen, 
  Award, 
  ArrowRight,
  Camera,
  Compass
} from 'lucide-react';

export const StudentLifePage: React.FC = () => {
  const { setCurrentPage, gallery, schoolInfo } = useSchool();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white p-1 border-2 border-[#008F50] shrink-0 shadow-xs">
            <img 
              src={schoolInfo.logoUrl} 
              alt="De-Amicable College Official Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
            Student Development & Experience
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Life Beyond the Classroom
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          At De-Amicable College, we believe that academic excellence must be complemented by personal discipline, creative self-expression, collaborative spirit, and strong moral character.
        </p>
      </div>

      {/* Core Dimensions of Student Life */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Teamwork & Collaboration</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Through group discussions, joint project presentations, and school events, students learn how to listen respectfully, share responsibilities, and accomplish common goals together.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <Sparkles className="w-5 h-5 text-[#D8C900]" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Creativity & Practical Learning</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Students are encouraged to apply concepts from Mathematics, English, and basic sciences to real-world questions, exploring creative problem solving and oral presentation.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Positive Behaviour & Responsibility</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Punctuality, neatness in school uniform, courteous manners, and honesty are cultivated daily, ensuring that every learner reflects our Christian and moral foundation.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <Compass className="w-5 h-5 text-[#008F50]" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Character & Moral Guidance</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            In harmony with our motto “God’s light @ impacting knowledge”, morning devotion and moral assemblies foster spiritual awareness and respect for teachers, elders, and peers.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Academic Diligence & Mentorship</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Teachers provide continuous encouragement, homework supervision, and constructive feedback, instilling strong study habits and self-reliance.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50]">
            <Users className="w-5 h-5 text-[#008F50]" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Co-Curricular Participation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Activities such as literary debating, educational quizzes, cultural presentations, and sports provide students with rich avenues to uncover and polish their unique talents.
          </p>
        </div>

      </section>

      {/* Daily Rhythm / Routine Section */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
            Daily Student Experience
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            A Typical Day of Learning at De-Amicable College
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            A disciplined, purposeful schedule that balances classroom instruction, practical exercises, and co-curricular enrichment from morning to dismissal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
            <span className="font-mono text-[11px] font-bold text-[#008F50]">7:30 AM – 8:00 AM</span>
            <strong className="text-slate-900 block font-semibold">Morning Devotion & Assembly</strong>
            <p className="text-slate-600">Punctual arrival, national anthem, school pledge, devotional reading, and moral charge.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
            <span className="font-mono text-[11px] font-bold text-[#008F50]">8:00 AM – 1:30 PM</span>
            <strong className="text-slate-900 block font-semibold">Academic Periods & Practical Sessions</strong>
            <p className="text-slate-600">Structured lessons based on the Lagos State scheme of work, covering Mathematics, English, and sciences.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
            <span className="font-mono text-[11px] font-bold text-[#008F50]">1:30 PM – 2:30 PM</span>
            <strong className="text-slate-900 block font-semibold">Break & Social Interaction</strong>
            <p className="text-slate-600">Refreshment, orderly recreational interaction, and teacher-supervised student fellowship.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
            <span className="font-mono text-[11px] font-bold text-[#008F50]">2:30 PM – Dismissal</span>
            <strong className="text-slate-900 block font-semibold">Study Review & Co-Curricular</strong>
            <p className="text-slate-600">Homework clarification, candidate revision tutorials, club meetings, and orderly dismissal.</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Spotlight */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
              Visual Highlights
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Moments from Student Life
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Snapshots of assembly, learning sessions, and school activities.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('gallery')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008F50] hover:underline cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>Visit Full Photo Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {gallery.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between"
            >
              <div className="h-32 rounded-lg bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center p-3 text-center mb-3">
                <Camera className="w-6 h-6 text-[#008F50] mb-1" />
                <span className="text-xs font-bold text-slate-800">{item.imagePlaceholderText}</span>
                <span className="text-[10px] text-emerald-800 font-medium mt-1">{item.category}</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center pt-2">
        <button
          onClick={() => setCurrentPage('admissions')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold tracking-wide uppercase transition-colors shadow-sm cursor-pointer"
        >
          <span>Enquire for Your Child's Enrolment</span>
          <ArrowRight className="w-4 h-4 text-[#D8C900]" />
        </button>
      </div>

    </div>
  );
};
