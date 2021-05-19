import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getAllProducts from "../database/model";

//import CheeseCard from "../components/cheeseCard";

import Layout from "../components/layout";

export async function getStaticProps({ req, res }) {
  const allProducts = await getAllProducts();
  //console.log(allProducts);
  const productData = JSON.stringify(allProducts);
  //console.log(productData);
  return {
    props: { productData },
  };
}

//Cheeses product data will be populated at build time by getStaticProps()
function CheeseCard({ productData }) {
  console.log(productData);
  //const productsArr = JSON.parse(productData);
  //console.log(productsArr);
  //console.log(productsArr);
  return (
    <>
      {/* {allCheeses.map((cheese) => ( */}
      <a href="`./${productData.name}`" className={styles.card}>
        <h2></h2>
        <p></p>
      </a>
      {/* ))} */}
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

        <img
          className={styles.down_arrow}
          src="arrow-down.svg"
          alt="downwards arrow"
        ></img>
      </section>
      <section className="product-grid"></section>

      <section className={styles.grid}>
        <CheeseCard />
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
