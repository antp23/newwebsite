import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iRemedy Healthcare Companies — Smarter Supply. Better Care.",
  description:
    "iRemedy replaces legacy healthcare distribution intermediaries with MetaCommerceRx™ — direct-source pricing, AI-powered procurement intelligence, and compliance-native supply chain infrastructure for providers, manufacturers, and health systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-body bg-white">
        {children}
      </body>
    </html>
  );
}
