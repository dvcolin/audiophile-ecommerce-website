import styles from '@styles/components/Heading.module.scss';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export default function Heading({ tag: Component, children }: HeadingProps) {
  return <Component className={styles[Component]}>{children}</Component>;
}
