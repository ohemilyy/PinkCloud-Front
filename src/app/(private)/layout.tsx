import './styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Dashboard',
  description: '',
}

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    {children}
  </>
}
