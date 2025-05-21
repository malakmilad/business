import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sama aljazeera",
  description: "Sama aljazeera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            backgroundImage: "url('/sama-bg.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "auto"
          }}
        >
          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
