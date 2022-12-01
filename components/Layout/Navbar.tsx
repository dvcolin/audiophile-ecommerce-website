import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Logo from '@/components/Logo';
import NavLinks from '@/components/NavLinks';
import cartIcon from '@/public/svgs/shared/icon-cart.svg';
import hamburgerIcon from '@/public/svgs/shared/icon-hamburger.svg';
import styles from '@/styles/components/Navbar.module.scss';
import { classNames } from '@/utils/styles';

const cn = classNames.bind(null, styles);

export default function Navbar() {
  return (
    <div className={cn('container')}>
      <nav className={cn('nav')}>
        <Button variant="icon" className={cn('hamburgerButton')}>
          <Image src={hamburgerIcon} alt="Toggle navigation" />
        </Button>
        <Link className={cn('logoLink')} href="/">
          <Logo />
        </Link>
        <NavLinks variant="header" />
        <Button variant="icon" className={cn('cartButton')}>
          <Image src={cartIcon} alt="Shopping cart" />
        </Button>
      </nav>
    </div>
  );
}
