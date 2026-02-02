import { Locale } from "@/shared/config/locales";
import { content, projects } from "@/shared/config/portfolio";
import { Section } from "@/shared/ui/section/Section";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { Reveal } from "@/shared/ui/reveal/Reveal";
import styles from "./Projects.module.css";

export const Projects = ({ locale }: { locale: Locale }) => {
  const t = content[locale].projects;

  return (
    <Section id="projects" title={t.title} lead={t.lead}>
      <p className={styles.note}>{t.note}</p>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={120 + index * 90}>
            <ProjectCard project={project} locale={locale} labels={t.links} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
