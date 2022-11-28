import styles from '@styles/components/Heading.module.scss';

interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'default' | 'inverse';
  children: React.ReactNode;
}

export default function Heading({
  tag: Component = 'h2',
  color = 'default',
  children
}: HeadingProps) {
  return (
    <Component className={`${styles[Component]} ${styles[`color--${color}`]}`}>
      {children}
    </Component>
  );
}
