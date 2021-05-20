import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../components/layout.module.css";
import { getAllProductNames } from "../../database/model";

//returns an array of possible values for id
export async function getStaticPaths() {
  const allProductNames = await getAllProductNames();
  console.log(allProductNames); // [{id: 1}, {id: 2}]
  const productNameArray = allProductNames.map((item) => {
    return { params: { name: item.name } };
  });
  console.log(productNameArray);
  return {
    productNameArray,
    fallback: false,
  };
}

// [ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ]

function getCheeseData() {
  return db
    .query(`SELECT all FROM cheeses WHERE id = {id}`)
    .then((result) => result.rows);
}

//fetches necessary data for the cheese with id
export async function getStaticProps({ params }) {
  // Fetch necessary data for the cheese page using params.id
  const cheeseData = await getcheeseData(params.id);
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
        <Link>
          <a href="../basket">
            <p className={styles.add_to_basket}>{cheeseData.add_to_basket}</p>
          </a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: cheeseData.contentHtml }} />
      </article>
    </Layout>
  );
}
