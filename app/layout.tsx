import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'IELTS.uz — Ingliz tilini AI bilan o‘rganing', description: 'O‘zbek tilida IELTS tayyorgarligi uchun AI ustoz.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="uz"><body>{children}</body></html>; }
