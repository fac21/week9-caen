import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
import { getAllProductNames } from "../../database/model";
import { db } from "../../database/connection";
import Link from "next/link";
import Image from "next/image";

function getCheeseData(id) {
  console.log(typeof id); //Baron Bigod Brie
  return db
    .query(`SELECT * FROM cheeses WHERE name = ($1)`, [id])
    .then((result) => result.rows[0]);
}

//returns an array of possible values for name
export async function getStaticPaths() {
  const allProductNames = await getAllProductNames();
  console.log(allProductNames);
  const productNameArray = allProductNames.map((item) => {
    return { params: { id: item.name } };
  });

  console.log(productNameArray);
  return {
    paths: productNameArray,
    fallback: false,
  };
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
      <article className={styles.article}>
        <div className={styles.article_div1}>
          <Image
            className={styles.product_image}
            src={`/${cheeseData.image}.jpeg`}
            alt={cheeseData.name}
            width="600"
            height="500"
          />
        </div>
        <div className={styles.article_div2}>
          <h1 className={styles.product_name}>{cheeseData.name}</h1>
          <p className={styles.product_description}>{cheeseData.description}</p>
          <p className={styles.product_price}>£{cheeseData.price.toFixed(2)}</p>
          <Link href="/basket">
            <a>
              <h3
                onClick={() => {
                  addToBasket(cheeseData);
                }}
              >
                {cheeseData.add_to_basket}
                Add to basket
              </h3>
            </a>
          </Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: cheeseData.contentHtml }} />
      </article>
      <Link href="/basket">
        <a>
          <p
            onClick={() => {
              addToBasket(cheeseData);
            }}
          >
            Add to basket
          </p>
        </a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: cheeseData.contentHtml }} />
    </Layout>
  );
}

function addToBasket(cheeseData) {
  //doesn't work if they have other cookies set
  let currentCookies = document.cookie;
  currentCookies
    ? (currentCookies = JSON.parse(currentCookies))
    : (currentCookies = {});
  currentCookies[cheeseData.name]
    ? (currentCookies[cheeseData.name] += 1)
    : (currentCookies[cheeseData.name] = 1);
  currentCookies = JSON.stringify(currentCookies);
  document.cookie = currentCookies;
  return;
}
