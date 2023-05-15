import type { NextPage } from "next";
import styles from "pages/index.module.css";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const direct = useRouter();
  const handleRoute = () => {
    direct.push("/admins/products");
  };
  return (
    <div className={styles.body}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.h1}>Welcome to our site</h1>
        <button className={styles.button} onClick={handleRoute}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Home;
