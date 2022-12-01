import styles from '@/styles/components/Text.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames } from '@/utils/styles';

interface TextProps extends BaseComponentProps {
  children: React.ReactNode;
}

const cx = classNames.bind(null, styles);

export default function Text({ className, children }: TextProps) {
  return <p className={cx('container', className)}>{children}</p>;
}
