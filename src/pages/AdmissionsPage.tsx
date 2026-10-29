import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { 
  GraduationCap, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageSquare, 
  AlertCircle, 
  Clock, 
  Send, 
  FileText, 
  Building,
  HelpCircle
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const { schoolInfo, addAdmissionInquiry } = useSchool();

  // Form State
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [prospectiveClass, setProspectiveClass] = useState<'JSS1' | 'JSS2' | 'JSS3' | 'SSS1' | 'SSS2' | 'SSS3'>('JSS1');
  const [preferredContact, setPreferredContact] = useState<'Telephone' | 'WhatsApp' | 'Email' | 'In-Person Visit'>('Telephone');
  const [message, setMessage] = useState('');

  // Submission Status
  const [submitting, setSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{ id: string; name: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!parentName.trim()) {
      setErrorMessage('Please enter your full parent or guardian name.');
      return;
    }

    const cleanPhone = phone.trim().replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid telephone number (e.g., 08023839502).');
      return;
    }

    if (!message.trim()) {
      setErrorMessage('Please write a brief enquiry message or question for our admissions team.');
      return;
    }

    setSubmitting(true);

    try {
      const result = addAdmissionInquiry({
        parentName: parentName.trim(),
        phone: cleanPhone,
        email: email.trim() || undefined,
        prospectiveClass,
        preferredContact,
        message: message.trim()
      });

      if (result.success) {
        setSubmissionReceipt({ id: result.id, name: parentName.trim() });
        // Reset form
        setParentName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        setErrorMessage('Unable to register your enquiry at this time. Please contact the school directly via telephone or WhatsApp.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred while transmitting your enquiry. Please use our direct WhatsApp or telephone options below.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="text-xs font-bold text-[#008F50] uppercase tracking-wider">
          Enrolment & Placements
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Admissions at De-Amicable College
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          We welcome prospective parents and guardians seeking a disciplined, structured, and morally sound secondary school education for their children in Ikotun, Lagos State.
        </p>
      </div>

      {/* Overview Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Admissions Guidance & Class Pathways */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              Welcome Prospective Parents
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At De-Amicable College, class placements are considered with care to ensure every learner enters at an academic stage matched to their abilities and age group.
            </p>
          </div>

          {/* Academic Levels Offered */}
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#008F50]">
              Available Academic Levels
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <strong className="text-slate-900 block font-bold mb-1">Junior Secondary School (JSS1 – JSS3)</strong>
                <p className="text-slate-600">
                  Open to primary school leavers and transferring junior secondary students. Prepares candidates for the Basic Education Certificate Examination (BECE).
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <strong className="text-slate-900 block font-bold mb-1">Senior Secondary School (SSS1 – SSS3)</strong>
                <p className="text-slate-600">
                  Open to JSS3 BECE certificate holders and transferring senior students. Rigorous preparation for WAEC (WASSCE) and NECO examinations.
                </p>
              </div>
            </div>
          </div>

          {/* Transparency Callout on Fees & Deadlines */}
          <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs space-y-2 text-amber-900">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <HelpCircle className="w-4 h-4 text-[#D8C900]" />
              <span>Current Information Notice</span>
            </div>
            <p className="leading-relaxed">
              For up-to-date information regarding tuition and levies, term registration schedules, entrance examination guidelines, and necessary documentation:
            </p>
            <p className="font-semibold text-slate-900">
              Contact the school administrative office directly at <a href={`tel:${schoolInfo.phone}`} className="underline text-[#008F50]">{schoolInfo.phone}</a> or visit the campus during office hours ({schoolInfo.openingHours}).
            </p>
          </div>

          {/* Direct Instant Channels */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Immediate Enquiry Channels:
            </span>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={schoolInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#D8C900]" />
                <span>WhatsApp Admissions</span>
              </a>

              <a
                href={`tel:${schoolInfo.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D8C900]" />
                <span>Call Admissions Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Admission Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border-2 border-emerald-100 p-6 sm:p-8 shadow-sm space-y-6">
            
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-[#008F50] shrink-0 shadow-xs">
                  <img 
                    src={schoolInfo.logoUrl} 
                    alt="De-Amicable College Official Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="inline-block text-[11px] font-bold text-[#008F50] uppercase tracking-wider">
                    Official Admissions Desk
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Admission Enquiry Form
                  </h2>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Please complete this form to register your interest. Our admissions officer will review your request and get in touch via your preferred contact method.
              </p>
            </div>

            {/* Submission Receipt Display */}
            {submissionReceipt && (
              <div className="p-5 bg-emerald-50 border border-emerald-300 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#008F50] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#008F50]" />
                  <span>Enquiry Registered Successfully</span>
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p>
                    Thank you, <strong>{submissionReceipt.name}</strong>. Your enquiry has been logged into our school registry with reference ID:
                  </p>
                  <p className="font-mono text-sm font-bold text-emerald-900 bg-white px-3 py-1.5 rounded border border-emerald-200 inline-block">
                    {submissionReceipt.id}
                  </p>
                  <p className="pt-1 text-slate-600">
                    Our admissions team will reach out to you shortly. You may also present this reference number at our administrative office at 23, Ayodele Shitta Street, Ikotun.
                  </p>
                </div>
                <button
                  onClick={() => setSubmissionReceipt(null)}
                  className="text-xs font-bold text-[#008F50] hover:underline pt-1 cursor-pointer"
                >
                  Submit another enquiry ›
                </button>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            {!submissionReceipt && (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent or Guardian Full Name <span className="text-[#C82035]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Mr Adekunle Babatunde"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                  />
                </div>

                {/* Telephone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telephone Number <span className="text-[#C82035]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 08023839502"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Nigerian phone number format</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. parent@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Prospective Class & Preferred Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student's Prospective Class <span className="text-[#C82035]">*</span>
                    </label>
                    <select
                      value={prospectiveClass}
                      onChange={(e) => setProspectiveClass(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-white font-medium"
                    >
                      <option value="JSS1">JSS1 (Junior Secondary Year 1)</option>
                      <option value="JSS2">JSS2 (Junior Secondary Year 2)</option>
                      <option value="JSS3">JSS3 (Junior Secondary Year 3 / BECE)</option>
                      <option value="SSS1">SSS1 (Senior Secondary Year 1)</option>
                      <option value="SSS2">SSS2 (Senior Secondary Year 2)</option>
                      <option value="SSS3">SSS3 (Senior Secondary Year 3 / WAEC/NECO)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Contact Method <span className="text-[#C82035]">*</span>
                    </label>
                    <select
                      value={preferredContact}
                      onChange={(e) => setPreferredContact(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-white font-medium"
                    >
                      <option value="Telephone">Phone Call</option>
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Email">Email</option>
                      <option value="In-Person Visit">In-Person School Visit</option>
                    </select>
                  </div>
                </div>

                {/* Enquiry Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enquiry Message / Student Background <span className="text-[#C82035]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the student's current school, class placement interest, or any specific questions..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008F50] focus:border-transparent outline-none bg-slate-50/50"
                  />
                </div>

                {/* Privacy & Transmission disclosure */}
                <p className="text-[11px] text-slate-500 leading-normal">
                  Your submitted details are kept strictly confidential for admissions communication and verified by the school admissions office.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 bg-[#008F50] hover:bg-[#007340] text-white rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border border-[#007a44] disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#D8C900]" />
                  <span>{submitting ? 'Transmitting Enquiry...' : 'Submit Admission Enquiry'}</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </section>

      {/* Campus Visit Guide */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              Visiting the School in Person
            </h3>
            <p className="text-xs text-slate-600">
              Parents are welcome to tour the campus at 23, Ayodele Shitta Street, off Abogunloko Car Wash Bus Stop, Ijegun Road, Ikotun.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-3 py-1.5 rounded-lg shrink-0">
            <Clock className="w-4 h-4 text-[#008F50]" />
            <span>Visiting Hours: {schoolInfo.openingHours}</span>
          </div>
        </div>
      </section>

    </div>
  );
};
