import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
export function SignInButton() {
  const { data } = useSession();

  return data ? (
    <button onClick={() => signOut()} className={styles.signInButton}>
      <FaGithub color="#04b361" />
      Thamyris Sant Ana
      <FiX
        color="#737380"
        className={styles.closeIcon}
        aria-label="Logout account"
      />
    </button>
  ) : (
    <button onClick={() => signIn("github")} className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
