import { Locale } from './locales';

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
    id: 'flad-cli',
    year: '2026',
    type: {
      uz: 'Open Source',
      en: 'Open Source',
      ru: 'Open Source',
    },
    stack: ['Dart', 'CLI', 'Flutter'],
    link: 'https://pub.dev/packages/flad_cli',
    repo: '',
    title: {
      uz: 'Flad CLI',
      en: 'Flad CLI',
      ru: 'Flad CLI',
    },
    description: {
      uz: "Flutter developerlari uchun CLI tool: 40+ UI komponentlarni loyihaga nusxalash, runtime dependency yo'q.",
      en: 'CLI tool for Flutter developers: copy 40+ UI components into projects with no runtime dependencies.',
      ru: 'CLI-инструмент для Flutter разработчиков: копирование 40+ UI компонентов без runtime зависимостей.',
    },
  },
  {
    id: 'yemak-uz',
    year: '2024',
    type: {
      uz: 'E-commerce',
      en: 'E-commerce',
      ru: 'E-commerce',
    },
    stack: ['Next.js', 'TypeScript', 'REST API'],
    link: 'https://yemak.uz',
    repo: '',
    title: {
      uz: 'Yemak.uz',
      en: 'Yemak.uz',
      ru: 'Yemak.uz',
    },
    description: {
      uz: 'Ovqat yetkazish platformasi: tezkor buyurtma berish, restoran katalogi va real-time tracking.',
      en: 'Food delivery platform with quick ordering, restaurant catalog, and real-time tracking.',
      ru: 'Платформа доставки еды с быстрым заказом, каталогом ресторанов и отслеживанием.',
    },
  },
  {
    id: 'owa-uz',
    year: '2024',
    type: {
      uz: 'Education',
      en: 'Education',
      ru: 'Education',
    },
    stack: ['Next.js', 'TypeScript', 'REST API'],
    link: 'https://owa.uz',
    repo: '',
    title: {
      uz: 'Open Web Academy',
      en: 'Open Web Academy',
      ru: 'Open Web Academy',
    },
    description: {
      uz: "Dasturlashni o'rganish platformasi: kurslar, amaliy darslar va zamonaviy texnologiyalar.",
      en: 'Programming education platform with courses, practical lessons, and modern technologies.',
      ru: 'Образовательная платформа: курсы программирования, практические уроки и технологии.',
    },
  },
  {
    id: 'elmed-uz',
    year: '2023',
    type: {
      uz: 'Dashboard',
      en: 'Dashboard',
      ru: 'Dashboard',
    },
    stack: ['React', 'TypeScript', 'UI Libraries'],
    link: 'https://elmed.uz',
    repo: '',
    title: {
      uz: 'Elmed.uz Dashboard',
      en: 'Elmed.uz Dashboard',
      ru: 'Elmed.uz Dashboard',
    },
    description: {
      uz: "Tibbiy dashboard: bemor ma'lumotlari, navbatlar boshqaruvi va tibbiy hisobotlar tizimi.",
      en: 'Medical dashboard with patient data, appointment management, and reporting system.',
      ru: 'Медицинский дашборд с данными пациентов, управлением записями и отчетами.',
    },
  },
  {
    id: 'suv-kerak',
    year: '2024',
    type: {
      uz: 'Mobile',
      en: 'Mobile',
      ru: 'Mobile',
    },
    stack: ['Flutter', 'Dart', 'Firebase'],
    link: '',
    repo: '',
    title: {
      uz: 'Suv Kerak',
      en: 'Suv Kerak',
      ru: 'Suv Kerak',
    },
    description: {
      uz: "Suv yetkazish mobil ilovasi: onlayn buyurtma, real-time tracking va qulay to'lov tizimi.",
      en: 'Water delivery mobile app with online ordering, real-time tracking, and easy payments.',
      ru: 'Мобильное приложение доставки воды с онлайн-заказом и отслеживанием.',
    },
  },
  {
    id: 'aroma-dashboard',
    year: '2023',
    type: {
      uz: 'Dashboard',
      en: 'Dashboard',
      ru: 'Dashboard',
    },
    stack: ['React', 'REST API', 'Chart.js'],
    link: '',
    repo: '',
    title: {
      uz: 'Aroma Dashboard',
      en: 'Aroma Dashboard',
      ru: 'Aroma Dashboard',
    },
    description: {
      uz: 'Biznes analitika dashboardi: savdo statistikasi, inventar boshqaruvi va hisobotlar.',
      en: 'Business analytics dashboard with sales statistics, inventory management, and reports.',
      ru: 'Дашборд бизнес-аналитики со статистикой продаж и управлением инвентарем.',
    },
  },
];

export const content: Record<
  Locale,
  {
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
  }
> = {
  uz: {
    meta: {
      title: 'Shohjahon Ergashev | Full-Stack va Flutter Developer',
      description: 'Minimalistik, tezkor va ishonchli web hamda mobile mahsulotlar yarataman.',
      keywords: [
        'fullstack developer',
        'flutter developer',
        'frontend developer',
        'uzbekistan developer',
        'portfolio',
      ],
    },
    nav: {
      about: 'Men haqimda',
      skills: "Ko'nikmalar",
      projects: 'Loyihalar',
      contact: 'Aloqa',
    },
    hero: {
      eyebrow: 'Portfolio',
      name: 'Shohjahon Ergashev',
      role: 'Full-Stack va Mobile (Flutter) Developer',
      tagline: 'Minimalistik, tezkor va ishonchli mahsulotlar uchun kod yozaman.',
      description: 'Eng kuchli tomonim — frontend (middle/middle+).',
      ctaPrimary: "Loyihalarni ko'rish",
      ctaSecondary: "Bog'lanish",
      highlights: [
        { label: 'Fokus', value: 'Frontend (Middle/Middle+)' },
        { label: 'Stack', value: 'Next.js, Flutter, NestJS' },
        { label: 'Yondashuv', value: 'Design → Build → Ship' },
      ],
    },
    about: {
      title: 'Men haqimda',
      lead: "Dizaynni kodga, g'oyani ishlaydigan mahsulotga aylantiraman.",
      body: "Full-stack va Flutter tajribam bilan web va mobile uchun zamonaviy, skalalanadigan yechimlar yarataman. UI/UX detallari, performans va arxitekturaga alohida e'tibor beraman.",
    },
    skills: {
      title: "Ko'nikmalar",
      lead: 'Kerakli texnologiyalar va ish jarayoni.',
      groups: [
        {
          label: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Responsive UI'],
        },
        { label: 'Backend', items: ['Node.js', 'NestJS', 'REST API', 'PostgreSQL', 'Auth'] },
        { label: 'Mobile', items: ['Flutter', 'Dart', 'Firebase', 'iOS/Android'] },
        { label: 'Tooling', items: ['Git', 'Figma', 'Docker', 'CI/CD', 'Testing'] },
      ],
    },
    projects: {
      title: 'Tanlangan loyihalar',
      lead: 'Real loyihalar: open-source CLI tool, e-commerce, dasturlash platformasi, mobil ilovalar va dashboardlar.',
      note: '',
      links: {
        live: 'Demo',
        code: 'Kod',
      },
    },
    contact: {
      title: 'Aloqa',
      lead: "Yangi loyihalar va hamkorlik takliflari uchun bog'laning.",
      items: [
        { label: 'Email', value: 'shohjahonergashev@yahoo.com' },
        { label: 'Telegram', value: 't.me/ergashevTech' },
        { label: 'GitHub', value: 'github.com/Shohjahon-n' },
      ],
    },
    footer: {
      note: 'Yangi loyihalar va hamkorlik uchun ochiqman.',
    },
  },
  en: {
    meta: {
      title: 'Shohjahon Ergashev | Full-Stack & Flutter Developer',
      description: 'I build minimal, fast, and reliable web and mobile products.',
      keywords: [
        'fullstack developer',
        'flutter developer',
        'frontend developer',
        'portfolio',
        'software developer',
      ],
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Portfolio',
      name: 'Shohjahon Ergashev',
      role: 'Full-Stack & Mobile (Flutter) Developer',
      tagline: 'I build minimal, fast, and reliable digital products.',
      description: 'Strongest in frontend (middle/middle+).',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      highlights: [
        { label: 'Focus', value: 'Frontend (Middle/Middle+)' },
        { label: 'Stack', value: 'Next.js, Flutter, NestJS' },
        { label: 'Approach', value: 'Design → Build → Ship' },
      ],
    },
    about: {
      title: 'About',
      lead: 'I turn design into code and ideas into working products.',
      body: 'With full-stack and Flutter experience, I craft modern and scalable solutions for web and mobile. I care about UI/UX detail, performance, and solid architecture.',
    },
    skills: {
      title: 'Skills',
      lead: 'Core tools and technologies I work with.',
      groups: [
        {
          label: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Responsive UI'],
        },
        { label: 'Backend', items: ['Node.js', 'NestJS', 'REST API', 'PostgreSQL', 'Auth'] },
        { label: 'Mobile', items: ['Flutter', 'Dart', 'Firebase', 'iOS/Android'] },
        { label: 'Tooling', items: ['Git', 'Figma', 'Docker', 'CI/CD', 'Testing'] },
      ],
    },
    projects: {
      title: 'Selected projects',
      lead: 'Real-world projects: open-source CLI tool, e-commerce platforms, education systems, mobile apps, and dashboards.',
      note: '',
      links: {
        live: 'Live',
        code: 'Code',
      },
    },
    contact: {
      title: 'Contact',
      lead: 'Get in touch for new projects and collaboration opportunities.',
      items: [
        { label: 'Email', value: 'shohjahonergashev@yahoo.com' },
        { label: 'Telegram', value: 't.me/ergashevTech' },
        { label: 'GitHub', value: 'github.com/Shohjahon-n' },
      ],
    },
    footer: {
      note: 'Open to new projects and collaboration.',
    },
  },
  ru: {
    meta: {
      title: 'Shohjahon Ergashev | Full-Stack и Flutter разработчик',
      description: 'Создаю минималистичные, быстрые и надежные web и mobile продукты.',
      keywords: [
        'fullstack разработчик',
        'flutter разработчик',
        'frontend разработчик',
        'портфолио',
        'software developer',
      ],
    },
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    hero: {
      eyebrow: 'Портфолио',
      name: 'Shohjahon Ergashev',
      role: 'Full-Stack и Mobile (Flutter) разработчик',
      tagline: 'Делаю минималистичные, быстрые и надежные цифровые продукты.',
      description: 'Самая сильная сторона — фронтенд (middle/middle+).',
      ctaPrimary: 'Смотреть проекты',
      ctaSecondary: 'Связаться',
      highlights: [
        { label: 'Фокус', value: 'Frontend (Middle/Middle+)' },
        { label: 'Стек', value: 'Next.js, Flutter, NestJS' },
        { label: 'Подход', value: 'Design → Build → Ship' },
      ],
    },
    about: {
      title: 'Обо мне',
      lead: 'Превращаю дизайн в код, а идеи — в работающий продукт.',
      body: 'С опытом full-stack и Flutter создаю современные и масштабируемые решения для web и mobile. Внимателен к UI/UX, производительности и архитектуре.',
    },
    skills: {
      title: 'Навыки',
      lead: 'Основные технологии и инструменты.',
      groups: [
        {
          label: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Responsive UI'],
        },
        { label: 'Backend', items: ['Node.js', 'NestJS', 'REST API', 'PostgreSQL', 'Auth'] },
        { label: 'Mobile', items: ['Flutter', 'Dart', 'Firebase', 'iOS/Android'] },
        { label: 'Tooling', items: ['Git', 'Figma', 'Docker', 'CI/CD', 'Testing'] },
      ],
    },
    projects: {
      title: 'Избранные проекты',
      lead: 'Реальные проекты: open-source CLI инструмент, e-commerce платформы, образовательные системы, мобильные приложения и дашборды.',
      note: '',
      links: {
        live: 'Демо',
        code: 'Код',
      },
    },
    contact: {
      title: 'Контакты',
      lead: 'Свяжитесь для новых проектов и сотрудничества.',
      items: [
        { label: 'Email', value: 'shohjahonergashev@yahoo.com' },
        { label: 'Telegram', value: 't.me/ergashevTech' },
        { label: 'GitHub', value: 'github.com/Shohjahon-n' },
      ],
    },
    footer: {
      note: 'Открыт для новых проектов и сотрудничества.',
    },
  },
};
