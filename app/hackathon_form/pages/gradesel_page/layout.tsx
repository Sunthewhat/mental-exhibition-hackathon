import styles from '../pdpa_page/page.module.css';

export default function pdpa_PageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className={styles.bg_gradient}>{children}</section>
  }