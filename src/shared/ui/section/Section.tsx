import { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';
import { Container } from '@/shared/ui/container/Container';
import styles from './Section.module.css';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  children: ReactNode;
};

export const Section = ({ id, eyebrow, title, lead, className, children }: SectionProps) => (
  <section id={id} className={cn(styles.section, className)}>
    <Container>
      <div className={styles.head}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h2 className={styles.title}>{title}</h2>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
      <div className={styles.body}>{children}</div>
    </Container>
  </section>
);
