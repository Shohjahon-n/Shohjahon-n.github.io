import { Locale } from "./locales";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  id: string;
  year: string;
  type: LocalizedText;
  stack: string[];
  link?: string;
  repo?: string;
  title: LocalizedText;
  description: LocalizedText;
};

export const projects: Project[] = [
  {
    id: "noir-commerce",
    year: "2025",
    type: {
      uz: "E-commerce",
      en: "E-commerce",
      ru: "E-commerce"
    },
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "",
    repo: "",
    title: {
      uz: "Noir Commerce",
      en: "Noir Commerce",
      ru: "Noir Commerce"
    },
    description: {
      uz: "Minimalistik savdo platformasi: tezkor katalog, filtrlar va toza checkout tajribasi.",
      en: "Minimalist commerce platform with fast catalog, smart filters, and clean checkout flow.",
      ru: "Минималистичная платформа продаж: быстрый каталог, умные фильтры и чистый checkout."
    }
  },
  {
    id: "nimbus-crm",
    year: "2024",
    type: {
      uz: "SaaS",
      en: "SaaS",
      ru: "SaaS"
    },
    stack: ["React", "Node.js", "REST API", "PostgreSQL"],
    link: "",
    repo: "",
    title: {
      uz: "Nimbus CRM",
      en: "Nimbus CRM",
      ru: "Nimbus CRM"
    },
    description: {
      uz: "Sotuv pipeline va jamoa samaradorligini boshqarish uchun CRM interfeysi.",
      en: "CRM interface to manage sales pipelines and team performance with clarity.",
      ru: "CRM-интерфейс для управления воронками продаж и продуктивностью команды."
    }
  },
  {
    id: "pulse-care",
    year: "2024",
    type: {
      uz: "Mobile",
      en: "Mobile",
      ru: "Mobile"
    },
    stack: ["Flutter", "Dart", "Firebase"],
    link: "",
    repo: "",
    title: {
      uz: "Pulse Care",
      en: "Pulse Care",
      ru: "Pulse Care"
    },
    description: {
      uz: "Sog'liq monitoringi va kundalik odatlar uchun yengil mobil ilova.",
      en: "Lightweight mobile app for health tracking and daily habits.",
      ru: "Легкое мобильное приложение для здоровья и ежедневных привычек."
    }
  },
  {
    id: "atlas-portfolio",
    year: "2023",
    type: {
      uz: "Portfolio",
      en: "Portfolio",
      ru: "Портфолио"
    },
    stack: ["Next.js", "CSS Modules", "Vercel"],
    link: "",
    repo: "",
    title: {
      uz: "Atlas Portfolio",
      en: "Atlas Portfolio",
      ru: "Atlas Portfolio"
    },
    description: {
      uz: "Ijodkorlar uchun vizual portfolio sahifasi, minimal layout va kuchli vizual hierarxiya.",
      en: "Visual portfolio page for creators with minimal layout and strong hierarchy.",
      ru: "Визуальная страница портфолио для креаторов с минимальным лэйаутом."
    }
  }
];

export const content: Record<Locale, {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    tagline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    highlights: Array<{ label: string; value: string }>;
  };
  about: {
    title: string;
    lead: string;
    body: string;
  };
  skills: {
    title: string;
    lead: string;
    groups: Array<{ label: string; items: string[] }>;
  };
  projects: {
    title: string;
    lead: string;
    note: string;
    links: {
      live: string;
      code: string;
    };
  };
  contact: {
    title: string;
    lead: string;
    items: Array<{ label: string; value: string }>;
  };
  footer: {
    note: string;
  };
}> = {
  uz: {
    meta: {
      title: "Shohjahon Ergashev | Full-Stack va Flutter Developer",
      description: "Minimalistik, tezkor va ishonchli web hamda mobile mahsulotlar yarataman.",
      keywords: ["fullstack developer", "flutter developer", "frontend developer", "uzbekistan developer", "portfolio"]
    },
    nav: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa"
    },
    hero: {
      eyebrow: "Portfolio",
      name: "Shohjahon Ergashev",
      role: "Full-Stack va Mobile (Flutter) Developer",
      tagline: "Minimalistik, tezkor va ishonchli mahsulotlar uchun kod yozaman.",
      description: "Eng kuchli tomonim — frontend (middle/middle+).",
      ctaPrimary: "Loyihalarni ko'rish",
      ctaSecondary: "Bog'lanish",
      highlights: [
        { label: "Fokus", value: "Frontend (Middle/Middle+)" },
        { label: "Stack", value: "Next.js, Flutter, Node.js" },
        { label: "Yondashuv", value: "Design → Build → Ship" }
      ]
    },
    about: {
      title: "Men haqimda",
      lead: "Dizaynni kodga, g'oyani ishlaydigan mahsulotga aylantiraman.",
      body: "Full-stack va Flutter tajribam bilan web va mobile uchun zamonaviy, skalalanadigan yechimlar yarataman. UI/UX detallari, performans va arxitekturaga alohida e'tibor beraman."
    },
    skills: {
      title: "Ko'nikmalar",
      lead: "Kerakli texnologiyalar va ish jarayoni.",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Responsive UI"] },
        { label: "Backend", items: ["Node.js", "Express", "REST API", "PostgreSQL", "Auth"] },
        { label: "Mobile", items: ["Flutter", "Dart", "Firebase", "iOS/Android"] },
        { label: "Tooling", items: ["Git", "Figma", "Docker", "CI/CD", "Testing"] }
      ]
    },
    projects: {
      title: "Tanlangan loyihalar",
      lead: "Hozircha mock loyihalar. Keyin haqiqiylari bilan almashtirasiz.",
      note: "Loyihalar bitta ro'yxatda saqlangan — osongina tahrirlash mumkin.",
      links: {
        live: "Demo",
        code: "Kod"
      }
    },
    contact: {
      title: "Aloqa",
      lead: "Hamkorlik uchun yozing. Kontaktlarni keyin yangilaysiz.",
      items: [
        { label: "Email", value: "you@example.com" },
        { label: "Telegram", value: "t.me/yourhandle" },
        { label: "GitHub", value: "github.com/yourname" }
      ]
    },
    footer: {
      note: "Yangi loyihalar va hamkorlik uchun ochiqman."
    }
  },
  en: {
    meta: {
      title: "Shohjahon Ergashev | Full-Stack & Flutter Developer",
      description: "I build minimal, fast, and reliable web and mobile products.",
      keywords: ["fullstack developer", "flutter developer", "frontend developer", "portfolio", "software developer"]
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Portfolio",
      name: "Shohjahon Ergashev",
      role: "Full-Stack & Mobile (Flutter) Developer",
      tagline: "I build minimal, fast, and reliable digital products.",
      description: "Strongest in frontend (middle/middle+).",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      highlights: [
        { label: "Focus", value: "Frontend (Middle/Middle+)" },
        { label: "Stack", value: "Next.js, Flutter, Node.js" },
        { label: "Approach", value: "Design → Build → Ship" }
      ]
    },
    about: {
      title: "About",
      lead: "I turn design into code and ideas into working products.",
      body: "With full-stack and Flutter experience, I craft modern and scalable solutions for web and mobile. I care about UI/UX detail, performance, and solid architecture."
    },
    skills: {
      title: "Skills",
      lead: "Core tools and technologies I work with.",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Responsive UI"] },
        { label: "Backend", items: ["Node.js", "Express", "REST API", "PostgreSQL", "Auth"] },
        { label: "Mobile", items: ["Flutter", "Dart", "Firebase", "iOS/Android"] },
        { label: "Tooling", items: ["Git", "Figma", "Docker", "CI/CD", "Testing"] }
      ]
    },
    projects: {
      title: "Selected projects",
      lead: "Mock projects for now. Replace them with real work later.",
      note: "Projects live in a single list for quick edits.",
      links: {
        live: "Live",
        code: "Code"
      }
    },
    contact: {
      title: "Contact",
      lead: "Reach out for collaboration. Update the placeholders later.",
      items: [
        { label: "Email", value: "you@example.com" },
        { label: "Telegram", value: "t.me/yourhandle" },
        { label: "GitHub", value: "github.com/yourname" }
      ]
    },
    footer: {
      note: "Open to new projects and collaboration."
    }
  },
  ru: {
    meta: {
      title: "Shohjahon Ergashev | Full-Stack и Flutter разработчик",
      description: "Создаю минималистичные, быстрые и надежные web и mobile продукты.",
      keywords: ["fullstack разработчик", "flutter разработчик", "frontend разработчик", "портфолио", "software developer"]
    },
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты"
    },
    hero: {
      eyebrow: "Портфолио",
      name: "Shohjahon Ergashev",
      role: "Full-Stack и Mobile (Flutter) разработчик",
      tagline: "Делаю минималистичные, быстрые и надежные цифровые продукты.",
      description: "Самая сильная сторона — фронтенд (middle/middle+).",
      ctaPrimary: "Смотреть проекты",
      ctaSecondary: "Связаться",
      highlights: [
        { label: "Фокус", value: "Frontend (Middle/Middle+)" },
        { label: "Стек", value: "Next.js, Flutter, Node.js" },
        { label: "Подход", value: "Design → Build → Ship" }
      ]
    },
    about: {
      title: "Обо мне",
      lead: "Превращаю дизайн в код, а идеи — в работающий продукт.",
      body: "С опытом full-stack и Flutter создаю современные и масштабируемые решения для web и mobile. Внимателен к UI/UX, производительности и архитектуре."
    },
    skills: {
      title: "Навыки",
      lead: "Основные технологии и инструменты.",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Responsive UI"] },
        { label: "Backend", items: ["Node.js", "Express", "REST API", "PostgreSQL", "Auth"] },
        { label: "Mobile", items: ["Flutter", "Dart", "Firebase", "iOS/Android"] },
        { label: "Tooling", items: ["Git", "Figma", "Docker", "CI/CD", "Testing"] }
      ]
    },
    projects: {
      title: "Избранные проекты",
      lead: "Пока это mock-проекты. Позже замените на реальные.",
      note: "Проекты хранятся в одном списке для быстрого редактирования.",
      links: {
        live: "Демо",
        code: "Код"
      }
    },
    contact: {
      title: "Контакты",
      lead: "Пишите для сотрудничества. Позже обновите placeholders.",
      items: [
        { label: "Email", value: "you@example.com" },
        { label: "Telegram", value: "t.me/yourhandle" },
        { label: "GitHub", value: "github.com/yourname" }
      ]
    },
    footer: {
      note: "Открыт для новых проектов и сотрудничества."
    }
  }
};
