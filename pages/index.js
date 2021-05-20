import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import layoutStyles from "../components/layout.module.css";
import Link from "next/link";

import { getAllProducts } from "../database/model";

//import CheeseCard from "../components/cheeseCard";

import Layout from "../components/layout";
import Basket from "./basket";
import Login from "./login";

//Cheeses product data will be populated at build time by getStaticProps()
function CheeseCard({ productData }) {
  const dataObject = JSON.parse(productData.productData);
  console.log(dataObject);
  return (
    <>
      {/* src={`/assets/products/${prod.ProductName.replace(/ /g, "-")}.png`} */}
      {dataObject.map((cheese) => {
        return (
          <a href={"./products/" + cheese.name} className={layoutStyles.card}>
            <Image
              src={`/${cheese.image}.jpeg`}
              width="200"
              height="170"
              alt={cheese.name}
            />
            <h2>{cheese.name}</h2>
            <p>See more</p>
          </a>
        );
      })}
    </>
  );
}

export default function Home(productData) {
  return (
    <Layout home>
      <section className={styles.landing}>
        <h1 className={styles.heading}>
          Artisinal Cheeses from Artisinal Cows
        </h1>

        <Link href="#products_grid">
          <a>
            <img
              className={styles.down_arrow}
              src="arrow-down.svg"
              alt="downwards arrow"
            ></img>
          </a>
        </Link>
      </section>

      <section id="products_grid" className={layoutStyles.product_grid}>
        <div className={layoutStyles.filter_section}>
          <h3>Filter</h3>
        </div>
        <div className={layoutStyles.cheese_cards}>
          <CheeseCard productData={productData} />
        </div>
      </section>

      {/* Put footer into layout !!!!
        <footer className={styles.footer}>
         <a
           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
           target="_blank"
           rel="noopener noreferrer"
         >
           Powered by{" "}
           <span className={styles.logo}>
             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
           </span>
         </a>
       </footer>  */}
    </Layout>
  );
}

export async function getStaticProps() {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);
  return {
    props: { productData },
  };
}
