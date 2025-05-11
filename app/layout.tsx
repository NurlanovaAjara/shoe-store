import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
<html lang="en">
<body className="font-poppins antialiased">
<Header />
{children}
</body>
</html>
</ClerkProvider>
  );
}
