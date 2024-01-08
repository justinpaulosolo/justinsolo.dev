import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import MainNav from "./components/main-nav";
import { cn } from "@/lib/utils";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Justin Solo - Full Stack Developer",
  description: "Justin Solo personal portfolio / website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-white font-sans text-neutral-700 antialiased dark:bg-[#111010] dark:text-neutral-200",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <MainNav />
            <main className="mb-10 flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
