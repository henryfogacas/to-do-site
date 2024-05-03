import type { Metadata } from "next";
import "../../styles/globals.css";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['500', '700', '900'],
  variable: '--font-family-montserrat'
});

export const metadata: Metadata = {
  title: "To do site",
  description: "Site created to manage your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
