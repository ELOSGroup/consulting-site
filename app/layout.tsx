import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ELOS Group | Consultoria Estratégica',
  description: 'Consultoria em Real Estate, Energy e Advisory. A tranquilidade da ligação certa.',
  keywords: ['ELOS Group', 'consultoria', 'real estate', 'energia', 'advisory']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
