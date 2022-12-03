import styles from '@/styles/components/Heading.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames } from '@/utils/styles';

interface HeadingProps extends BaseComponentProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const cn = classNames.bind(null, styles);

export default function Heading({
  tag: Component,
  className,
  children
}: HeadingProps) {
  return <Component className={cn(Component, className)}>{children}</Component>;
}
