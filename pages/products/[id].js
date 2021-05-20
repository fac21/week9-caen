import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../components/layout.module.css";
import { getAllProductNames } from "../../database/model";
import { db } from "../../database/connection";
import Link from "next/link";

//returns an array of possible values for name
export async function getStaticPaths() {
  const allProductNames = await getAllProductNames();
  console.log(allProductNames); // [ { name: 'Baron Bigod Brie' }, { name: 'Chabichou de Poitou' } ]
  const productNameArray = allProductNames.map((item) => {
    return { params: { id: item.name } };
  });
  // item.name.replace(/\s/g, "%20"
  console.log(productNameArray);
  return {
    paths: productNameArray,
    fallback: false,
  };
}

//Error: Invalid value returned from getStaticPaths in /products/[id]. Received undefined Expected: { paths: [], fallback: boolean }
//See here for more info: https://nextjs.org/docs/messages/invalid-getstaticpaths-value

// [ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ]

function getCheeseData(id) {
  console.log(typeof id); //Baron Bigod Brie
  return db
    .query(`SELECT * FROM cheeses WHERE name = ($1)`, [id])
    .then((result) => result.rows[0]);
}

//fetches necessary data for the cheese with id
export async function getStaticProps({ params }) {
  // Fetch necessary data for the cheese page using params.id
  const cheeseData = await getCheeseData(params.id);
  return {
    props: {
      cheeseData,
    },
  };
}

//a react component to render the page
export default function Cheese({ cheeseData }) {
  return (
    <Layout>
      <article>
        <h1 className={styles.product_name}>{cheeseData.name}</h1>
        <img className={styles.product_image}>{cheeseData.image}</img>
        <p className={styles.product_description}>{cheeseData.description}</p>
        <p className={styles.product_price}>{cheeseData.price}</p>
        <Link href="/basket">
          <a>
            <p className={styles.add_to_basket}>{cheeseData.add_to_basket}</p>
          </a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: cheeseData.contentHtml }} />
      </article>
    </Layout>
  );
}
