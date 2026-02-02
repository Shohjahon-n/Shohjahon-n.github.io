import { Locale } from "@/shared/config/locales";
import { content } from "@/shared/config/portfolio";
import { Section } from "@/shared/ui/section/Section";
import { Reveal } from "@/shared/ui/reveal/Reveal";
import styles from "./Contact.module.css";

const getHref = (value: string) => {
  if (value.includes("@")) {
    return `mailto:${value}`;
  }
  if (value.startsWith("t.me/")) {
    return `https://${value}`;
  }
  if (value.startsWith("github.com/")) {
    return `https://${value}`;
  }
  return value;
};

export const Contact = ({ locale }: { locale: Locale }) => {
  const t = content[locale].contact;

  return (
    <Section id="contact" title={t.title} lead={t.lead}>
      <Reveal delay={160}>
        <div className={styles.card}>
          {t.items.map((item) => (
            <div key={item.label} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <a className={styles.value} href={getHref(item.value)}>
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};
