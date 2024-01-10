import './globals.css';
import type { Metadata } from 'next';
import { Dosis } from 'next/font/google'

const dosis = Dosis({subsets: ["latin"], variable: "--font-dosis"});

export const metadata: Metadata = {
  title: 'PinkCloud - Voyager',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dosis.variable}`}>
        {children}
      </body>
    </html>
  )
}
