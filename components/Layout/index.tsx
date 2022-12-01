import { Manrope } from '@next/font/google';

import styles from '@/styles/components/Layout.module.scss';

import Navbar from './Navbar';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--ff-body'
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${manrope.variable}`}>
      <div className={styles.container}>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
