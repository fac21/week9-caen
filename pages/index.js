import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import CheeseCard from "../components/cheeseCard";

import Layout from "../components/layout";

// function cheeseBoard({ cheeses }) {
//   return (
//     <ul>
//       {cheeses.map((cheese) => (
//         <CheeseCard />
//       ))}
//     </ul>
//   );
// }

export default function Home({ cheeses }) {
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
