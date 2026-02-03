import { ElementType, ReactNode, CSSProperties } from 'react';
import { cn } from '@/shared/lib/cn';
import styles from './Reveal.module.css';

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export const Reveal = <T extends ElementType = 'div'>({
  as,
  delay = 0,
  className,
  children,
}: RevealProps<T>) => {
  const Comp = as || 'div';
  return (
    <Comp
      className={cn(styles.reveal, className)}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Comp>
  );
};
