import './globals.css';
import { Fredoka, Space_Grotesk } from 'next/font/google';

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '500', '600'] });
const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'Alejandro De La Mora | AI Solutions Architect',
  description:
    'AI Solutions Architect with expertise in GenAI, automation, and cloud architecture.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} ${grotesk.className}`}>{children}</body>
    </html>
  );
}
