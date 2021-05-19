import styles from "../styles/Home.module.css";

// Cheeses will be populated at build time by getStaticProps()
function CheeseCard({ allCheeses }) {
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

export default CheeseCard;
