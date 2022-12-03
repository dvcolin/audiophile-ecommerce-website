import type { LinkProps } from 'next/link';
import Link from 'next/link';

import styles from '@/styles/components/Button.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames } from '@/utils/styles';

interface BaseProps extends BaseComponentProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'icon';
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps | 'as'> & {
    as: 'link';
  };

export type ButtonAsExternalLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'externalLink';
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternalLink;

const cn = classNames.bind(null, styles);

export default function Button(props: ButtonProps) {
  const { as, className, variant } = props;
  const allClassNames = cn(variant, className);

  if (as === 'link') {
    const { as, variant, className, ...rest } = props;
    return <Link className={allClassNames} {...rest} />;
  } else if (as === 'externalLink') {
    const { as, variant, className, ...rest } = props;
    return (
      <a
        className={cn(allClassNames, 'externalLink')}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      />
    );
  } else {
    const { as, variant, className, ...rest } = props;
    return <button className={allClassNames} {...rest} />;
  }
}
