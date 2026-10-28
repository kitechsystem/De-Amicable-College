import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { SubjectItem, NewsItem } from '../types';
import { X, Clock, BookOpen, Newspaper, Users, Plus, Trash2, CheckCircle2, AlertCircle, Save, PhoneCall, Mail } from 'lucide-react';

export const StaffPortalModal: React.FC = () => {
  const {
    isStaffModalOpen,
    setIsStaffModalOpen,
    schoolInfo,
    updateOpeningHours,
    subjects,
    addSubject,
    deleteSubject,
    news,
    addNews,
    deleteNews,
    admissionInquiries,
    updateInquiryStatus,
    contactMessages
  } = useSchool();

  const [activeTab, setActiveTab] = useState<'hours' | 'subjects' | 'news' | 'inquiries' | 'messages'>('hours');

  // Hours form state
  const [hoursInput, setHoursInput] = useState(schoolInfo.openingHours);
  const [hoursSaved, setHoursSaved] = useState(false);

  // Subject form state
  const [newSubName, setNewSubName] = useState('');
  const [newSubCat, setNewSubCat] = useState<'Core' | 'Sciences' | 'Arts & Humanities' | 'Commercial' | 'General'>('Sciences');
  const [newSubLevel, setNewSubLevel] = useState<'Both' | 'Junior Secondary' | 'Senior Secondary'>('Both');
  const [newSubDesc, setNewSubDesc] = useState('');

  // News form state
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState<'Academic' | 'Admissions' | 'Announcement' | 'Co-Curricular'>('Announcement');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsAuthor, setNewsAuthor] = useState('School Administration');

  if (!isStaffModalOpen) return null;

  const handleSaveHours = (e: React.FormEvent) => {
    e.preventDefault();
    updateOpeningHours(hoursInput);
    setHoursSaved(true);
    setTimeout(() => setHoursSaved(false), 2500);
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim()) return;
    addSubject({
      name: newSubName.trim(),
      category: newSubCat,
      level: newSubLevel,
      isConfirmedCore: false,
      description: newSubDesc.trim() || `Course syllabus aligned with Lagos State Ministry scheme of work for ${newSubName}.`
    });
    setNewSubName('');
    setNewSubDesc('');
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsSummary.trim()) return;
    addNews({
      title: newsTitle.trim(),
      date: new Date().toISOString().split('T')[0],
      category: newsCategory,
      summary: newsSummary.trim(),
      content: newsContent.trim() || newsSummary.trim(),
      author: newsAuthor.trim() || 'School Administration',
      isPlaceholder: false
    });
    setNewsTitle('');
    setNewsSummary('');
    setNewsContent('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portal-title"
      >
        {/* Modal Header */}
        <div className="bg-[#008F50] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 p-1 flex items-center justify-center">
              <img 
                src={schoolInfo.logoUrl} 
                alt="De-Amicable crest" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 id="portal-title" className="text-lg font-bold">De-Amicable College Administration Portal</h2>
              <p className="text-xs text-emerald-100">Manage school operating hours, verified subjects, news & student inquiries</p>
            </div>
          </div>

          <button
            onClick={() => setIsStaffModalOpen(false)}
            className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('hours')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'hours'
                ? 'border-[#008F50] text-[#008F50] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>School Hours</span>
          </button>

          <button
            onClick={() => setActiveTab('subjects')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'subjects'
                ? 'border-[#008F50] text-[#008F50] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Manage Subjects ({subjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'news'
                ? 'border-[#008F50] text-[#008F50] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>News & Announcements ({news.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'inquiries'
                ? 'border-[#008F50] text-[#008F50] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Admission Enquiries ({admissionInquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'messages'
                ? 'border-[#008F50] text-[#008F50] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Contact Messages ({contactMessages.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 text-sm">
          
          {/* TAB 1: School Hours */}
          {activeTab === 'hours' && (
            <div className="max-w-xl mx-auto space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Official Opening Hours</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Default: Monday to Friday, 7:30 AM–6:00 PM. Update here to reflect changes in academic session hours, holiday schedules, or administrative hours.
                </p>
              </div>

              <form onSubmit={handleSaveHours} className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Opening Hours String
                  </label>
                  <input
                    type="text"
                    value={hoursInput}
                    onChange={(e) => setHoursInput(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-white"
                    placeholder="e.g. Monday to Friday, 7:30 AM – 6:00 PM"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#008F50] hover:bg-[#007340] text-white px-5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4 text-[#D8C900]" />
                    <span>Save Changes</span>
                  </button>

                  {hoursSaved && (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#008F50]" />
                      <span>Updated across website!</span>
                    </span>
                  )}
                </div>
              </form>

              <div className="p-4 rounded-lg bg-emerald-50 text-xs text-emerald-900 border border-emerald-200">
                <p className="font-semibold mb-1">Notice on School Hours Verification:</p>
                <p>Opening hours are synchronized across the top information bar, homepage location preview, admissions office notes, and the footer.</p>
              </div>
            </div>
          )}

          {/* TAB 2: Subjects Management */}
          {activeTab === 'subjects' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Subject Management</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Mathematics and English Language are confirmed core subjects. Authorised staff can add additional subjects verified for the school syllabus.
                </p>
              </div>

              {/* Add Subject Form */}
              <form onSubmit={handleAddSubject} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold text-[#008F50] uppercase tracking-wider">Add Confirmed Subject</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Subject Name *</label>
                    <input
                      type="text"
                      value={newSubName}
                      onChange={(e) => setNewSubName(e.target.value)}
                      placeholder="e.g. Further Mathematics"
                      required
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Category</label>
                    <select
                      value={newSubCat}
                      onChange={(e) => setNewSubCat(e.target.value as any)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                    >
                      <option value="Sciences">Sciences</option>
                      <option value="Arts & Humanities">Arts & Humanities</option>
                      <option value="Commercial">Commercial</option>
                      <option value="General">General</option>
                      <option value="Core">Core</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Applicable Level</label>
                    <select
                      value={newSubLevel}
                      onChange={(e) => setNewSubLevel(e.target.value as any)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                    >
                      <option value="Both">Both (JSS & SSS)</option>
                      <option value="Junior Secondary">Junior Secondary Only</option>
                      <option value="Senior Secondary">Senior Secondary Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Course Description (Optional)</label>
                  <input
                    type="text"
                    value={newSubDesc}
                    onChange={(e) => setNewSubDesc(e.target.value)}
                    placeholder="Brief description of the subject curriculum..."
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-[#008F50] hover:bg-[#007340] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Subject to Curriculum</span>
                </button>
              </form>

              {/* Subject List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Active Subjects ({subjects.length})</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subjects.map((s) => (
                    <div 
                      key={s.id} 
                      className={`p-3 rounded-lg border flex items-start justify-between gap-3 ${
                        s.isConfirmedCore 
                          ? 'bg-emerald-50/50 border-[#008F50]/30' 
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900 text-xs">{s.name}</span>
                          {s.isConfirmedCore && (
                            <span className="text-[10px] bg-[#008F50] text-white px-1.5 py-0.5 rounded-sm font-bold">
                              CONFIRMED CORE
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          <span>{s.category}</span> · <span>{s.level}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">{s.description}</p>
                      </div>

                      {!s.isConfirmedCore && (
                        <button
                          onClick={() => deleteSubject(s.id)}
                          className="text-slate-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                          title="Remove subject"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: News & Announcements */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Publish News & Announcements</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Keep students, parents, and prospective families informed of academic calendar updates, term schedules, and admissions notices.
                </p>
              </div>

              {/* Add News Form */}
              <form onSubmit={handleAddNews} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold text-[#008F50] uppercase tracking-wider">Draft New Announcement</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Title *</label>
                    <input
                      type="text"
                      value={newsTitle}
                      onChange={(e) => setNewsTitle(e.target.value)}
                      placeholder="e.g. Mid-Term Assessment Schedule Announced"
                      required
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Category</label>
                    <select
                      value={newsCategory}
                      onChange={(e) => setNewsCategory(e.target.value as any)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                    >
                      <option value="Announcement">General Announcement</option>
                      <option value="Academic">Academic Notice</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Co-Curricular">Co-Curricular / Events</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Summary (1–2 sentences) *</label>
                  <input
                    type="text"
                    value={newsSummary}
                    onChange={(e) => setNewsSummary(e.target.value)}
                    placeholder="Brief highlight that appears on the card..."
                    required
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Full Article Content</label>
                  <textarea
                    rows={3}
                    value={newsContent}
                    onChange={(e) => setNewsContent(e.target.value)}
                    placeholder="Detailed notice for students, parents, and guardians..."
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Author / Office</label>
                    <input
                      type="text"
                      value={newsAuthor}
                      onChange={(e) => setNewsAuthor(e.target.value)}
                      placeholder="e.g. Office of the Principal"
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-md focus:ring-1 focus:ring-[#008F50] outline-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#008F50] hover:bg-[#007340] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Publish Announcement</span>
                  </button>
                </div>
              </form>

              {/* News List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Published Articles</h4>
                {news.map((item) => (
                  <div key={item.id} className="p-3 bg-white rounded-lg border border-slate-200 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{item.title}</span>
                        <span className="text-[10px] text-slate-500">{item.date}</span>
                        <span className="text-[10px] text-emerald-700 font-semibold">{item.category}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{item.summary}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">By {item.author}</p>
                    </div>

                    <button
                      onClick={() => deleteNews(item.id)}
                      className="text-slate-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                      title="Delete notice"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Admission Inquiries */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Incoming Admission Enquiries</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Prospective parent submissions received through the website enquiry form.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 text-emerald-800 rounded-md border border-emerald-200">
                  {admissionInquiries.length} Enquiries Total
                </span>
              </div>

              {admissionInquiries.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  <Users className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-700">No Admission Enquiries Yet</p>
                  <p className="text-xs text-slate-500 mt-1">
                    When parents fill the admission form on the website, their details and prospective class choices will appear here for staff review.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {admissionInquiries.map((inq) => (
                    <div key={inq.id} className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-xs">{inq.parentName}</span>
                          <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-sm font-mono text-slate-700">
                            Ref: {inq.id}
                          </span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm font-bold">
                            Class: {inq.prospectiveClass}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={inq.status}
                            onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                            className="text-xs border border-slate-300 rounded px-2 py-1 bg-white font-medium text-slate-700"
                          >
                            <option value="Pending">Status: Pending</option>
                            <option value="Contacted">Status: Contacted</option>
                            <option value="Enrolled">Status: Enrolled</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <PhoneCall className="w-3.5 h-3.5 text-[#008F50]" />
                          <a href={`tel:${inq.phone}`} className="hover:underline">{inq.phone}</a>
                        </div>
                        {inq.email && (
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#008F50]" />
                            <a href={`mailto:${inq.email}`} className="hover:underline">{inq.email}</a>
                          </div>
                        )}
                        <div className="text-slate-500">
                          Prefers: <span className="font-medium text-slate-700">{inq.preferredContact}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <p className="font-medium text-slate-500 text-[11px] mb-0.5">Enquiry Note:</p>
                        <p className="italic">“{inq.message}”</p>
                      </div>

                      <div className="text-[10px] text-slate-400">
                        Submitted: {new Date(inq.submittedAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: Contact Messages */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Direct Contact Messages</h3>
                <p className="text-xs text-slate-500 mt-0.5">General inquiries sent from the Contact Us page.</p>
              </div>

              {contactMessages.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  <Mail className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-700">No Messages Yet</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Messages submitted through the contact form will be recorded here.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {contactMessages.map((msg) => (
                    <div key={msg.id} className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">{msg.name}</span>
                        <span className="text-slate-400 text-[10px]">
                          {new Date(msg.submittedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-emerald-800">{msg.subject}</p>
                      <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-md border border-slate-100 italic">
                        “{msg.message}”
                      </p>
                      <p className="text-[11px] text-slate-500">Contact: {msg.contact}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>De-Amicable College Management Interface</span>
          <button
            onClick={() => setIsStaffModalOpen(false)}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
