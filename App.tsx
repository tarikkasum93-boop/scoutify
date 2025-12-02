import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue, useMotionValue, useSpring, HTMLMotionProps, useInView, animate } from 'framer-motion';
import { TRANSLATIONS, ICONS, COMPANY_LOGOS } from './constants';
import { Language, Translation } from './types';
import { Menu, X } from 'lucide-react';

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

const CountUp: React.FC<{ to: number; suffix?: string; decimals?: number; className?: string }> = ({ to, suffix = "", decimals = 0, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps & HTMLMotionProps<"button">> = ({ variant = 'primary', children, className = "", ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn";
  
  const variants = {
    primary: "bg-pastel-dark text-white shadow-lg hover:bg-black ring-4 ring-transparent hover:ring-purple-100",
    glow: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-500/25 border border-transparent",
    secondary: "bg-white text-slate-700 border-2 border-purple-50 hover:border-purple-200 shadow-sm hover:text-purple-700",
    outline: "border-2 border-pastel-dark text-pastel-dark hover:bg-pastel-dark hover:text-white"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props as any}
    >
      {/* Shimmer effect for glow variant */}
      {variant === 'glow' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

// --- Logo Ticker Component ---

const LogoTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-4 md:py-6 relative z-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-pastel-cream to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-pastel-cream to-transparent z-20 pointer-events-none" />
      
      <div className="flex">
        <motion.div 
          className="flex gap-8 md:gap-12 pr-8 md:pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, i) => (
            <div 
              key={i} 
              className="w-[180px] h-[100px] md:w-[240px] md:h-[130px] flex items-center justify-center flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={logo} 
                alt="Company logo" 
                className="max-w-full max-h-full object-contain mix-blend-multiply" 
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// --- Background Components ---

interface ParallaxParticleProps {
  scrollY: MotionValue<number>;
  depth: number;
  x: string;
  y: string;
  size: string;
  color: string;
}

const ParallaxParticle: React.FC<ParallaxParticleProps> = ({ scrollY, depth, x, y, size, color }) => {
  const yPos = useTransform(scrollY, [0, 5000], [0, 5000 * depth * 0.2]);
  
  return (
    <motion.div
      style={{ top: y, left: x, width: size, height: size, y: yPos }}
      className={`absolute rounded-full ${color} opacity-40`}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const moveX = useTransform(springX, [0, window.innerWidth], [-20, 20]);
  const moveY = useTransform(springY, [0, window.innerHeight], [-20, 20]);
  const moveXReverse = useTransform(springX, [0, window.innerWidth], [20, -20]);

  // Only fade out deeply as we scroll very far
  const opacity = useTransform(scrollY, [0, 800], [1, 0.6]); 

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-pastel-cream"
    >
      {/* Floating Gradients with Parallax */}
      <motion.div 
        style={{ x: moveXReverse, y: moveY }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ x: moveX, y: moveY }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -10, 10, 0], 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[0%] w-[40%] h-[60%] bg-blue-100/40 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0], 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] bg-pink-100/30 rounded-full blur-[100px]" 
      />

      {/* Parallax Particles */}
      <ParallaxParticle scrollY={scrollY} depth={0.2} x="10%" y="20%" size="8px" color="bg-purple-300" />
      <ParallaxParticle scrollY={scrollY} depth={0.5} x="85%" y="15%" size="12px" color="bg-blue-300" />
      <ParallaxParticle scrollY={scrollY} depth={0.1} x="50%" y="50%" size="6px" color="bg-pink-300" />
      <ParallaxParticle scrollY={scrollY} depth={0.8} x="20%" y="80%" size="10px" color="bg-yellow-200" />
      <ParallaxParticle scrollY={scrollY} depth={0.3} x="80%" y="70%" size="14px" color="bg-green-100" />
      
      {/* Extra Twinkling Particles */}
      <ParallaxParticle scrollY={scrollY} depth={0.6} x="15%" y="40%" size="5px" color="bg-indigo-200" />
      <ParallaxParticle scrollY={scrollY} depth={0.4} x="70%" y="30%" size="9px" color="bg-orange-100" />
    </motion.div>
  );
};

// --- Page Components ---

const PrivacyPage: React.FC<{ content: Translation['privacy'], onBack: () => void }> = ({ content, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-40 px-6 pb-20 max-w-4xl mx-auto">
      <motion.button 
        onClick={onBack}
        whileHover={{ x: -4 }}
        className="flex items-center gap-2 text-purple-600 mb-8 font-medium hover:underline"
      >
        <ICONS.ArrowLeft size={20} />
        {content.back}
      </motion.button>
      
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4 font-sans">{content.title}</h1>
        <p className="text-gray-500 mb-12">{content.lastUpdated}</p>
        
        <div className="space-y-12">
          {content.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

const ContactPage: React.FC<{ content: Translation['contact'], onBack: () => void }> = ({ content, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-40 px-6 pb-20 max-w-2xl mx-auto relative z-10">
      <motion.button 
        onClick={onBack}
        whileHover={{ x: -4 }}
        className="flex items-center gap-2 text-purple-600 mb-8 font-medium hover:underline"
      >
        <ICONS.ArrowLeft size={20} />
        {content.back}
      </motion.button>

      <FadeIn>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans">{content.title}</h1>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6 relative z-10" 
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.name.label}</label>
                  <input required type="text" placeholder={content.fields.name.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.email.label}</label>
                  <input required type="email" placeholder={content.fields.email.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.subject.label}</label>
                  <input required type="text" placeholder={content.fields.subject.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.message.label}</label>
                  <textarea required rows={4} placeholder={content.fields.message.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none" />
                </div>
                
                <Button 
                  type="submit" 
                  variant="glow" 
                  className="w-full justify-center text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <ICONS.Loader2 className="animate-spin" />
                      {content.sending}
                    </>
                  ) : (
                    <>
                      <ICONS.Send size={20} />
                      {content.submit}
                    </>
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <ICONS.CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{content.success.title}</h3>
                <p className="text-gray-600">{content.success.message}</p>
                <motion.button
                  onClick={onBack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 text-purple-600 font-semibold hover:text-purple-700"
                >
                  {content.back}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeIn>
    </div>
  );
};

const InquiryPage: React.FC<{ content: Translation['inquiryForm'], onBack: () => void }> = ({ content, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-40 px-6 pb-20 max-w-3xl mx-auto relative z-10">
      <motion.button 
        onClick={onBack}
        whileHover={{ x: -4 }}
        className="flex items-center gap-2 text-purple-600 mb-8 font-medium hover:underline"
      >
        <ICONS.ArrowLeft size={20} />
        {content.back}
      </motion.button>

      <FadeIn>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sans">{content.title}</h1>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
          <form className="space-y-10">
            {/* Section 1: Job Details */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <ICONS.Briefcase size={18} />
                </div>
                {content.sections.jobDetails}
              </h3>
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.positions.label}</label>
                  <input type="text" placeholder={content.fields.positions.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.locations.label}</label>
                    <input type="text" placeholder={content.fields.locations.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.count.label}</label>
                    <input type="number" placeholder={content.fields.count.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.message.label}</label>
                  <textarea rows={3} placeholder={content.fields.message.placeholder} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none" />
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Section 2: Contact Details */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <ICONS.Users size={18} />
                </div>
                {content.sections.contactDetails}
              </h3>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.name.label}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.surname.label}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.phone.label}</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.company.label}</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{content.fields.email.label}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all" />
                </div>
              </div>
            </div>

            <Button type="submit" variant="glow" className="w-full justify-center text-lg mt-8">
              {content.submit}
            </Button>
          </form>
        </div>
      </FadeIn>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('hr');
  const t = TRANSLATIONS[lang];
  const [currentView, setCurrentView] = useState<'landing' | 'inquiry' | 'privacy' | 'contact'>('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Handle smooth scrolling or view switching
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    if (currentView !== 'landing') {
      setCurrentView('landing');
      // Give React a tick to render the landing view before scrolling
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

  const navLinks = [
    // Removed "AI Advantage" (Features) as requested
    { label: t.process.title, action: () => scrollToSection('process') },
    { label: t.comparison.title, action: () => scrollToSection('comparison') },
    { label: t.benefits.title, action: () => scrollToSection('benefits') }
  ];

  if (currentView === 'privacy') {
    return (
      <div className="relative overflow-hidden font-sans">
        <AnimatedBackground />
        <PrivacyPage content={t.privacy} onBack={() => setCurrentView('landing')} />
      </div>
    );
  }

  if (currentView === 'contact') {
    return (
      <div className="relative overflow-hidden font-sans">
        <AnimatedBackground />
        <ContactPage content={t.contact} onBack={() => setCurrentView('landing')} />
      </div>
    );
  }

  if (currentView === 'inquiry') {
    return (
      <div className="relative overflow-hidden font-sans">
        <AnimatedBackground />
        <InquiryPage content={t.inquiryForm} onBack={() => setCurrentView('landing')} />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden font-sans">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between md:justify-center md:gap-12 py-0 leading-none"> {/* Centered layout for Desktop, Between for Mobile */}
            {/* Dynamic Logo */}
            <motion.div 
              className="flex-shrink-0 cursor-pointer" 
              onClick={() => scrollToSection('hero')}
              layout
            >
              <motion.img 
                src="https://i.ibb.co/4ZZCPTxW/5.png" 
                alt="Scoutify Logo" 
                className="object-contain transition-all duration-500 origin-center"
                initial={false}
                animate={{
                  // Mobile Sizes: Unscrolled 10rem (160px), Scrolled 4rem (64px)
                  // Desktop sizes handled via CSS style tag override below for reliability
                  height: isScrolled ? '4rem' : '10rem'
                }}
                fetchPriority="high"
              />
              {/* CSS Height override for desktop to prevent conflict with motion inline styles on resize */}
              <style>{`
                @media (min-width: 768px) {
                  nav img {
                    height: ${isScrolled ? '5rem !important' : '15rem !important'};
                  }
                }
              `}</style>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.button 
                  key={idx} 
                  onClick={link.action} 
                  className="text-gray-600 hover:text-purple-600 font-medium text-sm tracking-wide"
                  whileHover={{ scale: 1.05, color: "#6B46C1" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex gap-2">
                {(['en', 'sl', 'hr', 'de'] as Language[]).map((l) => (
                  <motion.button
                    key={l}
                    onClick={() => setLang(l)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`uppercase text-xs font-bold px-2 py-1 rounded ${lang === l ? 'bg-pastel-dark text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {l}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
               <div className="flex gap-1">
                {(['en', 'sl', 'hr', 'de'] as Language[]).map((l) => (
                  <motion.button
                    key={l}
                    onClick={() => setLang(l)}
                    whileHover={{ scale: 1.1 }}
                    className={`uppercase text-[10px] font-bold px-1.5 py-1 rounded ${lang === l ? 'bg-pastel-dark text-white' : 'text-gray-400'}`}
                  >
                    {l}
                  </motion.button>
                ))}
              </div>
              <motion.button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 overflow-y-auto max-h-screen"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.button 
                    key={idx} 
                    onClick={link.action} 
                    className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-50 last:border-0"
                    whileHover={{ x: 10, color: "#6B46C1" }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 md:pt-48 pb-8 md:pb-10 max-w-7xl mx-auto px-6 text-center z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 border border-purple-200 text-purple-700 text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-pastel-dark to-gray-600 drop-shadow-sm">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button onClick={() => setCurrentView('inquiry')} variant="glow" className="w-full sm:w-auto text-lg px-8 py-4 shadow-purple-500/30">
              {t.hero.ctaPrimary}
              <ICONS.Zap size={20} className="fill-current" />
            </Button>
            <Button onClick={() => setCurrentView('inquiry')} variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
              {t.hero.ctaSecondary}
              <ICONS.Clock size={20} />
            </Button>
          </div>

          <div className="border-t border-b border-purple-100/50 bg-white/30 backdrop-blur-sm py-8 mb-12">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <CountUp to={180} suffix="+" className="text-3xl font-bold text-gray-900 tracking-tight" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">{t.hero.stats.companies}</span>
              </div>
              <div className="w-px h-10 bg-purple-200/50 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <CountUp to={6} suffix="K+" className="text-3xl font-bold text-gray-900 tracking-tight" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">{t.hero.stats.hired}</span>
              </div>
              <div className="w-px h-10 bg-purple-200/50 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <CountUp to={86} suffix="%" className="text-3xl font-bold text-gray-900 tracking-tight" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">{t.hero.stats.matchRate}</span>
              </div>
              <div className="w-px h-10 bg-purple-200/50 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <CountUp to={2.5} suffix="x" decimals={1} className="text-3xl font-bold text-gray-900 tracking-tight" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">{t.hero.stats.faster}</span>
              </div>
            </div>
          </div>
        </FadeIn>
        
        {/* Logo Ticker underneath stats */}
        <LogoTicker />
      </section>

      {/* Why Choose Section */}
      <section className="py-8 max-w-5xl mx-auto px-6 text-center">
        <FadeIn delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.whyChoose.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{t.whyChoose.description}</p>
        </FadeIn>
      </section>

      {/* Features Grid (AI Advantage) - Kept on page but removed from menu */}
      <section id="features" className="py-8 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-24 relative pt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block relative"
            >
              {/* Decorative abstract shape behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-gradient-to-r from-purple-100/80 via-indigo-50/80 to-purple-100/80 rounded-[4rem] blur-3xl -z-10" />
              
              {/* Dual-layer text for depth */}
              <div className="relative z-10">
                <span className="absolute top-1 left-1 md:top-2 md:left-2 text-gray-900/5 select-none -z-10 text-6xl md:text-9xl font-black blur-[1px]">
                  {t.features.title}
                </span>
                
                <motion.h2 
                  className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 pb-4 relative z-10 drop-shadow-sm tracking-tight"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  {t.features.title}
                </motion.h2>
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-8 text-yellow-400 drop-shadow-lg"
              >
                <ICONS.Zap size={64} fill="currentColor" />
              </motion.div>
              
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 w-6 h-6 rounded-full bg-purple-400 blur-sm"
              />
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[t.features.f1, t.features.f2, t.features.f3, t.features.f4].map((feature, i) => (
              <motion.div 
                key={i} 
                className="group relative p-8 md:p-12 rounded-[2rem] bg-white/40 border border-white/60 backdrop-blur-md hover:bg-white/60 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
                whileHover={{ y: -8 }}
              >
                {/* Large Watermark Number */}
                <span className="absolute -bottom-8 -right-4 text-9xl font-black text-purple-900/5 z-0 group-hover:text-purple-900/10 transition-colors duration-500 select-none">
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center text-purple-600 mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    {i === 0 && <ICONS.Target size={40} strokeWidth={1.5} />}
                    {i === 1 && <ICONS.BrainCircuit size={40} strokeWidth={1.5} />}
                    {i === 2 && <ICONS.Users size={40} strokeWidth={1.5} />}
                    {i === 3 && <ICONS.Zap size={40} strokeWidth={1.5} />}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Process Section */}
      <section id="process" className="py-8 bg-white/30 backdrop-blur-sm relative border-y border-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.process.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.process.subtitle}</p>
          </FadeIn>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 md:left-1/2 top-5 bottom-0 w-1 md:w-full md:h-1 bg-purple-100 md:-translate-x-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {t.process.steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  className="relative flex md:flex-col items-start md:items-center gap-6 md:text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-pastel-dark text-white flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-white shrink-0 group-hover:bg-purple-600 transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Comparison Section (Why Scoutify vs Others) */}
       <section id="comparison" className="py-8 max-w-7xl mx-auto px-6">
         <FadeIn>
           <h2 className="text-4xl font-bold text-center mb-16">{t.comparison.title}</h2>
           
           <div className="grid md:grid-cols-2 gap-8 items-stretch mb-20">
             {/* Scoutify Card */}
             <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-purple-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-50 rounded-2xl">
                    <img src="https://i.ibb.co/4ZZCPTxW/5.png" alt="Logo" className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.comparison.scoutify.label}</h3>
                </div>
                <ul className="space-y-6">
                  {t.comparison.scoutify.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-4"
                      whileHover={{ x: 4 }}
                    >
                      <ICONS.CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-lg font-medium text-gray-800">{item}</span>
                    </motion.li>
                  ))}
                </ul>
             </div>

             {/* Others Card */}
             <div className="bg-gray-50/80 rounded-[2.5rem] p-8 md:p-12 border border-gray-200/50 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center">
                    <ICONS.Users className="text-gray-400 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-500">{t.comparison.others.label}</h3>
                </div>
                <ul className="space-y-6">
                  {t.comparison.others.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-4 opacity-75"
                      whileHover={{ x: 4 }}
                    >
                      <ICONS.XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-lg font-medium text-gray-500">{item}</span>
                    </motion.li>
                  ))}
                </ul>
             </div>
           </div>

           {/* Stats Banner */}
           <div className="bg-pastel-dark text-white rounded-2xl p-6 text-center mb-12 shadow-xl mx-auto max-w-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-xl md:text-2xl font-bold flex items-center justify-center gap-3">
                <ICONS.Globe2 className="text-purple-300" />
                {t.comparison.stats}
              </p>
           </div>

           {/* Bottom Grid: CTA & Quote */}
           <div className="grid md:grid-cols-5 gap-8">
              {/* CTA Box */}
              <div className="md:col-span-2 bg-purple-600 rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg shadow-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 leading-tight">{t.comparison.cta.title}</h3>
                <div className="flex flex-col gap-4">
                  <Button onClick={() => setCurrentView('inquiry')} variant="secondary" className="w-full justify-center">
                    <ICONS.Mail className="w-5 h-5" />
                    {t.comparison.cta.btnPrimary}
                  </Button>
                </div>
              </div>

              {/* Quote Box */}
              <div className="md:col-span-3 bg-white/60 backdrop-blur-md border border-purple-100 rounded-3xl p-8 flex flex-col justify-center relative">
                <ICONS.MessageSquare className="absolute top-8 right-8 text-purple-100 w-16 h-16 -rotate-12" />
                <p className="text-xl font-medium text-gray-800 mb-6 relative z-10">"{t.comparison.quote.text}"</p>
                <div className="flex items-center gap-4 text-purple-700 font-semibold text-sm border-t border-purple-100 pt-6">
                   <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                     <ICONS.UserCheck size={20} />
                   </div>
                   {t.comparison.quote.subtext}
                </div>
              </div>
           </div>

         </FadeIn>
       </section>

      {/* Philosophy / About */}
      <section className="py-8 bg-pastel-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">{t.about.text1}</p>
            <p className="text-lg text-gray-400">{t.about.text2}</p>
          </FadeIn>
        </div>
      </section>

      {/* Modular Features */}
      <section className="py-8 max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-center">{t.modular.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.modular.items.map((item, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              >
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                  {i === 0 && <ICONS.FileText size={24} />}
                  {i === 1 && <ICONS.Search size={24} />}
                  {i === 2 && <ICONS.MessageSquare size={24} />}
                  {i === 3 && <ICONS.BarChart3 size={24} />}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Why Xyz Grid */}
      <section className="py-8 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">{t.whyXyz.title}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {t.whyXyz.items.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`p-6 rounded-2xl border ${i === 0 ? 'bg-purple-600 text-white border-purple-600' : 'bg-white border-gray-100'} hover:shadow-md transition-shadow`}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className={`text-sm ${i === 0 ? 'text-purple-100' : 'text-gray-500'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-8 text-center px-6">
        <FadeIn>
          <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm mb-4 block">{t.origin.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">{t.origin.title}</h2>
        </FadeIn>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-8 max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-center">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {t.benefits.items.map((item, i) => (
               <motion.div 
                 key={i} 
                 className="flex gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors"
                 whileHover={{ x: 5 }}
               >
                 <div className="mt-1 text-purple-600">
                    {i === 0 && <ICONS.Globe2 />}
                    {i === 1 && <ICONS.Search />}
                    {i === 2 && <ICONS.ShieldCheck />}
                    {i === 3 && <ICONS.Layout />}
                    {i === 4 && <ICONS.TrendingUp />}
                    {i === 5 && <ICONS.Zap />}
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA Footer */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-pastel-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.ctaFooter.title}</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">{t.ctaFooter.subtitle}</p>
            <Button onClick={() => setCurrentView('inquiry')} variant="glow" className="mx-auto text-lg px-10 py-5">
              {t.ctaFooter.button}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <img src="https://i.ibb.co/4ZZCPTxW/5.png" alt="Logo" className="h-20 w-auto" loading="lazy" decoding="async" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
             <span>{t.footer.rights}</span>
             <motion.button 
               onClick={() => { setCurrentView('privacy'); window.scrollTo(0,0); }} 
               className="hover:text-purple-600 transition-colors"
               whileHover={{ y: -2 }}
             >
               {t.footer.privacy}
             </motion.button>
             <motion.button 
               onClick={() => { setCurrentView('contact'); window.scrollTo(0,0); }} 
               className="hover:text-purple-600 transition-colors"
               whileHover={{ y: -2 }}
             >
               {t.footer.contact}
             </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;