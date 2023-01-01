import Image from "next/image";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContant}>
        <Image width={70} height={70} src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active} href="#">
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
      </div>
    </header>
  );
}
