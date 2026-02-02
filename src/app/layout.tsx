import "@/shared/styles/globals.css";
import { ThemeScript } from "@/shared/lib/theme/ThemeScript";
import { IBM_Plex_Sans, Cormorant_Garamond } from "next/font/google";

const plex = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${plex.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
