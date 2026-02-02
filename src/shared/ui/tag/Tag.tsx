import { ReactNode } from "react";
import styles from "./Tag.module.css";

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className={styles.tag}>{children}</span>
);
