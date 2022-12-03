import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/components/NavLink.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames } from '@/utils/styles';

interface NavLinkProps extends BaseComponentProps, LinkProps {
  children: React.ReactNode;
}

const cn = classNames.bind(null, styles);

function NavLink(props: NavLinkProps) {
  const router = useRouter();
  const { className, href, ...rest } = props;
  return (
    <li role="listitem">
      <Link
        className={cn(
          'container',
          { active: router.pathname === href },
          className
        )}
        href={href}
        {...rest}
      />
    </li>
  );
}

export default NavLink;
