import type { Metadata } from "next";
import "./globals.css";
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
<html lang="en">
<body className="font-poppins antialiased">{children}</body>
</html>
);
}