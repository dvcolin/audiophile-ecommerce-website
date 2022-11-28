import styles from '@styles/components/Text.module.scss';

interface TextProps {
  children: React.ReactNode;
}

export default function Text({ children }: TextProps) {
  return <p className={styles.container}>{children}</p>;
}
