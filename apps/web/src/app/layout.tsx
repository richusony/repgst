import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RepGST - Enterprise GST Compliance",
    template: "%s | RepGST",
  },
  description:
    "RepGST automates GST calculations, invoices, returns, audit logs, and compliance workflows for modern Indian businesses.",
  metadataBase: new URL("https://repgst.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
