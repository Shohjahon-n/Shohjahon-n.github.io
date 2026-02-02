import Link from "next/link";
import { Locale } from "@/shared/config/locales";
import { content } from "@/shared/config/portfolio";
import { Container } from "@/shared/ui/container/Container";
import { Reveal } from "@/shared/ui/reveal/Reveal";
import styles from "./Hero.module.css";

export const Hero = ({ locale }: { locale: Locale }) => {
  const t = content[locale];
  const base = `/${locale}`;

  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <Reveal as="span" className={styles.eyebrow}>
            {t.hero.eyebrow}
          </Reveal>
          <Reveal as="h1" className={styles.title} delay={120}>
            {t.hero.name}
          </Reveal>
          <Reveal as="p" className={styles.role} delay={220}>
            {t.hero.role}
          </Reveal>
          <Reveal as="p" className={styles.tagline} delay={320}>
            {t.hero.tagline}
          </Reveal>
          <Reveal as="p" className={styles.description} delay={420}>
            {t.hero.description}
          </Reveal>
          <div className={styles.actions}>
            <Link className={styles.primary} href={`${base}#projects`}>
              {t.hero.ctaPrimary}
            </Link>
            <Link className={styles.secondary} href={`${base}#contact`}>
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
        <Reveal className={styles.panel} delay={300}>
          <div className={styles.panelInner}>
            {t.hero.highlights.map((item) => (
              <div key={item.label} className={styles.panelItem}>
                <span className={styles.panelLabel}>{item.label}</span>
                <span className={styles.panelValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
