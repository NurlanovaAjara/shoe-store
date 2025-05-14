import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: {
    template: "%s | Eshop",
    default: "Eshop",
  },
  description: "The Best Eshop App Made at IT Academy Karakol",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>{children}</main>

            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
