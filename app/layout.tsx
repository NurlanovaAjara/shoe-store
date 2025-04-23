import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: {
    template: "%s | Shoe-Store",
    default: "Shoe-Store",
  },
  description: "The Best Shoe-Store App Made at Karakol City",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
