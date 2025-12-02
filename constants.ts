import { Translation } from './types';
import { 
  Target, 
  BrainCircuit, 
  Users, 
  Zap, 
  FileText, 
  Search, 
  MessageSquare, 
  BarChart3, 
  Globe2, 
  ShieldCheck, 
  Layout, 
  UserCheck, 
  Clock, 
  TrendingUp,
  CheckCircle2,
  XCircle,
  Phone,
  Mail,
  Briefcase,
  ArrowLeft,
  Send,
  Lock,
  FileCheck,
  Loader2
} from 'lucide-react';

export const ICONS = {
  Target, BrainCircuit, Users, Zap, FileText, Search, MessageSquare, BarChart3, Globe2, ShieldCheck, Layout, UserCheck, Clock, TrendingUp, CheckCircle2, XCircle, Phone, Mail, Briefcase, ArrowLeft, Send, Lock, FileCheck, Loader2
};

export const COMPANY_LOGOS = [
  "https://www.span.eu/media/tlghawiq/square-sava-1.png",
  "https://logodix.com/logo/871029.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/KRKA_Logo.svg/2560px-KRKA_Logo.svg.png",
  "https://getlogo.net/wp-content/uploads/2021/08/mercator-group-logo-vector.png",
  "https://static.vecteezy.com/system/resources/previews/020/190/509/non_2x/mcdonalds-logo-mcdonald-icon-free-free-vector.jpg",
  "https://presse.oebb.at/.resources/corp-2016/themes/images/logo-oebb-og.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Voestalpine.svg/2560px-Voestalpine.svg.png",
  "https://logos-world.net/wp-content/uploads/2022/04/Rewe-Symbol.png",
  "https://cdn.imgbin.com/18/18/12/imgbin-ina-d-d-rijeka-sisak-logo-brand-others-yXNdtNAyauegaF2tQbxGEyaeB.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spar-logo.svg/2560px-Spar-logo.svg.png"
];

export const TRANSLATIONS: Record<string, Translation> = {
  en: {
    hero: {
      badge: "FIND THE BEST CANDIDATES WITHIN HOURS",
      title: "Svi izvori talenata. Jedna platforma.",
      subtitle: "We search every corner of the internet – from job boards to hidden channels – to find experts who perfectly match your needs. Faster, smarter, and more comprehensive.",
      ctaPrimary: "FIND NOW",
      ctaSecondary: "Book a 15-min call",
      stats: {
        companies: "Companies",
        hired: "Hired",
        matchRate: "Match Rate",
        faster: "Faster",
      }
    },
    whyChoose: {
      title: "Why Choose Us for Your Talent Acquisition?",
      description: "We’re not just a platform; we're an end-to-end AI powerhouse that acts as your precision-targeting marketing engine, top-tier sourcing firm, and full-stack vetting specialist—all in one."
    },
    features: {
      title: "AI Advantage",
      f1: { title: "Precision Ad Campaigns", desc: "We create and deploy hyper-targeted campaigns that reach the exact professionals you need. Our AI scans the entire digital landscape." },
      f2: { title: "Intelligent Vetting Quizzes", desc: "Our AI instantly generates dynamic assessments tailored specifically to your job post. These are high-stakes quizzes designed to measure success." },
      f3: { title: "Pre-Qualified Talent Pool", desc: "Stop wasting time reviewing hundreds of irrelevant applications. Our system pre-screens every professional through our assessments." },
      f4: { title: "Accelerated Time-to-Hire", desc: "Slash your time-to-hire by weeks. Our streamlined, AI-driven process ensures you meet and interview top candidates faster." }
    },
    process: {
      title: "The Process",
      subtitle: "Smarter Talent Acquisition. We transform a months-long search into a seamless, rapid process.",
      steps: [
        { title: "Submit Your Job Blueprint", desc: "Share your requirements with us. Include the role details, must-have skills, preferred experience, and culture." },
        { title: "AI Launches Targeted Campaigns", desc: "Our platform analyzes your blueprint and instantly creates optimized, high-converting campaigns across digital channels." },
        { title: "Custom Assessment Generation", desc: "The AI automatically builds and deploys a validated quiz and questionnaire designed to measure technical proficiency." },
        { title: "Receive Vetted Talent", desc: "Only professionals who pass the rigorous assessment make it through. You receive a curated list of candidates." }
      ]
    },
    comparison: {
      title: "Why Scoutify?",
      scoutify: {
        label: "Scoutify",
        items: [
          "Fast candidate application (< 1 min)",
          "5-10x more quality applications",
          "Automatic candidate scoring system",
          "Scoutify 'turnkey' approach",
          "24/7 Support"
        ]
      },
      others: {
        label: "Other Job Boards",
        items: [
          "Long process resulting in candidate loss",
          "Unsatisfactory number and quality of applications",
          "List of candidates without pre-qualification",
          "Non-existent help in further process",
          "Limited support"
        ]
      },
      stats: "180+ employers in 8 countries",
      cta: {
        title: "Start hiring - send inquiry or call us immediately",
        btnPrimary: "Send inquiry"
      },
      quote: {
        text: "A job board that candidates want to use is a job board that employers are satisfied with. Scoutify connects the interests of the employer and the candidate. No compromises.",
        subtext: "Proven approach that brings satisfaction to employer and candidate with speed and efficiency."
      }
    },
    about: {
      text1: "Scoutify is a hiring platform built to make the experience better for everyone - helping hiring teams work faster and fairly, and giving candidates a smoother journey.",
      text2: "Scoutify connects the interests of the employer and the candidate. No compromises. Proven approach that brings satisfaction to employer and candidate with speed and efficiency."
    },
    modular: {
      title: "Modular Features",
      items: [
        { title: "Detailed Job Descriptions", desc: "Create clear, compelling roles in seconds." },
        { title: "CV Screening", desc: "Instantly surface the best-fit candidates." },
        { title: "Interview Questions", desc: "Generate tailored, role-specific questions fast." },
        { title: "Interview Analysis", desc: "Capture insights and performance automatically." }
      ]
    },
    whyXyz: {
      title: "Why Scoutify?",
      items: [
        { title: "Agility", desc: "We move fast and adapt faster." },
        { title: "EU-Based", desc: "Built for EU - USA hiring." },
        { title: "Innovative", desc: "Always building forward." },
        { title: "Secure", desc: "Built on Azure, secure by design." },
        { title: "Bias Reduction", desc: "Redacts PII data before scoring." },
        { title: "Flexible", desc: "No lock-in, leave anytime." },
        { title: "Intuitive", desc: "Clean, simple, and easy." }
      ]
    },
    origin: {
      subtitle: "From Challenge to Solution",
      title: "Internal tool turned industry solution. Built with input from industry leaders. Continuously evolving with AI advancements."
    },
    benefits: {
      title: "Key Benefits",
      items: [
        { title: "Reach More Talent", desc: "AI-Optimised job profiles reach more qualified candidates from diverse backgrounds." },
        { title: "Discover Hidden Gems", desc: "Uncover promising candidates that traditional screening would miss with our sophisticated matching." },
        { title: "Fairer Experience", desc: "Reduce unconscious bias with standardised evaluation criteria and objective scoring." },
        { title: "Less Admin", desc: "Reduce candidate screening by 90% and improve the candidate and hiring manager experience." },
        { title: "More Impact", desc: "Focus on strategic recruitment decisions with data-driven insights and recommendations." },
        { title: "Platform Solution", desc: "No integration, intuitive design, time to value in minutes." }
      ]
    },
    ctaFooter: {
      title: "Be Part of the Future of Hiring",
      subtitle: "Join forward-thinking companies that are revolutionizing their recruitment process with AI-powered insights and automation.",
      button: "Get Started Now"
    },
    inquiryForm: {
      title: "Let's find your talent",
      subtitle: "Fill out the details below and our team will get back to you shortly.",
      sections: {
        jobDetails: "Job Details",
        contactDetails: "Contact Details"
      },
      fields: {
        positions: { label: "Which position(s) do you want to fill?", placeholder: "Enter position/positions" },
        locations: { label: "In which location(s)?", placeholder: "Enter location/locations" },
        count: { label: "How many workers do you need?", placeholder: "Enter number of workers" },
        message: { label: "Message", placeholder: "Any additional details..." },
        name: { label: "Name*" },
        surname: { label: "Surname*" },
        phone: { label: "Mobile Number*" },
        company: { label: "Company Name*" },
        email: { label: "Email*" }
      },
      submit: "Send Inquiry",
      back: "Back to Home"
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: October 2023",
      back: "Back to Home",
      sections: [
        { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, post a job, or apply for a position. This may include your name, email address, phone number, and employment history." },
        { title: "2. How We Use Your Information", content: "We use your information to provide, maintain, and improve our services, including matching candidates with employers, processing payments, and communicating with you." },
        { title: "3. Data Security", content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction." },
        { title: "4. Your Rights", content: "You have the right to access, correct, or delete your personal information. You can manage your preferences within your account settings or contact us directly." }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have a question or need assistance? Send us a message.",
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "your@email.com" },
        subject: { label: "Subject", placeholder: "What is this about?" },
        message: { label: "Message", placeholder: "How can we help?" }
      },
      submit: "Send Message",
      sending: "Sending...",
      success: {
        title: "Message Sent!",
        message: "Thank you for reaching out. We'll get back to you shortly."
      },
      back: "Back to Home"
    },
    footer: {
      rights: "Scoutify. All rights reserved.",
      privacy: "Privacy Policy",
      contact: "Contact Us"
    }
  },
  sl: {
    hero: {
      badge: "NAJDITE NAJBOLJŠE KANDIDATE V NEKAJ URAH",
      title: "Svi izvori talenata. Jedna platforma.",
      subtitle: "Preiščemo vsak kotiček interneta – od borz dela do skritih kanalov – da najdemo strokovnjake, ki popolnoma ustrezajo vašim potrebam. Hitreje, pametneje in celoviteje.",
      ctaPrimary: "NAJDI ZDAJ",
      ctaSecondary: "Rezervirajte klic",
      stats: {
        companies: "Podjetij",
        hired: "Zaposlenih",
        matchRate: "Ujemanje",
        faster: "Hitreje",
      }
    },
    whyChoose: {
      title: "Zakaj izbrati nas za iskanje talentov?",
      description: "Nismo le platforma; smo celovita sila umetne inteligence, ki deluje kot vaš precizen marketinški motor, vrhunsko podjetje za iskanje kadrov in specialist za preverjanje – vse v enem."
    },
    features: {
      title: "Prednost UI",
      f1: { title: "Natančne oglasne kampanje", desc: "Ustvarjamo in izvajamo hiper-ciljane kampanje, ki dosežejo točno tiste strokovnjake, ki jih potrebujete." },
      f2: { title: "Inteligentni kvizi preverjanja", desc: "Naša UI takoj ustvari dinamična ocenjevanja, prilagojena specifično vašemu delovnemu mestu." },
      f3: { title: "Bazen predhodno kvalificiranih talentov", desc: "Nehajte zapravljati čas s pregledovanjem stotin nerelevantnih prijav. Naš sistem predhodno preveri vsakega strokovnjaka." },
      f4: { title: "Pospešen čas zaposlovanja", desc: "Skrajšajte čas zaposlovanja za več tednov. Naš proces zagotavlja, da hitreje spoznate in intervjuvate najboljše kandidate." }
    },
    process: {
      title: "Proces",
      subtitle: "Pametnejše pridobivanje talentov. Večmesečno iskanje spremenimo v brezhiben, hiter proces.",
      steps: [
        { title: "Oddajte načrt dela", desc: "Delite svoje zahteve z nami. Vključite podrobnosti o vlogi, nujne veščine in kulturo." },
        { title: "UI zažene ciljane kampanje", desc: "Naša platforma analizira vaš načrt in takoj ustvari optimizirane kampanje z visoko konverzijo." },
        { title: "Ustvarjanje ocenjevanja po meri", desc: "UI samodejno zgradi in uvede validiran kviz in vprašalnik." },
        { title: "Prejmite preverjene talente", desc: "Skozi pridejo le strokovnjaki, ki opravijo strogo ocenjevanje. Prejmete kuriran seznam kandidatov." }
      ]
    },
    comparison: {
      title: "Zakaj Scoutify?",
      scoutify: {
        label: "Scoutify",
        items: [
          "Hitra prijava kandidata (< 1 min)",
          "5-10x več kakovostnih prijav",
          "Sistem za samodejno ocenjevanje kandidatov",
          "Scoutify pristop 'na ključ'",
          "Podpora 24/7"
        ]
      },
      others: {
        label: "Drugi oglasniki",
        items: [
          "Dolg proces, ki vodi v izgubo kandidatov",
          "Nezadovoljivo število in kakovost prijav",
          "Seznam kandidatov brez predkvalifikacije",
          "Ničelna pomoč v nadaljnjem procesu",
          "Omejena podpora"
        ]
      },
      stats: "180+ delodajalcev v 8 državah",
      cta: {
        title: "Kreni sa zapošljavanjem - pošalji upit ili nas nazovi odmah",
        btnPrimary: "Pošlji povpraševanje"
      },
      quote: {
        text: "Oglasnik, ki ga kandidati želijo uporabljati, je oglasnik, s katerim so delodajalci zadovoljni. Scoutify združuje interese delodajalca in kandidata. Brez kompromisa.",
        subtext: "Preizkušen pristop, ki s hitrostjo in učinkovitostjo prinaša zadovoljstvo delodajalcu in kandidatu."
      }
    },
    about: {
      text1: "Scoutify je zaposlitvena platforma, zgrajena za izboljšanje izkušnje za vse - pomaga ekipam delati hitreje in pošteno.",
      text2: "Scoutify združuje interese delodajalca in kandidata. Bez kompromisov. Preizkušen pristop, ki s hitrostjo in učinkovitostjo prinaša zadovoljstvo delodajalcu in kandidatu."
    },
    modular: {
      title: "Modularne funkcije",
      items: [
        { title: "Podrobni opisi delovnih mest", desc: "Ustvarite jasne, privlačne vloge v nekaj sekundah." },
        { title: "Pregled življenjepisov", desc: "Takoj izpostavite najbolj ustrezne kandidate." },
        { title: "Vprašanja za intervju", desc: "Hitro ustvarite prilagojena vprašanja, specifična za vlogo." },
        { title: "Analiza intervjua", desc: "Samodejno zajemite vpoglede in uspešnost." }
      ]
    },
    whyXyz: {
      title: "Zakaj Scoutify?",
      items: [
        { title: "Agilnost", desc: "Premikamo se hitro in prilagajamo še hitreje." },
        { title: "Sedež v EU", desc: "Zgrajeno za zaposlovanje v EU in ZDA." },
        { title: "Inovativnost", desc: "Vedno gradimo naprej." },
        { title: "Varnost", desc: "Zgrajeno na Azure, varno po zasnovi." },
        { title: "Zmanjšanje pristranskosti", desc: "Redigira osebne podatke pred točkovanjem." },
        { title: "Fleksibilnost", desc: "Brez vezave, odidite kadarkoli." },
        { title: "Intuitivnost", desc: "Čisto, preprosto in enostavno." }
      ]
    },
    origin: {
      subtitle: "Od izziva do rešitve",
      title: "Interno orodje, ki je postalo rešitev za industrijo. Zgrajeno s prispevki vodilnih v industriji."
    },
    benefits: {
      title: "Ključne prednosti",
      items: [
        { title: "Dosezite več talentov", desc: "UI optimizirani profili delovnih mest dosežejo več kvalificiranih kandidata." },
        { title: "Odkrijte skrite dragulje", desc: "Odkrijte obetavne kandidate, ki bi jih tradicionalno preverjanje zgrešilo." },
        { title: "Pravičnejša izkušnja", desc: "Zmanjšajte nezavedno pristranskost s standardiziranimi merili ocenjevanja." },
        { title: "Manj administracije", desc: "Zmanjšajte preverjanje kandidatov za 90 %." },
        { title: "Večji vpliv", desc: "Osredotočite se na strateške odločitve zaposlovanja." },
        { title: "Platformna rešitev", desc: "Brez integracije, intuitiven dizajn, vrednost v nekaj minutah." }
      ]
    },
    ctaFooter: {
      title: "Bodite del prihodnosti zaposlovanja",
      subtitle: "Pridružite se naprednim podjetjem, ki revolucionirajo svoj proces zaposlovanja z vpogledi UI.",
      button: "Začnite zdaj"
    },
    inquiryForm: {
      title: "Najdimo vaše talente",
      subtitle: "Izpolnite spodnje podatke in naša ekipa vas bo kmalu kontaktirala.",
      sections: {
        jobDetails: "Podrobnosti o delovnem mestu",
        contactDetails: "Kontaktni podatki"
      },
      fields: {
        positions: { label: "Katero delovno mesto želite zapolniti?", placeholder: "Vnesite položaj/e" },
        locations: { label: "Na kateri lokaciji/lokacijah?", placeholder: "Vnesite lokacijo/e" },
        count: { label: "Koliko delavcev iščete na položaj?", placeholder: "Vnesite število delavcev" },
        message: { label: "Sporočilo", placeholder: "Dodatne podrobnosti..." },
        name: { label: "Ime*" },
        surname: { label: "Priimek*" },
        phone: { label: "Mobilna številka*" },
        company: { label: "Ime podjetja*" },
        email: { label: "E-pošta*" }
      },
      submit: "Pošlji povpraševanje",
      back: "Nazaj domov"
    },
    privacy: {
      title: "Politika zasebnosti",
      lastUpdated: "Zadnja posodobitev: Oktober 2023",
      back: "Nazaj domov",
      sections: [
        { title: "1. Podatki, ki jih zbiramo", content: "Zbiramo podatke, ki nam jih posredujete neposredno, na primer ob ustvarjanju računa, objavi dela ali prijavi na položaj. To lahko vključuje vaše ime, e-pošto, telefonsko številko in zgodovino zaposlitve." },
        { title: "2. Kako uporabljamo vaše podatke", content: "Vaše podatke uporabljamo za zagotavljanje, vzdrževanje in izboljšanje naših storitev, vključno z usklajevanjem kandidatov z delodajalci, obdelavo plačil in komunikacijo z vami." },
        { title: "3. Varnost podatkov", content: "Izvajamo ustrezne tehnične in organizacijske ukrepe za zaščito vaših osebnih podatkov pred nepooblaščenim dostopom, spreminjanjem, razkritjem ali uničenjem." },
        { title: "4. Vaše pravice", content: "Imate pravico do dostopa, popravka ali izbrisa svojih osebnih podatkov. Svoje nastavitve lahko upravljate v nastavitvah računa ali nas kontaktirate neposredno." }
      ]
    },
    contact: {
      title: "Kontaktirajte nas",
      subtitle: "Imate vprašanje ali potrebujete pomoč? Pošljite nam sporočilo.",
      fields: {
        name: { label: "Ime", placeholder: "Vaše ime" },
        email: { label: "E-pošta", placeholder: "vas@email.com" },
        subject: { label: "Zadeva", placeholder: "Za kaj gre?" },
        message: { label: "Sporočilo", placeholder: "Kako vam lahko pomagamo?" }
      },
      submit: "Pošlji sporočilo",
      sending: "Pošiljanje...",
      success: {
        title: "Sporočilo poslano!",
        message: "Hvala, ker ste nas kontaktirali. Kmalu vam bomo odgovorili."
      },
      back: "Nazaj domov"
    },
    footer: {
      rights: "Scoutify. Vse pravice pridržane.",
      privacy: "Politika zasebnosti",
      contact: "Kontakt"
    }
  },
  hr: {
    hero: {
      badge: "PRONAĐITE NAJBOLJE KANDIDATE U NEKOLIKO SATI",
      title: "Svi izvori talenata. Jedna platforma.",
      subtitle: "Pretražujemo svaki kutak interneta – od burzi rada do skrivenih kanala – kako bismo pronašli stručnjake koji savršeno odgovaraju vašim potrebama. Brže, pametnije i sveobuhvatnije.",
      ctaPrimary: "PRONAĐI SADA",
      ctaSecondary: "Rezervirajte poziv",
      stats: {
        companies: "Tvrtki",
        hired: "Zaposlenih",
        matchRate: "Podudaranje",
        faster: "Brže",
      }
    },
    whyChoose: {
      title: "Zašto odabrati nas za akviziciju talenata?",
      description: "Mi nismo samo platforma; mi smo cjelovita AI sila koja djeluje kao vaš precizni marketinški motor, vrhunsko tvrtka za pronalaženje kadrova i specijalist za provjeru – sve u jednom."
    },
    features: {
      title: "AI Prednost",
      f1: { title: "Precizne oglasne kampanje", desc: "Stvaramo i implementiramo hiperciljane kampanje koje dosežu točno one stručnjake koje trebate." },
      f2: { title: "Inteligentni kvizovi", desc: "Naš AI trenutno generira dinamičke procjene prilagođene specifično vašem oglasu za posao." },
      f3: { title: "Bazen kvalificiranih talenata", desc: "Prestanite gubiti vrijeme pregledavajući stotine nevažnih prijava. Naš sustav unaprijed provjerava svakog stručnjaka." },
      f4: { title: "Ubrzano vrijeme zapošljavanja", desc: "Smanjite vrijeme zapošljavanja za tjedne. Naš proces osigurava da brže upoznate i intervjuirate najbolje kandidate." }
    },
    process: {
      title: "Proces",
      subtitle: "Pametnija akvizicija talenata. Višemjesečnu potragu pretvaramo u besprijekoran, brz proces.",
      steps: [
        { title: "Pošaljite plan posla", desc: "Podijelite svoje zahtjeve s nama. Uključite detalje o ulozi, obavezne vještine i kulturu." },
        { title: "AI pokreće ciljane kampanje", desc: "Naša platforma analizira vaš plan i trenutno stvara optimizirane kampanje." },
        { title: "Generiranje prilagođene procjene", desc: "AI automatski izrađuje i implementira validirani kviz i upitnik." },
        { title: "Primite provjerene talente", desc: "Prolaze samo stručnjaci koji polože strogu procjenu. Primate kurirani popis kandidata." }
      ]
    },
    comparison: {
      title: "Zašto Scoutify?",
      scoutify: {
        label: "Scoutify",
        items: [
          "Brza prijava kandidata (< 1 min)",
          "5-10x više kvalitetnih prijava",
          "Sustav koji automatski ocjenjuje kandidate",
          "Scoutify pristup 'ključ u ruke'",
          "Podrška 24/7"
        ]
      },
      others: {
        label: "Drugi oglasnici za posao",
        items: [
          "Dug proces koji rezultira gubitkom kandidata",
          "Nezadovoljavajući broj i kvaliteta prijava",
          "Lista kandidata bez pretkvalifikacije (ocjena)",
          "Nepostojeća pomoć u daljnjem procesu",
          "Ograničena podrška"
        ]
      },
      stats: "180+ poslodavaca u 8 zemalja",
      cta: {
        title: "Kreni sa zapošljavanjem - pošalji upit ili nas nazovi odmah",
        btnPrimary: "Pošalji upit"
      },
      quote: {
        text: "Oglasnik koji kandidati žele koristiti je oglasnik kojim su poslodavci zadovoljni. Scoutify spaja interese poslodavca i kandidata. Bez kompromisa.",
        subtext: "Dokazani pristup koji brzinom i efikasnošću dovodi zadovoljstvo poslodavcu i kandidatu."
      }
    },
    about: {
      text1: "Scoutify je platforma za zapošljavanje izgrađena da poboljša iskustvo za sve - pomažući timovima da rade brže i pravednije.",
      text2: "Scoutify spaja interese poslodavca i kandidata. Bez kompromisa. Dokazani pristup koji brzinom i efikasnošću dovodi zadovoljstvo poslodavcu i kandidatu."
    },
    modular: {
      title: "Modularne značajke",
      items: [
        { title: "Detaljni opisi poslova", desc: "Stvorite jasne, privlačne uloge u nekoliko sekundi." },
        { title: "Pregled životopisa", desc: "Trenutno istaknite najbolje kandidate." },
        { title: "Pitanja za intervju", desc: "Brzo generirajte prilagođena pitanja specifična za ulogu." },
        { title: "Analiza intervjua", desc: "Automatski zabilježite uvide i učinak." }
      ]
    },
    whyXyz: {
      title: "Zašto Scoutify?",
      items: [
        { title: "Agilnost", desc: "Krećemo se brzo i prilagođavamo još brže." },
        { title: "Sjedište u EU", desc: "Izgrađeno za zapošljavanje u EU i SAD-u." },
        { title: "Inovativnost", desc: "Uvijek gradimo naprijed." },
        { title: "Sigurnost", desc: "Izgrađeno na Azureu, sigurno po dizajnu." },
        { title: "Smanjenje pristranosti", desc: "Redigira osobne podatke prije bodovanja." },
        { title: "Fleksibilnost", desc: "Bez obveze, otiđite bilo kada." },
        { title: "Intuitivnost", desc: "Čisto, jednostavno i lako." }
      ]
    },
    origin: {
      subtitle: "Od izazova do rješenja",
      title: "Interni alat pretvoren u industrijsko rješenje. Izgrađeno uz doprinos lidera u industriji."
    },
    benefits: {
      title: "Ključne prednosti",
      items: [
        { title: "Dosegnite više talenata", desc: "AI optimizirani profili poslova dosežu više kvalificiranih kandidata." },
        { title: "Otkrijte skrivene dragulje", desc: "Otkrijte obećavajuće kandidate koje bi tradicionalna provjera propustila." },
        { title: "Pravednije iskustvo", desc: "Smanjite nesvjesnu pristranost standardiziranim kriterijima ocjenjivanja." },
        { title: "Manje administracije", desc: "Smanjite provjeru kandidata za 90%." },
        { title: "Veći utjecaj", desc: "Fokusirajte se na strateške odluke o zapošljavanju." },
        { title: "Platformsko rješenje", desc: "Bez integracije, intuitiven dizajn, vrijednost u nekoliko minuta." }
      ]
    },
    ctaFooter: {
      title: "Budite dio budućnosti zapošljavanja",
      subtitle: "Pridružite se naprednim tvrtkama koje revolucioniraju svoj proces zapošljavanja pomoću AI uvida.",
      button: "Započnite sada"
    },
    inquiryForm: {
      title: "Pošaljite upit za zapošljavanje",
      subtitle: "Ispunite detalje ispod i naš tim će vas uskoro kontaktirati.",
      sections: {
        jobDetails: "Detalji o poslu",
        contactDetails: "Podaci za kontakt"
      },
      fields: {
        positions: { label: "Koju poziciju/e želiš popuniti?", placeholder: "Unesi poziciju/pozicije" },
        locations: { label: "Na kojoj lokaciji/lokacijama?", placeholder: "Unesi lokaciju/lokacije" },
        count: { label: "Koliko radnika tražiš po poziciji?", placeholder: "Unesi broj radnika po poziciji" },
        message: { label: "Poruka", placeholder: "Dodatni detalji..." },
        name: { label: "Ime*" },
        surname: { label: "Prezime*" },
        phone: { label: "Broj mobitela*" },
        company: { label: "Ime poduzeća*" },
        email: { label: "Email*" }
      },
      submit: "Pošlji upit",
      back: "Povratak na naslovnu"
    },
    privacy: {
      title: "POLITIKA PRIVATNOSTI",
      lastUpdated: "Zadnja izmjena: 13. kolovoza 2025.",
      back: "Povratak na naslovnu",
      sections: [
        {
          title: "Uvod",
          content: "Politika privatnosti poduzeća Špica Sustavi d.o.o.\n\nOva politika privatnosti određuje kako Špica Sustavi d.o.o., Remetinečka cesta 139, 10 020 Zagreb, Hrvatska, OIB: 08747661196 (u nastavku: Špica) prikuplja, čuva i upotrebljava vaše osobne podatke. Ova je politika privatnosti stupila na snagu 1. srpnja 2024.\n\nOva politika privatnosti vrijedi za (i) uporabu sljedećih mrežnim stranicama kojima upravlja Špica:\n• www.spica.hr\n• katalog.spica.hr\n(u nastavku: mrežna stranica ili mrežne stranice), (ii) izvođenje događaja u organizaciji Špice i prijave na takve događaje, (iii) prijava na obavijesti o novostima i informacije o našoj ponudi usluga, (iv) obavještavanje preko naših društvenih mreža i aplikacija, (v) za ispunjavanje različitih kontaktnih obrazaca koji su na raspolaganju na našoj mrežnoj stranici, (vi) za prijenose web-kataloga, bijelih knjiga (engl. white paper) i ostalih dokumenata koji su na raspolaganju na našoj mrežnoj stranici, (vii) upotreba e-learning portala, (viii) upotreba support portala, (ix) uporaba naše internetske trgovine, (x) izvođenje e-marketinških akcija i (xi) vaša uporaba bilo koje druge sadašnje ili buduće online ili offline usluge (u nastavku sve zajedno od (i) do (xi): usluge).\n\nMolimo vas da detaljno pročitate našu politiku privatnosti."
        },
        {
          title: "O nama",
          content: "Voditelj obrade vaših osobnih podataka jest Špica Sustavi d.o.o., Remetinečka cesta 139, 10 020 Zagreb, Hrvatska, OIB: 08747661196.\n\nU slučaju bilo kakvih pitanja obratite nam se e-poštom na GDPRspicahr@spica.com"
        },
        {
          title: "Kako prikupljamo, upotrebljavamo i na druge načine obrađujemo vaše osobne podatke",
          content: "Vaše osobne podatke prikupljamo kada nam ih proslijedite, na primjer kada upotrebljavate našu mrežnu stranicu i njezine funkcije, kada s nama stupite u kontakt neposredno putem elektroničke pošte, telefona, u pisanom obliku ili putem društvenih mreža, kada naručujete naše usluge, kada upotrijebite bilo koju od naših mrežnih stranica ili nam na bilo koji drugi način proslijedite osobne podatke."
        },
        {
          title: "Koje vrste osobnih podataka prikupljamo ili dobivamo o vama?",
          content: "Vrste informacija koje prikupljamo o vama mogu uključivati informacije kao što su:\n• vaše ime i prezime\n• vaša poslovna adresa e-pošte odnosno druga adresa e-pošte koju ste nam proslijedili\n• društvo u kojem radite, odnosno u kojem ste radili\n• vaš poslovni položaj na radnom mjestu\n• vaš telefonski broj\n• informacije o vašem računalu odnosno mobilnom uređaju (npr. vaša IP adresa i vrsta preglednika, vrsta uređaja)\n• informacije o tome kako upotrebljavate našu mrežnu stranicu (npr. koje ste stranice gledali, vrijeme kada ste ih gledali i što ste kliknuli).\n\nMožemo prikupljati i vaše osobne podatke iz određenih javno dostupnih izvora, uključujući (ali ne isključivo) javne mrežne baze podataka, poslovne imenike, medijske publikacije, društvene mreže, mrežne stranice i druge javno dostupne izvore."
        },
        {
          title: "Kako upotrebljavamo vaše osobne podatke (svrhe obrade)?",
          content: "Vaše osobne podatke možemo upotrebljavati u jednu ili više sljedećih svrha:\n\nA.)\n1. U vezi s vašom uporabom usluga.\n\n2. Upravljanje i poboljšavanje naših mrežnih stranica uključujući i prilagođavanje korisničkog iskustva naše mrežne stranice. To je potrebno za naš interes da bolje razumijemo želje svojih stranaka i potencijalnih kupaca te da prilagođavamo svoje mrežne stranice, proizvode i usluge s obzirom na vaše potrebe i želje.\n\n3. Direktni marketing i upravljanje odnosima Špice sa sadašnjim i potencijalnim klijentima. To provodimo kroz analizu podataka o svojim klijentima i analizu podataka povijesti našega odnosa s našim klijentima u svrhu prilagođavanja naših usluga i proizvoda potrebama naših klijenata, za poboljšavanje poslovnih odnosa s klijentima, s naglaskom na očuvanje klijenata i konačni rast prodaje. To je potrebno za naš interes za bolje razumijevanje želja naših stranaka i za učinkovito vođenje i upravljanje našim poslovanjem.\n\n4. Segmentiranje podataka o vama na temelju vaših aktivnosti i interesa na našim mrežnim stranicama u svrhu osiguravanja vama prilagođenih (personaliziranih) sadržaja i ponuda.\n\n5. Komuniciranje neposredno s vama u vezi s ažuriranjima na našim mrežnim stranicama, kupnjom naših usluga i odgovorima na upite koje od vas zaprimimo. To je potrebno da vas povremeno obavještavamo o promjenama na našim mrežnim stranicama, da izvršimo ugovor koji smo sklopili s vama, pripremimo ponudu ili za naš legitimni interes ispunjavanja i potvrde vaših zahtjeva, da vam osiguramo svoje proizvode ili usluge i da odgovorimo na pitanja koja zaprimimo od vas.\n\n6. Sklapanje ugovora i priprema ponude. Ako nam ne proslijedite svoje osobne podatke, a to je potrebno u tu svrhu, nećemo moći sklopiti ili izvršiti ugovor s vama ili vam ponuditi proizvod ili uslugu koje ste zatražili. Također možemo odgoditi ili opozvati sve vaše narudžbe i upotrijebiti svoja zakonita prava protiv vas (na primjer, ako smo imali troškove ili izdatke kod pripreme ili ispunjavanja bilo koje vaše narudžbe).\n\n7. Zaštita našeg poslovanja i naših poslovnih interesa, uključujući provjeru kreditne sposobnosti i pozadinsku provjeru, sprječavanje prijevara i potraživanje dugova. To je potrebno za zaštitu naših interesa za sprječavanje kriminalnih radnji, kao što su prijevare ili pranje novca, kako bismo osigurali da se naša mrežna stranica i usluge ne zloupotrebljavaju i da se zaštiti naše poslovanje. Takve ćemo provjere izvoditi samo ako nam to dozvoljava primjenjivo zakonodavstvo.\n\n8. Komuniciranje s našim poslovnim savjetnicima i pravnim zastupnicima. To je potrebno za naše interese dobivanja pravnoga ili stručnog poslovnog savjeta, a vaše ćemo osobne podatke proslijediti, ako je to potrebno, u najmanjem opsegu koji je potreban, anonimizirane kada je god to moguće.\n\n9. Korištenje biometrijskog otiska lica u svrhu kontrole pristupa našim poslovnim prostorima što se odnosi isključivo na zaposlenike Voditelja obrade, i isključivo uz osobnu privolu uz sva prava koja ispitanici imaju sukladno Članku 16. do Članka 20. (Prava ispitanika) Opće uredbe EU o zaštiti podataka. U tom smislu Voditelj obrade je proveo i Test razmjernosti te proveo DPIA analizu.\n\n10. Dijeljenje osobnih podataka s trećim stranama (u nastavku: primatelji podataka) koje su povezane s nama, a u vezi s osiguranjem usluga koje nudimo, kao što su: (i) poslovni partneri u našem prodajnom lancu, (ii) kapitalom povezana društva čiji je popis dostupan na https://www.spica.si/kontakt, (iii) dobavljači odnosno pružatelji usluga e-pošte i (iv) dobavljači odnosno pružatelji različitih usluga informacijskih i komunikacijskih tehnologija. To će biti potrebno za realizaciju ugovora koji smo sklopili s vama (ili za pripremu ponude), za naš interes učinkovitog vođenja i upravljanja našim poslovanjem, za usklađenost s obvezujućim pravnim normama ili u vlastitu svrhu neposrednog marketinga. Kada prosljeđujemo vaše osobne podatke, to ćemo činiti isključivo na temelju načela nužnog poznavanja, u skladu s odgovarajućim ograničenjima o povjerljivosti i samo toliko koliko je nužno za bilo koju od tih svrha.\n\n11. Ostvarivanje naših zakonskih prava i poštivanje zakona, propisa i drugih zakonskih odredbi. To je potrebno za naš interes zaštite našega poslovanja i ostvarivanje naših ugovornih i drugih zakonskih prava, za osiguranje fizičke, mrežne i informacijske sigurnosti te cjelovitosti. To je potrebno za naš legitimni interes da osiguramo siguran i nekompromitiran IT sustav i mrežu, uključujući sigurnosno kopiranje i arhiviranje, sprječavanje zlonamjerne programske opreme, virusa, grešaka ili drugih štetnih kodova, sprječavanje neovlaštenog pristupa našim sustavima i svih oblika napada ili oštećenja naših IT sustava i mreža. Možda ćemo morati upotrebljavati i obrađivati vaše osobne podatke da bi bili u skladu s pravnim obvezama koje moramo poštivati. Na primjer, možemo zahtijevati da dostavite određene osobne podatke u svrhu izvršavanja zakonske obveze sprječavanja pranja novca ili da svoje podatke razotkrijete sudu po primitku sudskog naloga. Vaši osobni podaci možda će nam biti potrebni i za ispunjavanje važećih zakonskih obveza, kao npr. obveza iz poreznog zakonodavstva i ostalih propisa koji nas obvezuju.\n\n12. U vezi sa zahtjevima za razotkrivanje i u slučaju prodaje ili kupovine društva i/ili sredstava, stvarnih ili potencijalnih. To je potrebno za naše interese prodaje i/ili osiguravanja i poticanja uspjeha našega poslovanja.\n\n13. U svrhu statistike i istraživanja. Podatke ćemo anonimizirati i upotrijebiti ih za interese obrade osobnih podataka u svrhu istraživanja, uključujući istraživanja tržišta, bolje razumijevanje naših stranaka i prilagođavanje naših proizvoda i usluga vašim potrebama.\n\n14. Identificiranja mogućih kažnjivih dijela ili prijetnji za javnu sigurnost nadležnom organu. To je potrebno za naš interes poticanja uspjeha našega poslovanja, sprječavanja kriminala, za ispunjavanje zakonskih obveza, u općem javnom interesu ili za zakonite interese organa vlade i nadležnih organa koji sprječavaju kaznena djela.\n\n15. U vezi s bilo kojim pravnim ili mogućim pravnim sporom ili postupkom. To je potrebno za naš interes poticanja i osiguranja uspjeha našega poslovanja, rješavanja sporova i davanje objava na način propisan zakonima ili za koje mislimo da su razumne i u skladu sa zakonom.\n\nB.)\nUz vašu izričitu suglasnost u svrhu e-oglašavanja, da vas obavještavamo o svojim uslugama, novostima, organizaciji događaja, da vam ponudimo svoje usluge, kao i druge oblike e-oglašavanja.\n\nKada obrađujemo vaše osobne podatke na temelju vaše suglasnosti, možete bilo kada opozvati danu suglasnost javljanjem na adresu e-pošte na GDPRspicahr@spica.com Takav opoziv stupa na snagu najkasnije 30 dana od dana kada smo primili vaš zahtjev."
        },
        {
          title: "Čuvanje osobnih podataka i razdoblje obrađivanja",
          content: "Vaše osobne podatke Špica čuva na vlastitim serverima odnosno serverima naših dobavljača IT usluga, koji se nalaze u EU-u. Međutim, vaši se osobni podaci mogu obrađivati i izvan Europskoga gospodarskog prostora.\n\nŠpica će obrađivati vaše osobne podatke u opsegu koji je relevantan i ograničen na ono što je potrebno u one svrhe za koje se podaci obrađuju, konkretno, svrhe u koje obrađujemo vaše osobne podatke, na primjer je li potrebno i dalje čuvati te podatke kako bismo mogli i dalje ispunjavati svoje obveze iz ugovora s vama ili za svoje poslovne interese; ili imamo zakonsku obvezu da nastavimo s obradom vaših podataka, kao što su bilo koje obveze vođenja evidencije što ih određuje važeće zakonodavstvo; i imamo li pravni temelj da dalje obrađujemo vaše osobne podatke, kao što je vaša suglasnost.\n\nAko želite više informacija o tome gdje su i koliko dugo pohranjeni vaši osobni podaci, za više informacija o svojim pravima na brisanje i prijenos osobnih podataka obratite nam se na GDPRspicahr@spica.com"
        },
        {
          title: "Kako čuvamo vaše osobne podatke",
          content: "Poduzeli smo odgovarajuće tehničke i organizacijske mjere za osiguranje vaših osobnih podataka i njihovu zaštitu od neovlaštene ili nezakonite upotrebe ili obrade te protiv slučajnog gubljenja ili uništavanja ili oštećenja vaših osobnih podataka, uključujući:\n• načelo najmanjeg opsega podataka i obrade u anonimiziranom obliku, kad je god to moguće\n• osposobljavanje naših zaposlenika o važnosti povjerljivosti i očuvanju privatnosti i sigurnosti vaših podataka\n• zalaganje za donošenje odgovarajućih disciplinskih mjera kako bi zaposleni preuzeli odgovornost za kršenje pravila privatnosti\n• stalno i cjelovito ažuriranje i testiranje naše sigurnosne tehnologije\n• pažljivo i odgovorno biranje ugovornih podizvođača\n• primjenu sigurnih servera za čuvanje vaših osobnih podataka\n• imenovanje ovlaštene osobe za čuvanje osobnih podataka\n• zahtijevanje dokazivanja identiteta od svakog pojedinca koji zahtijeva pristup osobnim podacima.\n\nŠpica ima važeći, redovito testiran certifikat IS0 27001, koji je međunarodno priznat standard na području informacijske sigurnosti.\n\nŽelimo vas upozoriti da prijenos informacija (uključujući osobne podatke) preko interneta nije uvijek posve siguran i ako nam proslijedite bilo kakve informacije preko interneta (putem elektroničke pošte, putem naše mrežne stranice ili na kakav drugi način), to činite u potpunosti na vlastitu odgovornost. Ne možemo biti odgovorni za bilo kakve troškove, izdatke, izgubljenu dobit, štetu ugledu, odgovornosti ili bilo kakav drugi oblik gubitka ili štete koju ste pretrpjeli zbog svojeg prosljeđivanja podataka putem interneta."
        },
        {
          title: "Mrežni priključci i drugi alati",
          content: "a) Google Analytics i alati za oglašavanje korporacije Google\nNa svojim mrežnim stranicama upotrebljavamo analitički alat Google Analytics 4 američke korporacije Google LLC. Google Analytics 4 obrađuje tehničke podatke pohranjene na vašem mobilnom uređaju, kao što su vrsta uređaja (npr. iPhone 7), operacijski sustav (npr. iOS 18.6), naziv pružatelja usluga (npr. Telekom), kao i radnje koje se odvijaju na našoj mrežnoj stranici (npr. pregledavanje određenih stranica, vrijeme provedeno na stranici, interakcija s elementima stranice), uporabom identifikatora uređaja što nam omogućuje da analiziramo kako pojedini korisnici upotrebljavaju mrežne stranice kako bismo poboljšali funkcionalnosti mrežne stranice i time vam pružili bolje korisničko iskustvo.\nAlatom Google Analytics 4 prikupljaju se svi podaci sa svih uređaja u Europskoj uniji (na temelju geolokacije IP adrese) putem domena i servera u EU-u prije nego što ih se prenese na servere alata Analytics radi obrade. Time se osigurava da se podaci korisnika u EU-u obrađuju u skladu s europskim zakonima i propisima o zaštiti podataka. Više o ovoj temi možete pronaći na: https://support.google.com/analytics/answer/12017362?hl=en\nUporaba alata Google Analytics 4 temelji se na članku 6. stavku 1. točki (f) Opće uredbe o zaštiti podataka. Imamo poslovni interes za optimizaciju izvedbe svojih usluga ili bolje upravljanje odnosima sa svojim klijentima.\nOsim alata Google Analytics 4, upotrebljavamo i alate Google reCAPTCHA, Google AdSense, Google Remarketing, Google AdWords i Google Conversion Tracking. Za više informacija o uporabi tih alata pročitajte našu Politiku o kolačićima.\n\nb) Google Maps\nKoristimo se kartografskom uslugom Google Maps preko API-ja. Njome upravlja Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043, SAD. Ako želite upotrebljavati Google Maps, potrebno je pohraniti IP adresu. Te se informacije obično prenesu na Googleov server u SAD-u i tamo pohrane. Pružatelj ove stranice nema utjecaj na taj prijenos podataka. Za prijenose izvan EU-a primjenjuju se sljedeći provjereni mehanizmi navedeni ovdje.\nUsluga Google Maps upotrebljava se kako bi naša mrežna stranica bila privlačna i olakšavala lociranje mjesta koje odredite na mrežnoj stranici. To je poslovni interes u skladu s čl. 6. stavkom 1. točkom (f) Opće uredbe o zaštiti podataka. Dodatne informacije o postupanju s korisničkim podacima nalaze se u izjavi o zaštiti podataka na Googleu na adresi https://policies.google.com/privacy?hl=sl.\n\nc) MS Clarity\nNa svojim mrežnim stranicama upotrebljavamo analitički alat Microsoft Clarity Microsoft Corporationa, društva smještenog u SAD-u.\nOsim toga, te podatke upotrebljavamo za optimizaciju mrežnog mjesta, radi zaštite od prevare i sigurnosne svrhe te u svrhu oglašavanja. Za više informacija o načinu na koji Microsoft prikuplja i upotrebljava vaše podatke pročitajte izjavu o privatnosti društva Microsoft ovdje.\nOvaj alat omogućuje nam da analiziramo interakcije korisnika na našoj mrežnoj stranici. Pruža nam uvid u to kako korisnik pretražuje našu mrežnu stranicu i kako reagira na njezin sadržaj. Alat MS Clarity prikuplja podatke kao što su klikovi, listanje i učitavanje obrazaca i prikazuje nam korisničko iskustvo na našoj mrežnoj stranici.\nPodaci o uporabi mrežne stranice bilježe se uporabom kolačića prve strane i kolačića treće strane te drugih tehnologija praćenja kako bi se utvrdila popularnost proizvoda/usluga i mrežna aktivnost.\nAlat MS Clarity upotrebljava identifikatore uređaja kako bi obradio tehničke podatke pohranjene na vašem mobilnom uređaju, kao što su vrsta uređaja, operacijski sustav, naziv pružatelja usluga, kao i radnje koje se odvijaju na našoj mrežnoj stranici (npr. pregledavanje određenih stranica, vrijeme provedeno na stranici, interakcije s elementima stranice).\nPotpisali smo standardne ugovorne klauzule EU-a (SCC) s društvom, kojima se osiguravaju posebne zaštite za prijenos osobnih podataka izvan EU-a. Više o tome možete pročitati na: https://learn.microsoft.com/en-us/compliance/regulatory/offering-eu-model-clauses\nObrada vaših podataka radi upravljanja oznakama temelji se na vašem pristanku (članak 6. stavak 1. točka (a) Opće uredbe o zaštiti podataka).\n\nd) Segment\nUpotrebljavamo analitički alat Segment društva Segment.io, Inc.\nAlatom Segment prikupljaju se podaci iz niza izvora, kao što su identifikatori uređaja, tj. jedinstveni identifikatori povezani s vašim uređajem, uključujući IDFA (Identifikator za oglašivače) za uređaje marke Apple ili AAID (Google Advertising ID) za uređaje s operacijskim sustavom Android; tehnički podaci o vašem uređaju, kao što je vrsta uređaja (npr. iPhone 7), operacijski sustav (npr. iOS 18.6) i naziv vašeg pružatelja mobilnih usluga (npr. Vodafone) te podaci o uporabi aplikacija, što uključuje informacije o tome kako upotrebljavate aplikacije (My Hours, All Hours i ostalo), uključujući radnje kao što su početak i zaustavljanje bilježenja vremena, izrada izvješća i uporaba drugih funkcionalnosti aplikacije.\nPodatke koje prikupimo alatom Segment upotrebljavamo za analizu načina na koji korisnici upotrebljavaju naše aplikacije, za utvrđivanje područja koja je potrebno poboljšati i za razvoj novih značajki, za prilagođavanje iskustva korisnika te za slanje ciljanih reklama i promocija.\nS društvom Segment.io, Inc potpisali smo standardne ugovorne klauzule EU-a u pogledu prijenosa osobnih podataka izvan EU-a. Više o usklađenosti Segment.io Inc s međunarodnim standardimai zakonima možete pročitati ovdje. Upo rabom naših usluga pristajete na obradu vaših podataka alatom Segment na gore naveden način.\nUporaba usluga alata Segment provodi se na temelju članka 6. stavka 1. točke (f) Opće uredbe o zaštiti podataka. Imamo poslovni interes za optimizaciju izvedbe svojih usluga ili bolje upravljanje odnosima sa svojim klijentima. Potreban nam je vaš pristanak za prikupljanje vaših osobnih podataka uporabom kolačića.\n\ne) Hotjar\nNa svojim mrežnim stranicama upotrebljavamo mrežni marketinški alat Hotjar društva Hotjar Ltd, Level 2, St Julians Business Centre, 3, Elia Zammit Street, St Julians STJ 1000, Malta („Hotjar“). Riječ je o analitičkom alatu koji nam omogućuje praćenje vaše uporabe naše mrežne stranice, npr. da bismo vidjeli kako pretražujete našu mrežnu stranicu. Cilj je optimizirati vaše iskustvo kao gosta naše mrežne stranice i učiniti našu ponudu još privlačnijom. Hotjar upotrebljava kolačiće. Za ostale informacije o kolačićima koje upotrebljava Hotjar posjetite www.hotjar.com/cookies.\nOsim toga, na svojoj smo mrežnoj stranici uveli kod za praćenje alata Hotjar koji nam omogućuje prikupljanje sljedećih informacija: (i) podataka o uređaju (IP adresa vašeg uređaja, koja se pronalazi i pohranjuje na anoniman način, veličine ekrana vašeg uređaja, vrsta uređaja (jedinstveni identifikatori uređaja) i informacije o pregledniku, države kao geografske lokacije, jezik izabran za prikazivanje mrežne stranice i (ii) podatke za prijavu (u pogledu domene, posjećenih stranica, države kao geografske lokacije, jezika izabranog za prikazivanje mrežne stranice, datuma i vremena posjeta mrežnoj stranici). Općenito, vaši podaci prikupit će se u anonimnom obliku i neće se osobno povezati s vama. Ako se registrirate kao korisnik naših usluga, vaši podaci na alatu Hotjar neće se povezati s vašim osobnim podacima. Alat Hotjar također upotrebljava usluge trećih strana kao što su alati Google Analytics i Optimizely.\nZa dodatne informacije o politici privatnosti alata Hotjar posjetite: www.hotjar.com/privacy. U budućnosti možete zabraniti alatu Hotjar da prikuplja i pohranjuje vaše podatke na bilo koji način na: www.hotjar.com/opt-out.\nKolačići alata Hotjar pohranjuju se na temelju članka 6. stavka 1. točke (f) Opće uredbe o zaštiti podataka. Imamo legitiman interes za analiziranje ponašanja korisnika na našoj mrežnoj stranici kako bismo optimizirati kako ponudu tako i oglašavanje.\n\nf) Intercom\nZa slanje poruka elektroničkom poštom i za funkciju Live-Chat u vezi s našim uslugama u oblaku i za upravljanje odnosima s klijentima na mrežnim stranicama primjenjujemo alat Intercom društva Intercom Inc. 98 Battery Street, Suite 402, San Francisco, CA 94111, SAD. Pri tome prenosimo sljedeće podatke:\n• vašu adresu e-pošte\n• vaše ime i prezime\n• vaš telefonski broj\n• kontaktne podatke tehničkih kontakata.\nS društvom Intercom Inc. potpisali smo standardne ugovorne klauzule EU-a u pogledu međunarodnog prijenosa podataka izvan EU-a u SAD. Za više informacija kliknite ovdje.\nIntercom također upotrebljava kolačiće pohranjene na vašem računalu koji omogućavaju analizu korisnika. Podaci prikupljeni na temelju kolačića o vašem zadnjem posjetu našoj platformi u oblaku prenose se na servere Intercoma u SAD-u i ondje se pohranjuju. Intercom neće kombinirati vašu IP adresu s bilo kojim drugim pohranjenim podacima o vama.\nPodaci o zainteresiranim stranama koje s nama stupaju u kontakt putem funkcije Live-Chat u potpunosti se brišu nakon devet mjeseci. Svaka zainteresirana strana koja stupi u kontakt s nama nakon što se njezini podaci izbrišu smatra se novom zainteresiranom stranom.\nPrimjenom postavke na svojem pregledniku možete onemogućiti upotrebu tih kolačića. Time rad nekih usluga naše mrežne stranice može biti otežan (npr. Live-Chat).\nUporaba usluge Intercom izvodi se na temelju čl. 6. stavka 1. točke (f) Opće uredbe o zaštiti podataka. Naš je poslovni interes optimiziranje izvedbe naših usluga odnosno bolje upravljanje našim odnosima s klijentima.\n\ng) ActiveCampaign\nZa slanje e-novosti (engl. newsletter) upotrebljavamo platformu ActiveCampaign društva ActiveCampaign, 1 N, Dearborn, Chicago, IL 60607, SAD, gdje su pohranjeni sljedeći podaci: adresa e-pošte te ime i prezime. Ti su podaci pohranjeni kod pružatelja usluge ActiveCampaign na njegovim serverima u SAD-u.\nDruštvo ActiveCampaign nastoji osigurati najvišu razinu sigurnosti pohranjenih podataka različitim fizičkim, tehničkim i organizacijskim mjerama, kao što su šifriranje mrežnih poveznica, sprječavanje neovlaštenog pristupa, primjena sigurnih lozinki i sprječavanje upada. Usluga ActiveCampaign prati uspješnost isporuke poslanih poruka e-pošte prikupljanjem podataka o otvorenim porukama, klikovima na poveznice, klijentima e-pošte i preglednicima, približnoj lokaciji, IP adresi, prijavama i odjavama te neuspješnoj dostavi e-pošte. Ti se podaci čuvaju najviše šest mjeseci nakon odjave s primanja e-poruka.\nPolitika privatnosti društva ActiveCampaign dostupna je na https://www.activecampaign.com/privacy-policy/.\nPotpisali smo standardne ugovorne klauzule EU-a (SCC) s društvom ActiveCampaign."
        }
      ]
    },
    contact: {
      title: "Kontaktirajte nas",
      subtitle: "Imate pitanje ili trebate pomoć? Pošaljite nam poruku.",
      fields: {
        name: { label: "Ime", placeholder: "Vaše ime" },
        email: { label: "Email", placeholder: "vas@email.com" },
        subject: { label: "Predmet", placeholder: "O čemu se radi?" },
        message: { label: "Poruka", placeholder: "Kako vam možemo pomoći?" }
      },
      submit: "Pošlji poruku",
      sending: "Slanje...",
      success: {
        title: "Poruka poslana!",
        message: "Hvala što ste nas kontaktirali. Javit ćemo vam se uskoro."
      },
      back: "Povratak na naslovnu"
    },
    footer: {
      rights: "Scoutify. Sva prava pridržana.",
      privacy: "Politika privatnosti",
      contact: "Kontakt"
    }
  },
  de: {
    hero: {
      badge: "FINDEN SIE DIE BESTEN KANDIDATEN IN WENIGEN STUNDEN",
      title: "Svi izvori talenata. Jedna platforma.",
      subtitle: "Wir durchsuchen jeden Winkel des Internets – von Jobbörsen bis zu versteckten Kanälen – um Experten zu finden, die perfekt zu Ihren Anforderungen passen. Schneller, intelligenter und umfassender.",
      ctaPrimary: "JETZT FINDEN",
      ctaSecondary: "Gespräch buchen",
      stats: {
        companies: "Unternehmen",
        hired: "Vermittelt",
        matchRate: "Trefferquote",
        faster: "Schneller",
      }
    },
    whyChoose: {
      title: "Warum uns für Ihre Talentakquise wählen?",
      description: "Wir sind nicht nur eine Plattform; wir sind eine umfassende KI-Powerhouse, die als Ihre präzisionszielende Marketingmaschine, erstklassige Sourcing-Firma und Full-Stack-Vetting-Spezialist agiert – alles in einem."
    },
    features: {
      title: "KI-Vorteil",
      f1: { title: "Präzisions-Werbekampagnen", desc: "Wir erstellen und setzen hyper-gezielte Kampagnen ein, die genau die Fachkräfte erreichen, die Sie benötigen." },
      f2: { title: "Intelligente Vetting-Quizze", desc: "Unsere KI generiert sofort dynamische Bewertungen, die speziell auf Ihre Stellenanzeige zugeschnitten sind." },
      f3: { title: "Vorqualifizierter Talentpool", desc: "Hören Sie auf, Zeit mit der Überprüfung hunderter irrelevanter Bewerbungen zu verschwenden. Unser System prüft jeden Experten vorab." },
      f4: { title: "Beschleunigte Zeit bis zur Einstellung", desc: "Reduzieren Sie Ihre Einstellungszeit um Wochen. Unser optimierter, KI-gesteuerter Prozess sorgt dafür, dass Sie Top-Kandidaten schneller treffen." }
    },
    process: {
      title: "Der Prozess",
      subtitle: "Intelligentere Talentakquise. Wir verwandeln eine monatelange Suche in einen nahtlosen, schnellen Prozess.",
      steps: [
        { title: "Job-Blueprint einreichen", desc: "Teilen Sie uns Ihre Anforderungen mit. Geben Sie Rollendetails, erforderliche Fähigkeiten und Unternehmenskultur an." },
        { title: "KI startet gezielte Kampagnen", desc: "Unsere Plattform analysiert Ihren Blueprint und erstellt sofort optimierte Kampagnen mit hoher Konversionsrate." },
        { title: "Erstellung benutzerdefinierter Bewertungen", desc: "Die KI erstellt und implementiert automatisch ein validiertes Quiz und einen Fragebogen zur Messung der Fachkompetenz." },
        { title: "Erhalten Sie geprüfte Talente", desc: "Nur Fachkräfte, die die strenge Bewertung bestehen, kommen durch. Sie erhalten eine kuratierte Liste von Kandidaten." }
      ]
    },
    comparison: {
      title: "Warum Scoutify?",
      scoutify: {
        label: "Scoutify",
        items: [
          "Schnelle Bewerbung (< 1 Min)",
          "5-10x mehr qualifizierte Bewerbungen",
          "Automatisches Bewertungssystem",
          "Scoutify 'Turnkey'-Ansatz",
          "24/7 Support"
        ]
      },
      others: {
        label: "Andere Jobbörsen",
        items: [
          "Langer Prozess, der zum Verlust von Kandidaten führt",
          "Unbefriedigende Anzahl und Qualität der Bewerbungen",
          "Kandidatenliste ohne Vorqualifikation",
          "Keine Hilfe im weiteren Prozess",
          "Eingeschränkter Support"
        ]
      },
      stats: "180+ Arbeitgeber in 8 Ländern",
      cta: {
        title: "Starten Sie die Einstellung - senden Sie eine Anfrage oder rufen Sie uns sofort an",
        btnPrimary: "Anfrage senden"
      },
      quote: {
        text: "Eine Jobbörse, die Kandidaten nutzen wollen, ist eine Jobbörse, mit der Arbeitgeber zufrieden sind. Scoutify verbindet die Interessen von Arbeitgeber und Kandidat. Keine Kompromisse.",
        subtext: "Bewährter Ansatz, der Arbeitgeber und Kandidat mit Geschwindigkeit und Effizienz zufriedenstellt."
      }
    },
    about: {
      text1: "Scoutify ist eine Einstellungsplattform, die entwickelt wurde, um die Erfahrung für alle zu verbessern - und Einstellungsteams dabei zu helfen, schneller und fairer zu arbeiten.",
      text2: "Scoutify verbindet die Interessen von Arbeitgeber und Kandidat. Keine Kompromisse. Bewährter Ansatz, der Arbeitgeber und Kandidat mit Geschwindigkeit und Effizienz zufriedenstellt."
    },
    modular: {
      title: "Modulare Funktionen",
      items: [
        { title: "Detaillierte Stellenbeschreibungen", desc: "Erstellen Sie klare, überzeugende Rollen in Sekunden." },
        { title: "Lebenslauf-Screening", desc: "Heben Sie sofort die bestpassenden Kandidaten hervor." },
        { title: "Interviewfragen", desc: "Generieren Sie schnell maßgeschneiderte, rollenspezifische Fragen." },
        { title: "Interview-Analyse", desc: "Erfassen Sie Erkenntnisse und Leistung automatisch." }
      ]
    },
    whyXyz: {
      title: "Warum Scoutify?",
      items: [
        { title: "Agilität", desc: "Wir bewegen uns schnell und passen uns noch schneller an." },
        { title: "EU-Basiert", desc: "Gebaut für EU - USA Einstellungen." },
        { title: "Innovativ", desc: "Wir bauen immer weiter." },
        { title: "Sicher", desc: "Auf Azure gebaut, sicher durch Design." },
        { title: "Reduzierung von Vorurteilen", desc: "Schwärzt personenbezogene Daten vor der Bewertung." },
        { title: "Flexibel", desc: "Kein Lock-in, jederzeit kündbar." },
        { title: "Intuitiv", desc: "Sauber, einfach und leicht." }
      ]
    },
    origin: {
      subtitle: "Von der Herausforderung zur Lösung",
      title: "Internes Tool wurde zur Branchenlösung. Entwickelt mit Input von Branchenführern."
    },
    benefits: {
      title: "Hauptvorteile",
      items: [
        { title: "Erreichen Sie mehr Talente", desc: "KI-optimierte Jobprofile erreichen mehr qualifizierte Kandidaten." },
        { title: "Entdecken Sie verborgene Schätze", desc: "Entdecken Sie vielversprechende Kandidaten, die traditionelles Screening übersehen würde." },
        { title: "Fairer Erfahrung", desc: "Reduzieren Sie unbewusste Vorurteile durch standardisierte Bewertungskriterien." },
        { title: "Weniger Admin", desc: "Reduzieren Sie das Kandidaten-Screening um 90%." },
        { title: "Mehr Wirkung", desc: "Konzentrieren Sie sich auf strategische Einstellungsentscheidungen." },
        { title: "Plattformlösung", desc: "Keine Integration, intuitives Design, Wertschöpfung in Minuten." }
      ]
    },
    ctaFooter: {
      title: "Seien Sie Teil der Zukunft der Einstellung",
      subtitle: "Schließen Sie sich zukunftsorientierten Unternehmen an, die ihren Einstellungsprozess mit KI-Erkenntnissen revolutionieren.",
      button: "Jetzt starten"
    },
    inquiryForm: {
      title: "Lassen Sie uns Ihre Talente finden",
      subtitle: "Füllen Sie die Details unten aus und unser Team wird sich in Kürze bei Ihnen melden.",
      sections: {
        jobDetails: "Stellendetails",
        contactDetails: "Kontaktdaten"
      },
      fields: {
        positions: { label: "Welche Position(en) möchten Sie besetzen?", placeholder: "Position(en) eingeben" },
        locations: { label: "An welchem Standort?", placeholder: "Standort(e) eingeben" },
        count: { label: "Wie viele Arbeitskräfte suchen Sie pro Position?", placeholder: "Anzahl der Arbeitskräfte eingeben" },
        message: { label: "Nachricht", placeholder: "Zusätzliche Details..." },
        name: { label: "Vorname*" },
        surname: { label: "Nachname*" },
        phone: { label: "Handynummer*" },
        company: { label: "Firmenname*" },
        email: { label: "E-Mail*" }
      },
      submit: "Anfrage senden",
      back: "Zurück zur Startseite"
    },
    privacy: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: Oktober 2023",
      back: "Zurück zur Startseite",
      sections: [
        { title: "1. Informationen, die wir sammeln", content: "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z. B. wenn Sie ein Konto erstellen, einen Job veröffentlichen oder sich auf eine Stelle bewerben." },
        { title: "2. Wie wir Ihre Informationen verwenden", content: "Wir verwenden Ihre Informationen, um unsere Dienste bereitzustellen, zu warten und zu verbessern, einschließlich der Zusammenführung von Kandidaten und Arbeitgebern." },
        { title: "3. Datensicherheit", content: "Wir setzen angemessene technische und organisatorische Maßnahmen um, um Ihre persönlichen Daten zu schützen." },
        { title: "4. Ihre Rechte", content: "Sie haben das Recht auf Zugang, Korrektur oder Löschung Ihrer persönlichen Daten." }
      ]
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Haben Sie eine Frage oder benötigen Sie Unterstützung? Senden Sie uns eine Nachricht.",
      fields: {
        name: { label: "Name", placeholder: "Ihr Name" },
        email: { label: "E-Mail", placeholder: "ihre@email.com" },
        subject: { label: "Betreff", placeholder: "Worum geht es?" },
        message: { label: "Nachricht", placeholder: "Wie können wir helfen?" }
      },
      submit: "Nachricht senden",
      sending: "Senden...",
      success: {
        title: "Nachricht gesendet!",
        message: "Danke, dass Sie uns kontaktiert haben. Wir melden uns in Kürze."
      },
      back: "Zurück zur Startseite"
    },
    footer: {
      rights: "Scoutify. Alle Rechte vorbehalten.",
      privacy: "Datenschutzerklärung",
      contact: "Kontakt"
    }
  }
};