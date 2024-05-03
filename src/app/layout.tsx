import type { Metadata } from "next";
import "../../styles/globals.css";
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['500', '700', '900'],
  variable: '--font-family-montserrat'
});

export const metadata: Metadata = {
  title: "Lista de tarefas",
  description: "Site criado para organizar suas tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={montserrat.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
