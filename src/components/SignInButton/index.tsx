import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton}>
      <FaGithub color="#04b361" />
      Thamyris Sant Ana
      <FiX
        color="#737380"
        className={styles.closeIcon}
        aria-label="Sair da conta"
      />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
