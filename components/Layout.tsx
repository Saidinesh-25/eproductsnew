import Head from "next/head";
import Link from "next/link";
import styles from "../styles/layout.module.css";

export default function Layout({ children, title = "Next.js App" }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.body}>
        <div className={styles.navbar}>
          <h1>Basics Admin</h1>
          <Link href="/">
            <text>Logout</text>
          </Link>

          <div className={styles.sidebar}>
            <div>
              <Link href={"/admins/products"}>Products</Link>
            </div>
            <div>
              <Link href={"/admins/products/create"}>Add Products</Link>
            </div>
          </div>
        </div>
      </div>

      <main className={styles.child}>{children}</main>
    </>
  );
}
