import { SchoolInfo, SubjectItem, NewsItem, GalleryItem } from '../types';

export const INITIAL_SCHOOL_INFO: SchoolInfo = {
  name: "De-Amicable College",
  motto: "God’s light @ impacting knowledge",
  established: "September 2010",
  establishedDate: "20 September 2010",
  type: "Private secondary school",
  founder: "Falowo Oluwasegun Benjamin",
  principal: "Mr Segun Falowo",
  address: "23, Ayodele Shitta Street, off Abogunloko Car Wash Bus Stop, Ijegun Road, Ikotun, Lagos State, Nigeria",
  phone: "08023839502",
  email: "Amicableschool@yahoo.com",
  openingHours: "Monday to Friday, 7:30 AM – 6:00 PM",
  directions: "From Ikotun, divert to Ijegun Road, proceed towards Car Wash Bus Stop, and locate Abogunloko. The school is at 23, Ayodele Shitta Street.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=23+Ayodele+Shitta+Street+Ikotun+Lagos+Nigeria",
  whatsappUrl: "https://wa.me/2348023839502?text=Hello%20De-Amicable%20College,%20I%20would%20like%20to%20enquire%20about%20admissions.",
  logoUrl: `${import.meta.env.BASE_URL || './'}assets/aistudio/De-Amicable_college_logo_978b0ebe.png`
};

export const INITIAL_SUBJECTS: SubjectItem[] = [
  {
    id: "sub-1",
    name: "Mathematics",
    category: "Core",
    level: "Both",
    isConfirmedCore: true,
    description: "Fundamental computation, algebra, geometry, statistics, and logical reasoning aligned with the Lagos State scheme of work."
  },
  {
    id: "sub-2",
    name: "English Language",
    category: "Core",
    level: "Both",
    isConfirmedCore: true,
    description: "Grammar, comprehension, continuous writing, oral English, and vocabulary development."
  },
  {
    id: "sub-3",
    name: "Biology",
    category: "Sciences",
    level: "Senior Secondary",
    isConfirmedCore: false,
    description: "Study of living organisms, plant and animal physiology, ecology, and cell biology."
  },
  {
    id: "sub-4",
    name: "Chemistry",
    category: "Sciences",
    level: "Senior Secondary",
    isConfirmedCore: false,
    description: "Inorganic, organic, and physical chemistry principles, chemical reactions, and laboratory experiments."
  },
  {
    id: "sub-5",
    name: "Physics",
    category: "Sciences",
    level: "Senior Secondary",
    isConfirmedCore: false,
    description: "Mechanics, thermal physics, waves, optics, electricity, and introductory modern physics."
  },
  {
    id: "sub-6",
    name: "Economics",
    category: "Commercial",
    level: "Senior Secondary",
    isConfirmedCore: false,
    description: "Microeconomics, macroeconomics, production, financial institutions, and international trade."
  },
  {
    id: "sub-7",
    name: "Civic Education",
    category: "General",
    level: "Both",
    isConfirmedCore: false,
    description: "Democratic governance, citizenship, national values, civic duties, and societal responsibility."
  },
  {
    id: "sub-8",
    name: "Basic Science & Technology",
    category: "Sciences",
    level: "Junior Secondary",
    isConfirmedCore: false,
    description: "Integrated introductory science, introductory technology, and computer studies for JSS learners."
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Enrolment & Admissions Open for 2026/2027 Academic Session",
    date: "2026-10-15",
    category: "Admissions",
    summary: "De-Amicable College invites prospective parents and guardians to submit admission enquiries for JSS1 through SSS3.",
    content: "We are pleased to welcome prospective students into our Junior and Senior Secondary classes for the ongoing and upcoming academic terms. Parents are invited to visit the administrative office at 23, Ayodele Shitta Street, Ikotun, or submit an admission enquiry online for placement details and admission requirements.",
    author: "Admissions Office",
    isPlaceholder: false
  },
  {
    id: "news-2",
    title: "Intensive Preparations for WAEC, NECO & BECE Examinations",
    date: "2026-09-28",
    category: "Academic",
    summary: "Structured revision and continuous assessment sessions ongoing for candidate classes.",
    content: "In alignment with the Lagos State Ministry scheme of work, candidate classes in JSS3 (BECE) and SSS3 (WAEC & NECO) have commenced targeted tutorial reviews and syllabus consolidation to ensure academic thoroughness.",
    author: "Academic Committee",
    isPlaceholder: false
  },
  {
    id: "news-3",
    title: "School News & Announcement Portal Initialised",
    date: "2026-09-20",
    category: "Announcement",
    summary: "School News Coming Soon — Authorised staff can publish updates directly through this portal.",
    content: "Welcome to the official communication board of De-Amicable College. Notice of upcoming term activities, inter-class debates, cultural presentations, and academic schedules will be regularly published here.",
    author: "School Administration",
    isPlaceholder: true
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Secondary School Classroom Learning",
    category: "Classroom Learning",
    caption: "Students engaged in interactive classroom instruction following the Lagos State scheme of work.",
    imagePlaceholderText: "Classroom Learning Session"
  },
  {
    id: "gal-2",
    title: "Morning Assembly & Moral Instruction",
    category: "School Activities",
    caption: "Morning devotion and values-based assembly reflecting our motto: God’s light @ impacting knowledge.",
    imagePlaceholderText: "Morning Devotion & Assembly"
  },
  {
    id: "gal-3",
    title: "Science & Practical Demonstration",
    category: "Academic Events",
    caption: "Demonstration of basic scientific principles and collaborative group problem-solving.",
    imagePlaceholderText: "Science & Practical Learning"
  },
  {
    id: "gal-4",
    title: "Inter-House & Sports Activities",
    category: "Extra-Curricular",
    caption: "Physical exercise, teamwork, and healthy competition among students across all levels.",
    imagePlaceholderText: "Sports & Fitness Day"
  },
  {
    id: "gal-5",
    title: "Cultural & Creative Arts Showcase",
    category: "Celebrations",
    caption: "Celebrating cultural heritage, drama, choral presentations, and creative expression.",
    imagePlaceholderText: "Cultural Arts Celebration"
  },
  {
    id: "gal-6",
    title: "Speech & Prize-Giving Day",
    category: "Celebrations",
    caption: "Recognizing student dedication, diligence, character, and academic progress.",
    imagePlaceholderText: "Annual Prize-Giving Day"
  }
];

export const CLASS_LEVELS = [
  {
    code: "JSS1",
    section: "Junior Secondary School",
    ageRange: "10 – 12 years",
    description: "The foundational entry stage where students transition into secondary education, building strong study habits in English, Mathematics, and integrated sciences.",
    focus: "Foundation, Literacy, Numeracy & Discipline"
  },
  {
    code: "JSS2",
    section: "Junior Secondary School",
    ageRange: "11 – 13 years",
    description: "Consolidation of core subjects with expanded critical thinking, practical coursework, and character formation.",
    focus: "Core Consolidation & Conceptual Depth"
  },
  {
    code: "JSS3",
    section: "Junior Secondary School",
    ageRange: "12 – 14 years",
    description: "The concluding junior secondary year with comprehensive preparation for the Basic Education Certificate Examination (BECE).",
    focus: "BECE Preparation & Senior Transition"
  },
  {
    code: "SSS1",
    section: "Senior Secondary School",
    ageRange: "13 – 15 years",
    description: "The entry into senior secondary studies, guiding students into specialized academic pathways across Sciences, Arts, and Commercial fields.",
    focus: "Pathway Specialization & Advanced Subjects"
  },
  {
    code: "SSS2",
    section: "Senior Secondary School",
    ageRange: "14 – 16 years",
    description: "Rigorous syllabus coverage, intensive continuous assessment, and preparation for senior external examinations.",
    focus: "Syllabus Mastery & Practical Demonstrations"
  },
  {
    code: "SSS3",
    section: "Senior Secondary School",
    ageRange: "15 – 17+ years",
    description: "Final candidate class focusing on intensive revision, mock examinations, and registration for WAEC and NECO.",
    focus: "WAEC & NECO Examination Readiness"
  }
];
