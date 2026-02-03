import { Locale } from '@/shared/config/locales';
import { content } from '@/shared/config/portfolio';
import { Section } from '@/shared/ui/section/Section';
import styles from './About.module.css';

export const About = ({ locale }: { locale: Locale }) => {
  const t = content[locale].about;

  return (
    <Section id="about" title={t.title} lead={t.lead}>
      <p className={styles.body}>{t.body}</p>
    </Section>
  );
};
