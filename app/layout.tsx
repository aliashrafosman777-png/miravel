import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miravel — New Perspective, Same Energy",
  description: "Trend-led women's clothing and accessories for a future-forward wardrobe.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
