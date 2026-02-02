import { Locale } from "@/shared/config/locales";
import { content } from "@/shared/config/portfolio";
import { Section } from "@/shared/ui/section/Section";
import { Tag } from "@/shared/ui/tag/Tag";
import { Reveal } from "@/shared/ui/reveal/Reveal";
import styles from "./Skills.module.css";

export const Skills = ({ locale }: { locale: Locale }) => {
  const t = content[locale].skills;

  return (
    <Section id="skills" title={t.title} lead={t.lead}>
      <div className={styles.grid}>
        {t.groups.map((group, index) => (
          <Reveal key={group.label} delay={120 + index * 90}>
            <div className={styles.group}>
              <h3 className={styles.label}>{group.label}</h3>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
