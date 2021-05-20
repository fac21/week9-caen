import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Artisinal Cows Homepage" />
        {/* <meta name="og:title" content="{pageName}" /> */}
      </Head>
      <header className={styles.navbar}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="/logo.png" alt="logo"></img>
          </a>
        </Link>
        <div className={styles.sub_navbar}>
          <Link href="/login">
            <a>
              <h3>Login</h3>
            </a>
          </Link>
          <Link href="/basket">
            <a>
              <img
                className={styles.navbar_elements}
                src="/shopping-cart.svg"
                alt="shopping cart"
              ></img>
            </a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
