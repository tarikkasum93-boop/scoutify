export type Language = 'en' | 'sl' | 'hr';

export interface Translation {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      companies: string;
      professionals: string;
      matchRate: string;
      faster: string;
    };
  };
  whyChoose: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    f1: { title: string; desc: string; };
    f2: { title: string; desc: string; };
    f3: { title: string; desc: string; };
    f4: { title: string; desc: string; };
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; desc: string; }>;
  };
  comparison: {
    title: string;
    scoutify: {
      label: string;
      items: string[];
    };
    others: {
      label: string;
      items: string[];
    };
    stats: string;
    cta: {
      title: string;
      btnPrimary: string;
    };
    quote: {
      text: string;
      subtext: string;
    };
  };
  about: {
    text1: string;
    text2: string;
  };
  modular: {
    title: string;
    items: Array<{ title: string; desc: string; }>;
  };
  whyXyz: {
    title: string;
    items: Array<{ title: string; desc: string; }>;
  };
  origin: {
    subtitle: string;
    title: string;
  };
  benefits: {
    title: string;
    items: Array<{ title: string; desc: string; }>;
  };
  ctaFooter: {
    title: string;
    subtitle: string;
    button: string;
  };
  inquiryForm: {
    title: string;
    subtitle: string;
    sections: {
      jobDetails: string;
      contactDetails: string;
    };
    fields: {
      positions: { label: string; placeholder: string; };
      locations: { label: string; placeholder: string; };
      count: { label: string; placeholder: string; };
      message: { label: string; placeholder: string; };
      name: { label: string; };
      surname: { label: string; };
      phone: { label: string; };
      company: { label: string; };
      email: { label: string; };
    };
    submit: string;
    back: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: Array<{ title: string; content: string; }>;
    back: string;
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      name: { label: string; placeholder: string; };
      email: { label: string; placeholder: string; };
      subject: { label: string; placeholder: string; };
      message: { label: string; placeholder: string; };
    };
    submit: string;
    back: string;
  };
  footer: {
    rights: string;
    privacy: string;
    contact: string;
  };
}