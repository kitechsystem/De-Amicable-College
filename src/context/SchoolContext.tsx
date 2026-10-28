import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PageTab, 
  SchoolInfo, 
  SubjectItem, 
  NewsItem, 
  GalleryItem, 
  AdmissionInquiry, 
  ContactMessage 
} from '../types';
import { 
  INITIAL_SCHOOL_INFO, 
  INITIAL_SUBJECTS, 
  INITIAL_NEWS, 
  INITIAL_GALLERY 
} from '../data/initialData';

interface SchoolContextType {
  schoolInfo: SchoolInfo;
  updateOpeningHours: (hours: string) => void;
  subjects: SubjectItem[];
  addSubject: (item: Omit<SubjectItem, 'id'>) => void;
  deleteSubject: (id: string) => void;
  news: NewsItem[];
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, item: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  admissionInquiries: AdmissionInquiry[];
  addAdmissionInquiry: (inquiry: Omit<AdmissionInquiry, 'id' | 'submittedAt' | 'status'>) => { success: boolean; id: string };
  updateInquiryStatus: (id: string, status: 'Pending' | 'Contacted' | 'Enrolled') => void;
  contactMessages: ContactMessage[];
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'submittedAt'>) => { success: boolean };
  currentPage: PageTab;
  setCurrentPage: (page: PageTab) => void;
  isStaffModalOpen: boolean;
  setIsStaffModalOpen: (open: boolean) => void;
  selectedNewsArticle: NewsItem | null;
  setSelectedNewsArticle: (item: NewsItem | null) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<PageTab>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as PageTab;
      if (['home', 'about', 'academics', 'admissions', 'student-life', 'news', 'gallery', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);
  const [selectedNewsArticle, setSelectedNewsArticle] = useState<NewsItem | null>(null);

  // Synchronize hash with current page
  const setCurrentPage = (page: PageTab) => {
    setCurrentPageState(page);
    if (typeof window !== 'undefined') {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageTab;
      if (['home', 'about', 'academics', 'admissions', 'student-life', 'news', 'gallery', 'contact'].includes(hash)) {
        setCurrentPageState(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // School Info State
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo>(() => {
    try {
      const saved = localStorage.getItem('de_amicable_info');
      return saved ? JSON.parse(saved) : INITIAL_SCHOOL_INFO;
    } catch {
      return INITIAL_SCHOOL_INFO;
    }
  });

  const updateOpeningHours = (hours: string) => {
    const updated = { ...schoolInfo, openingHours: hours };
    setSchoolInfo(updated);
    try {
      localStorage.setItem('de_amicable_info', JSON.stringify(updated));
    } catch {
      // ignore storage error
    }
  };

  // Subjects State
  const [subjects, setSubjects] = useState<SubjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('de_amicable_subjects');
      return saved ? JSON.parse(saved) : INITIAL_SUBJECTS;
    } catch {
      return INITIAL_SUBJECTS;
    }
  });

  const addSubject = (item: Omit<SubjectItem, 'id'>) => {
    const newSubject: SubjectItem = {
      ...item,
      id: `sub-${Date.now()}`
    };
    const updated = [...subjects, newSubject];
    setSubjects(updated);
    try {
      localStorage.setItem('de_amicable_subjects', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const deleteSubject = (id: string) => {
    const updated = subjects.filter(s => s.id !== id);
    setSubjects(updated);
    try {
      localStorage.setItem('de_amicable_subjects', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // News & Events State
  const [news, setNews] = useState<NewsItem[]>(() => {
    try {
      const saved = localStorage.getItem('de_amicable_news');
      return saved ? JSON.parse(saved) : INITIAL_NEWS;
    } catch {
      return INITIAL_NEWS;
    }
  });

  const addNews = (item: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = {
      ...item,
      id: `news-${Date.now()}`
    };
    const updated = [newItem, ...news];
    setNews(updated);
    try {
      localStorage.setItem('de_amicable_news', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const updateNews = (id: string, partial: Partial<NewsItem>) => {
    const updated = news.map(item => item.id === id ? { ...item, ...partial } : item);
    setNews(updated);
    try {
      localStorage.setItem('de_amicable_news', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const deleteNews = (id: string) => {
    const updated = news.filter(item => item.id !== id);
    setNews(updated);
    try {
      localStorage.setItem('de_amicable_news', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Gallery State
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('de_amicable_gallery');
      return saved ? JSON.parse(saved) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newGal: GalleryItem = {
      ...item,
      id: `gal-${Date.now()}`
    };
    const updated = [newGal, ...gallery];
    setGallery(updated);
    try {
      localStorage.setItem('de_amicable_gallery', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const deleteGalleryItem = (id: string) => {
    const updated = gallery.filter(item => item.id !== id);
    setGallery(updated);
    try {
      localStorage.setItem('de_amicable_gallery', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Admission Inquiries
  const [admissionInquiries, setAdmissionInquiries] = useState<AdmissionInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('de_amicable_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const addAdmissionInquiry = (inquiry: Omit<AdmissionInquiry, 'id' | 'submittedAt' | 'status'>) => {
    const id = `DAC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newInquiry: AdmissionInquiry = {
      ...inquiry,
      id,
      submittedAt: new Date().toISOString(),
      status: 'Pending'
    };
    const updated = [newInquiry, ...admissionInquiries];
    setAdmissionInquiries(updated);
    try {
      localStorage.setItem('de_amicable_inquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }
    return { success: true, id };
  };

  const updateInquiryStatus = (id: string, status: 'Pending' | 'Contacted' | 'Enrolled') => {
    const updated = admissionInquiries.map(item => item.id === id ? { ...item, status } : item);
    setAdmissionInquiries(updated);
    try {
      localStorage.setItem('de_amicable_inquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Contact Messages
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('de_amicable_contacts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'submittedAt'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    const updated = [newMsg, ...contactMessages];
    setContactMessages(updated);
    try {
      localStorage.setItem('de_amicable_contacts', JSON.stringify(updated));
    } catch {
      // ignore
    }
    return { success: true };
  };

  return (
    <SchoolContext.Provider
      value={{
        schoolInfo,
        updateOpeningHours,
        subjects,
        addSubject,
        deleteSubject,
        news,
        addNews,
        updateNews,
        deleteNews,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        admissionInquiries,
        addAdmissionInquiry,
        updateInquiryStatus,
        contactMessages,
        addContactMessage,
        currentPage,
        setCurrentPage,
        isStaffModalOpen,
        setIsStaffModalOpen,
        selectedNewsArticle,
        setSelectedNewsArticle
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
