export type PageTab = 
  | 'home' 
  | 'about' 
  | 'academics' 
  | 'admissions' 
  | 'student-life' 
  | 'news' 
  | 'gallery' 
  | 'contact';

export interface SchoolInfo {
  name: string;
  motto: string;
  established: string;
  establishedDate: string;
  type: string;
  founder: string;
  principal: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string;
  directions: string;
  googleMapsUrl: string;
  whatsappUrl: string;
  logoUrl: string;
}

export interface SubjectItem {
  id: string;
  name: string;
  code?: string;
  category: 'Core' | 'Sciences' | 'Arts & Humanities' | 'Commercial' | 'General';
  level: 'Both' | 'Junior Secondary' | 'Senior Secondary';
  isConfirmedCore: boolean;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Admissions' | 'Announcement' | 'Co-Curricular';
  summary: string;
  content: string;
  author: string;
  isPlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'School Activities' | 'Classroom Learning' | 'Academic Events' | 'Celebrations' | 'Extra-Curricular';
  caption: string;
  imagePlaceholderText: string;
  imageUrl?: string;
}

export interface AdmissionInquiry {
  id: string;
  parentName: string;
  phone: string;
  email?: string;
  prospectiveClass: 'JSS1' | 'JSS2' | 'JSS3' | 'SSS1' | 'SSS2' | 'SSS3';
  preferredContact: 'Telephone' | 'WhatsApp' | 'Email' | 'In-Person Visit';
  message: string;
  submittedAt: string;
  status: 'Pending' | 'Contacted' | 'Enrolled';
}

export interface ContactMessage {
  id: string;
  name: string;
  contact: string; // phone or email
  subject: string;
  message: string;
  submittedAt: string;
}
