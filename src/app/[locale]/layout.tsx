import { notFound } from 'next/navigation';
import { Footer } from '@/widgets/footer/Footer';
import { Header } from '@/widgets/header/Header';
import { isLocale, Locale } from '@/shared/config/locales';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Header locale={locale as Locale} />
      {children}
      <Footer locale={locale as Locale} />
    </>
  );
}
