//Import db statement tbc...
import db from "../database/connection.js";
import styles from "../styles/Home.module.css";

//Syntax below for Chsse card and async functipn for getStaticProps taken from documentation at  https://nextjs.org/docs/basic-features/data-fetching

// Cheeses will be populated at build time by getStaticProps()
function CheeseCard({ cheeses }) {
  return (
    <>
      {/* {cheeses.map((cheese) => ( */}
      <a href="`./${cheese.name}`" className={styles.card}>
        <h2></h2>
        <p></p>
      </a>
      {/* ))} */}
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch("https://.../posts");
  // const cheeses = await res.json(); //returns an array of objects - 1 for each line of table

  //const db = await openDB();
  const faq = await db.all("SELECT * FROM cheeses");

  // By returning { props: { posts } }, the Cheese component
  // will receive `cheeses` as a prop at build time
  return {
    props: {
      cheeses,
    },
  };
}

export default CheeseCard;
