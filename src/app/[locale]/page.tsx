import { notFound } from 'next/navigation';
import { About } from '@/widgets/about/About';
import { Contact } from '@/widgets/contact/Contact';
import { Hero } from '@/widgets/hero/Hero';
import { Projects } from '@/widgets/projects/Projects';
import { Skills } from '@/widgets/skills/Skills';
import { content } from '@/shared/config/portfolio';
import { isLocale, locales } from '@/shared/config/locales';
import { site } from '@/shared/config/site';

export const dynamic = 'force-static';

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const t = content[locale];
  const localeMap = {
    uz: 'uz_UZ',
    en: 'en_US',
    ru: 'ru_RU',
  };

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        uz: '/uz/',
        en: '/en/',
        ru: '/ru/',
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: 'website',
      siteName: site.name,
      locale: localeMap[locale],
    },
    twitter: {
      card: 'summary',
      title: t.meta.title,
      description: t.meta.description,
    },
  };
};

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main>
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
