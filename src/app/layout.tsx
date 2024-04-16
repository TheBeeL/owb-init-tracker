'use client';

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import OBR from"@owlbear-rodeo/sdk"
import { setupContextMenu } from "~/utils/contextMenu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

OBR.onReady(()=>{
  setupContextMenu().catch(console.error)
})

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}