import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import styles from "../../components/layout.module.css";
import Link from "next/link";
import CheeseCard from "../components/cheeseCard";
import Layout from "../components/layout";

export default function Basket({ postData }) {
  return (
    <Layout>
      <article>
        <h1 className={styles.product_name}>{postData.name}</h1>
        <img className={styles.product_image}>{postData.image}</img>
        <p className={styles.product_description}>{postData.description}</p>
        <p className={styles.product_price}>{postData.price}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
