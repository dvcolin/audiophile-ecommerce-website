import styles from '@styles/components/Button.module.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  return <button className={styles[variant]}>{children}</button>;
}
