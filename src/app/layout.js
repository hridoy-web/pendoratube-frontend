import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const interFont = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const lexendFont = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  title: {
    default: "PendoraTube - Watch & Share Videos",
    template: "%s | PendoraTube",
  },
  description: "Next-generation video sharing platform built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${lexendFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />

        <main className="grow">
          {children}
        </main>

      </body>
    </html>
  );
}
