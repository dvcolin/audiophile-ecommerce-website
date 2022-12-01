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
  Omit<LinkProps, keyof BaseProps> & {
    as: 'link';
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const cn = classNames.bind(null, styles);

export default function Button(props: ButtonProps) {
  const { className, variant } = props;
  const allClassNames = cn(variant, className);

  if (props.as === 'link') {
    const { variant, className, as, ...rest } = props;
    return <Link className={allClassNames} {...rest} />;
  } else {
    const { variant, className, as, ...rest } = props;
    return <button className={allClassNames} {...rest} />;
  }
}
