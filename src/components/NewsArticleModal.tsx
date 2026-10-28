import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { X, Calendar, User, Tag, ArrowRight } from 'lucide-react';

export const NewsArticleModal: React.FC = () => {
  const { selectedNewsArticle, setSelectedNewsArticle, setCurrentPage } = useSchool();

  if (!selectedNewsArticle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-slate-200 animate-in fade-in duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
      >
        {/* Header */}
        <div className="bg-[#008F50] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-bold bg-[#D8C900] text-slate-900 px-2 py-0.5 rounded-sm">
              {selectedNewsArticle.category}
            </span>
            <span className="text-xs text-emerald-100 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedNewsArticle.date}</span>
            </span>
          </div>

          <button
            onClick={() => setSelectedNewsArticle(null)}
            className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <h2 id="article-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {selectedNewsArticle.title}
          </h2>

          <div className="flex items-center gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
            <User className="w-3.5 h-3.5 text-[#008F50]" />
            <span>Published by: <strong className="text-slate-700">{selectedNewsArticle.author}</strong></span>
          </div>

          <div className="p-3 bg-emerald-50 rounded-lg text-xs font-medium text-emerald-900 border border-emerald-100 leading-relaxed">
            {selectedNewsArticle.summary}
          </div>

          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-3 pt-2">
            <p>{selectedNewsArticle.content}</p>
          </div>

          {selectedNewsArticle.isPlaceholder && (
            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-xs text-slate-500">
              <p className="font-semibold text-slate-700">Notice to Parents and Students:</p>
              <p>Official term announcements and timetable schedules are issued through the school administrative desk at 23, Ayodele Shitta Street, Ikotun.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              setSelectedNewsArticle(null);
              setCurrentPage('admissions');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008F50] hover:underline"
          >
            <span>Have an Admission Enquiry?</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#008F50]" />
          </button>

          <button
            onClick={() => setSelectedNewsArticle(null)}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
