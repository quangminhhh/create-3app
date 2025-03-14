import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="w-full bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          T3 Gallery
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/register" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
