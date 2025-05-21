import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: {
    template: "%s | Shoe-Store",
    default: "Shoe-Store",
  },
  description: "the best shoe store in the Karakol",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
    </ClerkProvider>
  );
}
