import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.headerLink} href="/">
        Works
      </a>
      <a className={styles.headerLink} href="/">
        Blog
      </a>
      <a className={styles.headerLink} href="/">
        Contact
      </a>
    </header>
  );
}

export default Header;
