import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home({ allProductsData }) {
  return (
    <Layout home>
      <section className={styles.landing}>
        <h1 className={styles.heading}>
          Artisinal Cheeses from Artisinal Cows
        </h1>

        <img
          className={styles.down_arrow}
          src="arrow-down.svg"
          alt="downwards arrow"
        ></img>
      </section>
      <section className="product-grid"></section>
    </Layout>
  );
}
