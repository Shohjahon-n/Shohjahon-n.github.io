import { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import styles from "./Container.module.css";

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn(styles.container, className)}>{children}</div>
);
