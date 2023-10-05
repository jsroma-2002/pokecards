import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemon Cards",
  description: "A simple app to show pokemon cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
