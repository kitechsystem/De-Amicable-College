import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Calendar, 
  User, 
  Search, 
  Tag, 
  Plus, 
  ArrowRight, 
  Clock, 
  Newspaper,
  Bell,
  Trash2
} from 'lucide-react';

export const NewsPage: React.FC = () => {
  const { news, setSelectedNewsArticle, setIsStaffModalOpen, schoolInfo } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Admissions', 'Academic', 'Announcement', 'Co-Curricular'];

  const filteredNews = news.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
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
              Official Notices & Bulletin
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            News and Events
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Stay informed with academic schedules, admission updates, term dates, and official announcements from the administrative board of De-Amicable College.
          </p>
        </div>

        {/* Staff Publish Button */}
        <button
          onClick={() => setIsStaffModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer self-start md:self-auto shrink-0"
        >
          <Plus className="w-4 h-4 text-[#D8C900]" />
          <span>Publish Notice (Staff)</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
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

        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news & notices..."
            className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#008F50]"
          />
        </div>
      </div>

      {/* News Articles Grid */}
      {filteredNews.length === 0 ? (
        <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
          <Newspaper className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-slate-700">No Announcements Found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search query or selecting a different category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <article 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#008F50] hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-[#008F50] bg-emerald-50 px-2 py-0.5 rounded-sm">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Calendar className="w-3 h-3 text-[#D8C900]" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">By {item.author}</span>
                <button
                  onClick={() => setSelectedNewsArticle(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008F50] hover:text-[#007340] hover:underline cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Notice Board Note */}
      <section className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 text-xs text-emerald-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-emerald-900">
          <Bell className="w-4 h-4 text-[#008F50]" />
          <span>Official Communication Policy</span>
        </div>
        <p className="leading-relaxed">
          De-Amicable College publishes official updates relating to term calendars, external examination registration (WAEC, NECO, BECE), and admissions. Parents requiring immediate clarification can call the school desk at <strong>08023839502</strong> or visit the campus at 23, Ayodele Shitta Street, Ikotun.
        </p>
      </section>

    </div>
  );
};
