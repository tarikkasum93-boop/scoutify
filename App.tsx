import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue, useMotionValue, useSpring } from 'framer-motion';
import { TRANSLATIONS, ICONS } from './constants';
import { Language, Translation } from './types';

// --- Shared Components ---

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = "", ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden";
  
  const variants = {
    primary: "bg-pastel-dark text-white shadow-lg hover:shadow-xl hover:bg-black ring-4 ring-transparent hover:ring-purple-100",
    glow: "bg-slate-900 text-white shadow-xl hover:shadow-purple-500/20 shadow-purple-900/10 ring-4 ring-purple-500/10 hover:ring-purple-500/20",
    secondary: "bg-white text-pastel-dark border border-purple-100 shadow-sm hover:border-purple-200 hover:shadow-md",
    outline: "border-2 border-pastel-dark text-pastel-dark hover:bg-pastel-dark hover:text-white"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'glow' && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};

// --- Input Component ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, textarea, className = "", ...props }) => {
  const baseClass = "w-full bg-white border border-purple-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-transparent transition-all placeholder:text-gray-300";
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-semibold text-gray-700 ml-1">{label}</label>
      {textarea ? (
        <textarea className={`${baseClass} min-h-[120px] resize-y`} {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input className={baseClass} {...props} />
      )}
    </div>
  );
};

// --- Background Components ---

const ParallaxParticle: React.FC<{ index: number, scrollY: MotionValue<number> }> = ({ index, scrollY }) => {
  // Deterministic random values based on index
  const speed = (index % 4) + 1;
  const direction = index % 2 === 0 ? 1 : -1;
  const size = (index % 4) + 2; // 2px to 6px
  
  // Randomize initial positions
  const left = `${(index * 13) % 100}%`;
  const top = `${(index * 19) % 100}%`;
  
  // Parallax effect on scroll - enhanced movement
  const y = useTransform(scrollY, [0, 800], [0, direction * speed * 60]);
  const opacity = useTransform(scrollY, [0, 600], [0.6, 0]);

  return (
    <motion.div
      style={{ y, left, top, width: size, height: size, opacity }}
      animate={{ 
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{ 
        duration: Math.random() * 3 + 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute rounded-full blur-[1px] ${
        index % 3 === 0 ? 'bg-purple-300' : 
        index % 3 === 1 ? 'bg-blue-300' : 'bg-pink-300'
      }`}
    />
  );
};

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth mouse movement for parallax
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Background gradient movements (Scroll + Mouse)
  const y1Scroll = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2Scroll = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3Scroll = useTransform(scrollY, [0, 1000], [0, 100]);
  
  // Mouse parallax transforms
  const x1Mouse = useTransform(smoothMouseX, [-800, 800], [-30, 30]);
  const y1Mouse = useTransform(smoothMouseY, [-600, 600], [-30, 30]);
  const x2Mouse = useTransform(smoothMouseX, [-800, 800], [30, -30]);
  const y2Mouse = useTransform(smoothMouseY, [-600, 600], [30, -30]);
  
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.2]); // Fade out background on scroll

  const particleIndices = useMemo(() => Array.from({ length: 30 }, (_, i) => i), []);

  return (
    <motion.div style={{ opacity }} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-pastel-cream/50" /> {/* Base tint */}
      
      {/* Moving Gradients */}
      <motion.div 
        style={{ y: y1Scroll, x: x1Mouse, rotate }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply"
      />
      <motion.div 
        style={{ y: y2Scroll, x: x2Mouse, rotate: useTransform(scrollY, [0, 1000], [0, -30]) }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"
      />
      <motion.div 
        style={{ y: y3Scroll, x: x1Mouse }}
        animate={{ scale: [1, 1.15, 1], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[60%] right-[20%] w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[100px] mix-blend-multiply"
      />

      {/* Particles with subtle mouse parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          x: useTransform(smoothMouseX, [-1000, 1000], [-15, 15]),
          y: useTransform(smoothMouseY, [-1000, 1000], [-15, 15])
        }}
      >
        {particleIndices.map((i) => (
          <ParallaxParticle key={i} index={i} scrollY={scrollY} />
        ))}
      </motion.div>
    </motion.div>
  );
};

// --- Page Components ---

const BackButton: React.FC<{ onClick: () => void, text: string }> = ({ onClick, text }) => (
  <button onClick={onClick} className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 group">
    <ICONS.ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
    <span className="font-medium">{text}</span>
  </button>
);

const InquiryPage: React.FC<{ t: Translation, onBack: () => void }> = ({ t, onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <BackButton onClick={onBack} text={t.inquiryForm.back} />
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-purple-900/10 border border-purple-100">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">{t.inquiryForm.title}</h1>
          <p className="text-gray-500">{t.inquiryForm.subtitle}</p>
        </div>
        <form className="space-y-12">
          <section>
            <h3 className="flex items-center gap-3 text-xl font-bold text-purple-600 mb-6 pb-2 border-b border-purple-100"><ICONS.Briefcase className="w-5 h-5" />{t.inquiryForm.sections.jobDetails}</h3>
            <div className="grid gap-6">
              <Input label={t.inquiryForm.fields.positions.label} placeholder={t.inquiryForm.fields.positions.placeholder} type="text" />
              <div className="grid md:grid-cols-2 gap-6">
                 <Input label={t.inquiryForm.fields.locations.label} placeholder={t.inquiryForm.fields.locations.placeholder} type="text" />
                 <Input label={t.inquiryForm.fields.count.label} placeholder={t.inquiryForm.fields.count.placeholder} type="number" />
              </div>
              <Input textarea label={t.inquiryForm.fields.message.label} placeholder={t.inquiryForm.fields.message.placeholder} />
            </div>
          </section>
          <section>
            <h3 className="flex items-center gap-3 text-xl font-bold text-purple-600 mb-6 pb-2 border-b border-purple-100"><ICONS.UserCheck className="w-5 h-5" />{t.inquiryForm.sections.contactDetails}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Input label={t.inquiryForm.fields.name.label} placeholder="" required />
              <Input label={t.inquiryForm.fields.surname.label} placeholder="" required />
              <Input label={t.inquiryForm.fields.phone.label} placeholder="" type="tel" required />
              <Input label={t.inquiryForm.fields.company.label} placeholder="" required />
              <div className="md:col-span-2"><Input label={t.inquiryForm.fields.email.label} placeholder="" type="email" required /></div>
            </div>
          </section>
          <div className="flex justify-end pt-6">
            <Button variant="primary" className="w-full md:w-auto px-12 py-4 text-lg"><ICONS.Send className="w-5 h-5" />{t.inquiryForm.submit}</Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const PrivacyPage: React.FC<{ t: Translation, onBack: () => void }> = ({ t, onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <BackButton onClick={onBack} text={t.privacy.back} />
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-purple-900/10 border border-purple-100">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 tracking-tight">{t.privacy.title}</h1>
        <p className="text-gray-500 mb-12 border-b border-purple-100 pb-8">{t.privacy.lastUpdated}</p>
        <div className="space-y-10">
          {t.privacy.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-purple-900 mb-3">{section.title}</h2>
              <div className="text-gray-600 leading-relaxed font-light whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage: React.FC<{ t: Translation, onBack: () => void }> = ({ t, onBack }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <BackButton onClick={onBack} text={t.contact.back} />
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-purple-900/10 border border-purple-100">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
            <ICONS.Mail className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">{t.contact.title}</h1>
          <p className="text-gray-500">{t.contact.subtitle}</p>
        </div>
        <form className="space-y-6">
           <Input label={t.contact.fields.name.label} placeholder={t.contact.fields.name.placeholder} />
           <Input label={t.contact.fields.email.label} placeholder={t.contact.fields.email.placeholder} type="email" />
           <Input label={t.contact.fields.subject.label} placeholder={t.contact.fields.subject.placeholder} />
           <Input textarea label={t.contact.fields.message.label} placeholder={t.contact.fields.message.placeholder} />
           <div className="pt-4">
            <Button variant="primary" className="w-full justify-center py-4">
              <ICONS.Send className="w-4 h-4" />
              {t.contact.submit}
            </Button>
           </div>
        </form>
      </div>
    </motion.div>
  );
};


// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<'landing' | 'inquiry' | 'privacy' | 'contact'>('landing');
  const [isScrolled, setIsScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: 'landing' | 'inquiry' | 'privacy' | 'contact') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden font-sans text-slate-800 selection:bg-purple-100 selection:text-purple-900">
      
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation - Removed padding to make no space on header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100/50' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center py-0">
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('landing'); }} className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              {/* Logo Bigger */}
              <img 
                src="https://i.ibb.co/4ZZCPTxW/5.png" 
                alt="Scoutify Logo" 
                fetchPriority="high"
                className="h-24 md:h-32 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </a>

          <div className="flex items-center gap-4">
             {/* Navigation Links for Desktop */}
             <div className="hidden lg:flex items-center gap-6 mr-4">
                <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Features</button>
                <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Process</button>
                <button onClick={() => scrollToSection('comparison')} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Why Scoutify</button>
             </div>

            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-sm bg-white/50 border border-transparent hover:border-purple-100 px-4 py-2 rounded-full hover:bg-white transition-all">
                <ICONS.Globe2 className="w-4 h-4" />
                <span className="uppercase tracking-wide">{lang}</span>
              </button>
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl shadow-purple-500/10 border border-purple-100 overflow-hidden hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                {(['en', 'sl', 'hr'] as Language[]).map((l) => (
                  <button 
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${lang === l ? 'font-semibold text-purple-600' : 'text-gray-600'}`}
                  >
                    {l === 'en' ? 'English' : l === 'sl' ? 'Slovenščina' : 'Hrvatski'}
                  </button>
                ))}
              </div>
            </div>
            {currentView === 'landing' && (
              <Button variant="primary" className="!px-5 !py-2.5 !text-sm hidden md:flex" onClick={() => navigateTo('inquiry')}>
                {t.hero.ctaSecondary}
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Switcher */}
      <AnimatePresence mode="wait">
        {currentView === 'inquiry' ? (
          <InquiryPage key="inquiry" t={t} onBack={() => navigateTo('landing')} />
        ) : currentView === 'privacy' ? (
          <PrivacyPage key="privacy" t={t} onBack={() => navigateTo('landing')} />
        ) : currentView === 'contact' ? (
          <ContactPage key="contact" t={t} onBack={() => navigateTo('landing')} />
        ) : (
          <motion.div
             key="landing"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
          >
            {/* Hero Section - Removed mt-16 to reduce header space */}
            <section id="hero" className="relative pt-32 pb-12 lg:pt-32 lg:pb-16 container mx-auto px-6">
              <div className="max-w-5xl mx-auto text-center">
                <FadeIn>
                  <span className="inline-block px-5 py-2 rounded-full bg-white/60 text-purple-700 font-semibold text-xs tracking-widest uppercase mb-8 border border-purple-100 shadow-sm backdrop-blur-sm">
                    {t.hero.badge}
                  </span>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8 text-slate-900 tracking-tight">
                    {t.hero.title}
                  </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                    {t.hero.subtitle}
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="glow" className="w-full sm:w-auto text-lg px-8 py-4" onClick={() => navigateTo('inquiry')}>
                      {t.hero.ctaPrimary}
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4" onClick={() => navigateTo('inquiry')}>
                      {t.hero.ctaSecondary}
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Stats - Modern, Inline, Professional */}
              <div className="mt-16 w-full max-w-6xl mx-auto">
                <FadeIn delay={0.4} className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 shadow-2xl shadow-purple-900/5 py-8 px-8 md:px-16">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                    {[
                      { label: t.hero.stats.companies, value: "1K+" },
                      { label: t.hero.stats.professionals, value: "30K+" },
                      { label: t.hero.stats.matchRate, value: "85%" },
                      { label: t.hero.stats.faster, value: "2x" },
                    ].map((stat, i, arr) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center justify-center w-full md:w-auto text-center group">
                          <div className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-1 group-hover:scale-110 transition-transform duration-300 ease-out origin-center">{stat.value}</div>
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{stat.label}</div>
                        </div>
                        {/* Vertical Divider for desktop */}
                        {i !== arr.length - 1 && (
                          <div className="hidden md:block w-px h-12 bg-gray-200/60" />
                        )}
                        {/* Horizontal Divider for mobile */}
                        {i !== arr.length - 1 && (
                          <div className="block md:hidden w-12 h-px bg-gray-200/60" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white/50 relative border-t border-purple-100/30">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 tracking-tight">
                      {t.whyChoose.title}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                      {t.whyChoose.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            </section>

            {/* Features Grid - Modern Redesign */}
            <section id="features" className="py-16 container mx-auto px-6">
              <FadeIn className="mb-12">
                <h2 className="text-sm font-bold tracking-widest uppercase text-purple-600 mb-2">{t.features.title}</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-200 to-transparent rounded-full"></div>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: ICONS.Target, ...t.features.f1, color: "bg-red-50 text-red-600", border: "hover:border-red-200" },
                  { icon: ICONS.BrainCircuit, ...t.features.f2, color: "bg-blue-50 text-blue-600", border: "hover:border-blue-200" },
                  { icon: ICONS.Users, ...t.features.f3, color: "bg-emerald-50 text-emerald-600", border: "hover:border-emerald-200" },
                  { icon: ICONS.Zap, ...t.features.f4, color: "bg-amber-50 text-amber-600", border: "hover:border-amber-200" },
                ].map((feature, i) => (
                  <FadeIn key={i} delay={i * 0.1} className={`group relative p-10 lg:p-12 rounded-[3rem] bg-white border border-purple-50 shadow-sm hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${feature.border}`}>
                    
                    {/* Giant Watermark Number */}
                    <div className="absolute -bottom-10 -right-4 text-[12rem] font-black text-slate-50 opacity-80 leading-none select-none z-0 pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out">
                      0{i + 1}
                    </div>

                    <div className="relative z-10">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 ${feature.color} shadow-lg transition-transform duration-500 group-hover:rotate-6`}>
                        <feature.icon className="w-10 h-10" strokeWidth={1.8} />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-slate-900 group-hover:text-purple-900 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg font-light relative z-10">
                        {feature.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-16 bg-slate-50 relative overflow-hidden">
              <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">{t.process.title}</h2>
                    <p className="text-xl text-gray-600 font-light">{t.process.subtitle}</p>
                  </FadeIn>
                </div>

                <div className="relative">
                  {/* Connecting Line (Desktop) - Adjusted to top-5 to align with center of 40px circle */}
                  <div className="hidden md:block absolute top-5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
                  
                  <div className="grid md:grid-cols-4 gap-8">
                    {t.process.steps.map((step, i) => (
                      <FadeIn key={i} delay={i * 0.15} className="relative bg-white p-8 rounded-3xl shadow-sm border border-purple-100/50 md:bg-transparent md:shadow-none md:border-none md:p-0">
                        <div className="w-10 h-10 bg-pastel-dark text-white rounded-full flex items-center justify-center font-bold text-sm mb-8 relative z-10 mx-auto md:mx-0 shadow-lg ring-8 ring-white md:ring-slate-50 transition-transform group-hover:scale-110">
                          {i + 1}
                        </div>
                        <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">{step.desc}</p>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* NEW SECTION: Comparison / Why Scoutify Details */}
            <section id="comparison" className="py-16 container mx-auto px-6 relative">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-purple-50/50 skew-y-3 -z-10" />
              
              <FadeIn className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">{t.comparison.title}</h2>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                {/* Scoutify Card */}
                <FadeIn className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-purple-900/10 border-2 border-purple-100 relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="flex items-center gap-4 mb-10">
                    <img 
                      src="https://i.ibb.co/4ZZCPTxW/5.png" 
                      alt="Scoutify Logo" 
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-auto" 
                    />
                    <h3 className="text-2xl font-bold tracking-tight">Scoutify</h3>
                  </div>

                  <ul className="space-y-6">
                    {t.comparison.scoutify.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <ICONS.CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={3} />
                        </div>
                        <span className="text-slate-800 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>

                {/* Others Card */}
                <FadeIn delay={0.2} className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 text-slate-500 relative overflow-hidden">
                  <h3 className="text-2xl font-semibold mb-10 tracking-tight text-slate-400">{t.comparison.others.label}</h3>
                  <ul className="space-y-6">
                    {t.comparison.others.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 opacity-70">
                        <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                          <ICONS.XCircle className="w-4 h-4 text-red-500" strokeWidth={3} />
                        </div>
                        <span className="">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>

              {/* Stats & CTA Block */}
              <div className="max-w-5xl mx-auto mt-16">
                <FadeIn delay={0.3} className="bg-pastel-dark text-white rounded-2xl py-4 px-8 text-center font-bold tracking-widest uppercase text-sm mb-12 shadow-lg w-fit mx-auto">
                  {t.comparison.stats}
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* CTA Left */}
                  <FadeIn delay={0.4} className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">{t.comparison.cta.title}</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="primary" className="justify-center w-full" onClick={() => navigateTo('inquiry')}>
                        <ICONS.Mail className="w-4 h-4" />
                        {t.comparison.cta.btnPrimary}
                      </Button>
                    </div>
                  </FadeIn>

                  {/* Quote Right */}
                  <FadeIn delay={0.5} className="flex gap-6 items-start">
                    <div className="shrink-0 w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
                      <ICONS.Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-slate-800 italic mb-4">
                        "{t.comparison.quote.text}"
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {t.comparison.quote.subtext}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            {/* Philosophy / About */}
            <section className="py-16 container mx-auto px-6">
              <div className="bg-pastel-dark text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-purple-900/20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <ICONS.Layout className="w-12 h-12 text-purple-300 mb-8" strokeWidth={1.5} />
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8 tracking-tight">
                      {t.about.text1}
                    </h2>
                    <p className="text-lg text-gray-300 border-l-2 border-purple-500/50 pl-6 font-light">
                      {t.about.text2}
                    </p>
                  </div>
                  
                  {/* Modular Features Bento */}
                  <div className="grid grid-cols-2 gap-4">
                      {t.modular.items.map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                          {i === 0 && <ICONS.FileText className="w-6 h-6 mb-4 text-purple-300" />}
                          {i === 1 && <ICONS.Search className="w-6 h-6 mb-4 text-blue-300" />}
                          {i === 2 && <ICONS.MessageSquare className="w-6 h-6 mb-4 text-green-300" />}
                          {i === 3 && <ICONS.BarChart3 className="w-6 h-6 mb-4 text-orange-300" />}
                          <h4 className="font-bold mb-2">{item.title}</h4>
                          <p className="text-xs text-gray-400 font-light">{item.desc}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Why XYZ Grid */}
            <section id="benefits" className="py-16 container mx-auto px-6">
              <FadeIn className="text-center mb-12">
                <h2 className="text-4xl font-semibold mb-4 tracking-tight">{t.whyXyz.title}</h2>
              </FadeIn>

              <div className="flex flex-wrap justify-center gap-4">
                {t.whyXyz.items.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.05} className="">
                    <div className="group px-8 py-6 bg-white rounded-2xl shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all cursor-default">
                      <div className="font-bold text-lg mb-1 group-hover:text-purple-600 transition-colors">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>

            {/* Origin & Benefits */}
            <section className="py-16 bg-gradient-to-b from-purple-50/50 to-white">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-4 block">{t.origin.subtitle}</span>
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-slate-900 tracking-tight">
                    {t.origin.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t.benefits.items.map((benefit, i) => (
                    <FadeIn key={i} delay={i * 0.1} className="bg-white p-10 rounded-[2rem] border border-purple-100 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group">
                      {i === 0 && <ICONS.Globe2 className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />}
                      {i === 1 && <ICONS.Search className="w-10 h-10 text-purple-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />}
                      {i === 2 && <ICONS.ShieldCheck className="w-10 h-10 text-green-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />}
                      {i === 3 && <ICONS.Clock className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />}
                      {i === 4 && <ICONS.TrendingUp className="w-10 h-10 text-red-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />}
                      {i === 5 && <ICONS.Layout className="w-10 h-10 text-teal-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />}
                      
                      <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 container mx-auto px-6 mb-8">
              <div className="bg-purple-100/80 backdrop-blur-sm rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-purple-200">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-tr from-white/60 to-transparent rounded-full blur-[80px]" 
                />
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-semibold mb-8 text-purple-950 tracking-tight">{t.ctaFooter.title}</h2>
                  <p className="text-xl text-purple-900/70 mb-10 font-light">{t.ctaFooter.subtitle}</p>
                  <Button variant="primary" className="mx-auto text-lg px-12 py-5 shadow-xl shadow-purple-900/10" onClick={() => navigateTo('inquiry')}>
                    {t.ctaFooter.button}
                  </Button>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-purple-100/50 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all">
            <img 
              src="https://i.ibb.co/4ZZCPTxW/5.png" 
              alt="Logo" 
              loading="lazy"
              decoding="async"
              className="h-16 w-auto" 
            />
            <span className="font-bold text-xl tracking-tight">Scoutify</span>
          </div>
          <div className="text-sm text-gray-400">
            {t.footer.rights}
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <button onClick={() => navigateTo('privacy')} className="hover:text-purple-600 transition-colors">{t.footer.privacy}</button>
            <button onClick={() => navigateTo('contact')} className="hover:text-purple-600 transition-colors">{t.footer.contact}</button>
          </div>
        </div>
      </footer>
    </div>
  );
}