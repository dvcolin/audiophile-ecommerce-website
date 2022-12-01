import styles from '@/styles/components/Heading.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames as cn } from '@/utils/styles';

interface HeadingProps extends BaseComponentProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const cx = cn.bind(null, styles);

export default function Heading({
  tag: Component,
  classNames,
  children
}: HeadingProps) {
  return (
    <Component className={cx(Component, classNames)}>{children}</Component>
  );
}
