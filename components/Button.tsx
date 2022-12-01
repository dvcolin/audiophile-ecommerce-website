import styles from '@/styles/components/Button.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames as cn } from '@/utils/styles';

interface ButtonProps extends BaseComponentProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

const cx = cn.bind(null, styles);

export default function Button({ variant, classNames, children }: ButtonProps) {
  return <button className={cx(variant, classNames)}>{children}</button>;
}
