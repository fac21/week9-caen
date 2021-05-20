import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import styles from "../../components/layout.module.css";
import Link from "next/link";
import CheeseCard from "../components/cheeseCard";
import Layout from "../components/layout";

import { parseCookies } from "../helpers/index";

export default function HomePage({ data }) {
  return (
    <>
      <div>
        <h1>Homepage </h1>
        <p>Data from cookie: {data.user}</p>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const cheeseData = await getPostData(params.id);
  return {
    props: {
      cheeseData,
    },
  };
}

// export default function Basket({ cheeseData }) {
//   return (
//     <Layout>
//       <article>
//         Hello
//         {/* <h1 className={styles.product_name}>{postData.name}</h1>
//         <img className={styles.product_image}>{postData.image}</img>
//         <p className={styles.product_description}>{postData.description}</p>
//         <p className={styles.product_price}>{postData.price}</p>
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
//       </article>
//     </Layout>
//   );
// }

HomePage.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
