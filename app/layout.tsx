import type React from "react";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/scroll-reveal";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <title>Daniel Marques | Frontend Engineer</title>
      <meta
        name="description"
        content="Frontend Engineer specialized in React, TypeScript & scalable web apps"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollReveal>{children}</ScrollReveal>
        </ThemeProvider>
      </body>
    </html>
  );
}
