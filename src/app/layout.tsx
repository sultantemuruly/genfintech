import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenFinTech",
  description: "Use AI for making investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="mb-6 flex-grow p-6">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
