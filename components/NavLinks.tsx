import NavLink from '@/components/NavLink';
import styles from '@/styles/components/NavLinks.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { BaseRoutes, ProductsRoutes } from '@/utils/routes';
import { classNames } from '@/utils/styles';

interface NavLinksProps extends BaseComponentProps {
  variant: 'header' | 'footer';
}

const cn = classNames.bind(null, styles);

export default function NavLinks({ variant, className }: NavLinksProps) {
  return (
    <ul className={cn(variant, className)} role="list">
      <NavLink href={BaseRoutes.Home}>Home</NavLink>
      <NavLink href={`${BaseRoutes.Products + ProductsRoutes.Headphones}`}>
        Headphones
      </NavLink>
      <NavLink href={`${BaseRoutes.Products + ProductsRoutes.Speakers}`}>
        Speakers
      </NavLink>
      <NavLink href={`${BaseRoutes.Products + ProductsRoutes.Earphones}`}>
        Earphones
      </NavLink>
    </ul>
  );
}
