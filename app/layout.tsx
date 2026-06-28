import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ToolVerse - Student Tools Directory',
  description: 'Discover the best tools for students worldwide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
