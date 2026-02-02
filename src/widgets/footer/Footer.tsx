import { Locale } from "@/shared/config/locales";
import { content } from "@/shared/config/portfolio";
import { Container } from "@/shared/ui/container/Container";
import styles from "./Footer.module.css";

export const Footer = ({ locale }: { locale: Locale }) => {
  const t = content[locale].footer;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span className={styles.note}>{t.note}</span>
        <span className={styles.copy}>© {year} Shohjahon Ergashev</span>
      </Container>
    </footer>
  );
};
