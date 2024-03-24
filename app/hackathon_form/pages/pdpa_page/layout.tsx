import styles from './page.module.css';

export default function pdpa_PageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className={styles.bg_gradient}>{children}</section>
  }