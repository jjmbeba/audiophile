import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "../components/Footer";
import Provider from "./_trpc/Provider";
import { NextUiProvider } from "../NextUIProvider";
import { Toaster } from "../components/ui/toaster";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Music devices e-commerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NextUiProvider>
          <Provider>{children}</Provider>
          <Footer />
          <Toaster/>
        </NextUiProvider>
      </body>
    </html>
  );
}
