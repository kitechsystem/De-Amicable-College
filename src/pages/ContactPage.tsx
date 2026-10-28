import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Compass,
  ArrowRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { schoolInfo, addContactMessage } = useSchool();

  // Contact Form State
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }

    if (!contact.trim()) {
      setErrorMessage('Please provide your telephone number or email address so we can reach you.');
      return;
    }

    if (!subject.trim()) {
      setErrorMessage('Please provide a subject for your enquiry.');
      return;
    }

    if (!message.trim()) {
      setErrorMessage('Please enter your enquiry message.');
      return;
    }

    setSubmitting(true);

    try {
      addContactMessage({
        name: name.trim(),
        contact: contact.trim(),
        subject: subject.trim(),
        message: message.trim()
      });

      setSuccessMessage(true);
      setName('');
      setContact('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSuccessMessage(false), 5000);
    } catch {
      setErrorMessage('Unable to send message. Please contact us directly via telephone or WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
          Enquiries & Location
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact De-Amicable College
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          We welcome questions from parents, guardians, and visitors. Reach out to our administrative team or plan a visit to our campus in Ikotun, Lagos State.
        </p>
      </div>

      {/* Main Grid: Details & Directions vs Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Official Contact Data & Directions */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-[#008F50]">
              Official School Contact Information
            </h2>

            <div className="space-y-4 text-xs text-slate-700">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs font-bold mb-0.5">School Campus Address</strong>
                  <p className="leading-relaxed text-slate-600">{schoolInfo.address}</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs font-bold mb-0.5">Telephone</strong>
                  <a 
                    href={`tel:${schoolInfo.phone}`}
                    className="text-emerald-800 font-bold hover:underline block text-sm"
                  >
                    {schoolInfo.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Direct line to school administrative desk</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs font-bold mb-0.5">Official Email</strong>
                  <a 
                    href={`mailto:${schoolInfo.email}`}
                    className="text-emerald-800 font-bold hover:underline block text-sm"
                  >
                    {schoolInfo.email}
                  </a>
                  <span className="text-[11px] text-slate-400">For enquiries and official correspondence</span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-[#008F50] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs font-bold mb-0.5">Administrative & School Hours</strong>
                  <p className="font-semibold text-slate-800">{schoolInfo.openingHours}</p>
                  <span className="text-[11px] text-slate-400">Regular academic session hours</span>
                </div>
              </div>

            </div>

            {/* Exact Location Guidance as Supplied */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Compass className="w-4 h-4 text-[#008F50]" />
                <span>Directions to De-Amicable College:</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed italic">
                “{schoolInfo.directions}”
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={schoolInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs font-bold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D8C900]" />
                <span>Google Maps Route</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
              </a>

              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D8C900]" />
                <span>Direct WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            
            <div>
              <span className="text-xs font-bold text-[#008F50] uppercase tracking-wider block">
                Send a Message
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                General School Enquiry Form
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Have a question regarding admissions, academics, or visiting our Ikotun campus? Submit your message below.
              </p>
            </div>

            {/* Success Feedback */}
            {successMessage && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#008F50] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Message Submitted Successfully</strong>
                  <p className="mt-0.5">
                    Thank you for contacting De-Amicable College. Our administrative staff will review your message and reply promptly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Feedback */}
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-[#C82035]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mrs. Folashade Adeyemi"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Telephone Number or Email Address <span className="text-[#C82035]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. 08023839502 or parent@yahoo.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">How should the school reach you?</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Subject <span className="text-[#C82035]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Enrolment Enquiry for JSS1 / Transfer to SSS1"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Enquiry Message <span className="text-[#C82035]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please state your question or enquiry here..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border border-[#007a44] disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-[#D8C900]" />
                <span>{submitting ? 'Submitting Message...' : 'Send Enquiry'}</span>
              </button>

            </form>

          </div>
        </div>

      </div>

    </div>
  );
};
