// cheeses will be populated at build time by getStaticProps()
export default function CheeseCard() {
  return (
    <a href="`./${cheeseName}`" className={styles.card}>
      <h2>{}</h2>
      <p>{}</p>
    </a>
  );
}
