import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "Fortnite | Epic Games",
  description: "Create and play with friends for free in Fortnite. Explore games, concerts, live events and more, or be the last player standing in Battle Royale and Zero Build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
