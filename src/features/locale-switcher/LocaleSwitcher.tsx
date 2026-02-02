import Link from "next/link";
import { Locale, localeLabels, locales } from "@/shared/config/locales";
import { cn } from "@/shared/lib/cn";
import styles from "./LocaleSwitcher.module.css";

export const LocaleSwitcher = ({ locale }: { locale: Locale }) => (
  <div className={styles.switcher}>
    {locales.map((loc) => (
      <Link
        key={loc}
        href={`/${loc}`}
        className={cn(styles.item, loc === locale && styles.active)}
      >
        {localeLabels[loc]}
      </Link>
    ))}
  </div>
);
