export const locales = ["uz", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export const localeLabels: Record<Locale, string> = {
  uz: "UZ",
  en: "EN",
  ru: "RU"
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
