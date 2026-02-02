import Link from "next/link";
import { Locale } from "@/shared/config/locales";
import { Project } from "@/shared/config/portfolio";
import { Tag } from "@/shared/ui/tag/Tag";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project,
  locale,
  labels
}: {
  project: Project;
  locale: Locale;
  labels: { live: string; code: string };
}) => (
  <article className={styles.card}>
    <div className={styles.head}>
      <span className={styles.type}>{project.type[locale]}</span>
      <span className={styles.year}>{project.year}</span>
    </div>
    <h3 className={styles.title}>{project.title[locale]}</h3>
    <p className={styles.description}>{project.description[locale]}</p>
    <div className={styles.stack}>
      {project.stack.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
    {(project.link || project.repo) && (
      <div className={styles.links}>
        {project.link ? (
          <Link className={styles.link} href={project.link} target="_blank" rel="noreferrer">
            {labels.live}
          </Link>
        ) : null}
        {project.repo ? (
          <Link className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
            {labels.code}
          </Link>
        ) : null}
      </div>
    )}
  </article>
);
