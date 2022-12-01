import styles from '@/styles/components/Text.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames as cn } from '@/utils/styles';

interface TextProps extends BaseComponentProps {
  children: React.ReactNode;
}

const cx = cn.bind(null, styles);

export default function Text({ classNames, children }: TextProps) {
  return <p className={cx('container', classNames)}>{children}</p>;
}
