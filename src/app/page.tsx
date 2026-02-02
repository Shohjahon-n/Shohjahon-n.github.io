"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale } from "@/shared/config/locales";
import styles from "./root-redirect.module.css";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return (
    <main className={styles.main}>
      <p>Redirecting...</p>
      <a href={`/${defaultLocale}`}>Open portfolio</a>
    </main>
  );
}
