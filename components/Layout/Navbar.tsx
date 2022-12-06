import Link from 'next/link';

import CartIcon from '@/public/svgs/shared/icon-cart.svg';
import HamburgerIcon from '@/public/svgs/shared/icon-hamburger.svg';
import Logo from '@/public/svgs/shared/logo.svg';
import styles from '@/styles/components/Navbar.module.scss';
import { BaseRoutes } from '@/utils/routes';

import Button from '../Button';
import NavLinks from '../NavLinks';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Button variant="icon" className={styles.hamburgerButton}>
          <HamburgerIcon />
        </Button>
        <Link className={styles.logoLink} href={BaseRoutes.Home}>
          <Logo />
        </Link>
        <NavLinks variant="header" />
        <Button variant="icon" className={styles.cartButton}>
          <CartIcon />
        </Button>
      </nav>
    </div>
  );
}
