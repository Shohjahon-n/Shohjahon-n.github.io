import Link from 'next/link';
import { Locale } from '@/shared/config/locales';
import { content } from '@/shared/config/portfolio';
import { Container } from '@/shared/ui/container/Container';
import { LocaleSwitcher } from '@/features/locale-switcher/LocaleSwitcher';
import { ThemeToggle } from '@/features/theme-toggle/ThemeToggle';
import styles from './Header.module.css';

export const Header = ({ locale }: { locale: Locale }) => {
  const t = content[locale];
  const base = `/${locale}`;

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href={base} className={styles.logo} aria-label={t.hero.name}>
          <span className={styles.mark}>SE</span>
          <span className={styles.name}>Shohjahon</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href={`${base}#about`}>{t.nav.about}</Link>
          <Link href={`${base}#skills`}>{t.nav.skills}</Link>
          <Link href={`${base}#projects`}>{t.nav.projects}</Link>
          <Link href={`${base}#contact`}>{t.nav.contact}</Link>
        </nav>
        <div className={styles.controls}>
          <LocaleSwitcher locale={locale} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
