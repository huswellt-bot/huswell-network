import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import HeaderActions from "@/components/HeaderActions";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Huswell Trading Supplier Network",
    template: "%s | Huswell Trading Supplier Network",
  },
  description:
    "A pioneering global sourcing and fulfillment hub in the Philippines for printing, box packaging, and corporate giveaways. Browse supplier profiles, compare MOQs and lead times.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white">
          <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-900"
            >
              <Image
                src="/images/logo-huswell-trading.png"
                alt="Huswell Trading Supplier Network"
                width={69}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </Link>
            <nav className="flex items-center gap-4" aria-label="Primary navigation">
              <Link
                href="/about"
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                About
              </Link>
              <HeaderActions />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-8 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              Huswell Trading Supplier Network
              <span className="mx-2 text-zinc-300">·</span>
              <Link href="/about" className="transition-colors hover:text-zinc-900">
                About
              </Link>
            </p>
            <p>From Your Needs to Our Network. We Make It Happen.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
