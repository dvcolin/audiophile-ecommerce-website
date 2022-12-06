import Link from 'next/link';

import FacebookIcon from '@/public/svgs/shared/icon-facebook.svg';
import InstagramIcon from '@/public/svgs/shared/icon-instagram.svg';
import TwitterIcon from '@/public/svgs/shared/icon-twitter.svg';
import Logo from '@/public/svgs/shared/logo.svg';
import styles from '@/styles/components/Footer.module.scss';
import { BaseRoutes } from '@/utils/routes';

import NavLinks from '../NavLinks';
import SocialMediaLink from '../SocialMediaLink';
import Text from '../Text';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.logoLink} href={BaseRoutes.Home}>
          <Logo />
        </Link>
        <NavLinks className={styles.navLinks} variant="footer" />
        <Text className={styles.description}>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </Text>

        <Text className={styles.copyrightText}>
          Copyright 2021. All Rights Reserved
        </Text>
        <ul className={styles.socialMediaLinks} role="list">
          <SocialMediaLink
            href="https://github.com/dvcolin/audiophile-ecommerce-website"
            icon={<FacebookIcon />}
          />
          <SocialMediaLink
            href="https://github.com/dvcolin/audiophile-ecommerce-website"
            icon={<TwitterIcon />}
          />
          <SocialMediaLink
            href="https://github.com/dvcolin/audiophile-ecommerce-website"
            icon={<InstagramIcon />}
          />
        </ul>
      </div>
    </footer>
  );
}
