import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { GalleryItem } from '../types';
import { 
  Camera, 
  X, 
  ShieldAlert, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery, schoolInfo } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeViewerItem, setActiveViewerItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'School Activities',
    'Classroom Learning',
    'Academic Events',
    'Celebrations',
    'Extra-Curricular'
  ];

  const filteredGallery = gallery.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  const handleNext = () => {
    if (!activeViewerItem) return;
    const currentIndex = filteredGallery.findIndex((i) => i.id === activeViewerItem.id);
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setActiveViewerItem(filteredGallery[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeViewerItem) return;
    const currentIndex = filteredGallery.findIndex((i) => i.id === activeViewerItem.id);
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setActiveViewerItem(filteredGallery[prevIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
          Visual Archive
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          School Photo Gallery
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Explore scenes of academic instruction, morning devotion, physical education, cultural celebrations, and student enrichment at De-Amicable College.
        </p>
      </div>

      {/* Student Privacy Protection Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-start gap-3 text-xs text-amber-900">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-amber-950 font-bold block text-xs">
            Student Privacy & Safeguarding Notice:
          </strong>
          <p className="leading-relaxed">
            In strict compliance with child protection guidelines and school policy, identifiable student photographs are maintained with appropriate parent or guardian consents. Replaceable placeholder slots are provided here; verified school photo albums are accessible to current parents at the administrative registry.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#008F50] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveViewerItem(item)}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#008F50] hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
          >
            {/* Visual Card / Placeholder Display */}
            <div className="relative aspect-4/3 bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100 flex flex-col items-center justify-center p-6 text-center border-b border-slate-100 group-hover:scale-102 transition-transform duration-200">
              
              <div className="w-14 h-14 rounded-full bg-white shadow-xs border border-emerald-200 flex items-center justify-center text-[#008F50] mb-3">
                <Camera className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold text-slate-800 px-3 py-1 bg-white/80 rounded-md shadow-xs">
                {item.imagePlaceholderText}
              </span>

              <span className="text-[10px] text-emerald-800 font-semibold tracking-wide uppercase mt-2">
                {item.category}
              </span>

              <div className="absolute top-3 right-3 text-[10px] bg-[#008F50] text-white px-2 py-0.5 rounded font-bold opacity-80 group-hover:opacity-100">
                Click to Expand
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008F50] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>De-Amicable College Campus</span>
                <span className="text-[#008F50] font-semibold">View Details ›</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Full-Size Lightbox Modal */}
      {activeViewerItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 animate-in zoom-in-95 duration-150">
            
            {/* Lightbox Header */}
            <div className="bg-[#008F50] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#D8C900] block">
                  {activeViewerItem.category}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {activeViewerItem.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveViewerItem(null)}
                className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Stage */}
            <div className="relative aspect-16/9 bg-slate-900 flex flex-col items-center justify-center p-8 text-center text-white">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#D8C900] border border-white/20">
                <Camera className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-emerald-100 max-w-md">
                {activeViewerItem.imagePlaceholderText}
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                Official School Photography Slot (Replaceable by School Administration)
              </p>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600 max-w-lg leading-relaxed">
                <strong>Description:</strong> {activeViewerItem.caption}
              </div>

              <button
                onClick={() => setActiveViewerItem(null)}
                className="px-4 py-2 bg-[#008F50] text-white text-xs font-bold rounded-lg hover:bg-[#007340] transition-colors cursor-pointer shrink-0"
              >
                Close Viewer
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
