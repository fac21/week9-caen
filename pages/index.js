import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import CheeseCard from "../components/cheeseCard";
import db 


function cheeseBoard({ cheeses }) {
  return (
    <ul>
      {cheeses.map((cheese) => (
        <CheeseCard />
      ))}
    </ul>
  );
}

export default function Home({ cheeses }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Artisan Cows</title>
        <meta name="description" content="App selling artisan cheeses!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to The Artisan Cows!</h1>

        <p className={styles.description}>
          ENJOY NEW CHEESE DISCOVERIES WITH THE ARTISAN COWS...{" "}
        </p>

        <div className={styles.grid}>{cheeseBoard()};</div>
      </main>

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
      </footer>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://.../posts");
  const cheeses = await res.json(); //returns an array of objects - 1 for each line of table

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cheeses,
    },
  };
}
