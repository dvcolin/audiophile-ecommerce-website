import styles from '@/styles/components/Text.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames } from '@/utils/styles';

interface TextProps extends BaseComponentProps {
  children: React.ReactNode;
}

const cn = classNames.bind(null, styles);

export default function Text({ className, children }: TextProps) {
  return <p className={cn('container', className)}>{children}</p>;
}
