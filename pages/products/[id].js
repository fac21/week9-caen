import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../components/layout.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
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
