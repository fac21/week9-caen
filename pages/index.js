import React from "react";
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
function CheeseCard({ productData, min, max, category }) {
  const dataObject = JSON.parse(productData.productData);
  console.log(dataObject);
  return (
    <>
      {/* src={`/assets/products/${prod.ProductName.replace(/ /g, "-")}.png`} */}
      {dataObject
        .filter((cheese) => category === "all" || cheese.category === category)
        .filter((cheese) => cheese.price >= min && cheese.price <= max)
        .map((cheese) => {
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
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(20);
  const [category, setCategory] = React.useState("all");
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
          <div className={layoutStyles.radio}>
            <h3>Filter</h3>
            <label htmlFor="min-price">
              Min price
              <input
                type="range"
                id="min-price"
                min="1"
                max="20"
                step="1"
                value={min}
                onChange={(event) => setMin(event.target.value)}
              />
            </label>
            <label htmlFor="max-price">
              Max price
              <input
                type="range"
                id="max-price"
                min="1"
                max="20"
                step="1"
                value={max}
                onChange={(event) => setMax(event.target.value)}
              />
            </label>
          </div>
          <div className={layoutStyles.radio}>
            <label htmlFor="all">
              All
              <input
                type="radio"
                name="categories"
                id="all"
                value="all"
                checked={category === "all"}
                onChange={(event) => setCategory(event.target.value)}
              />
            </label>
            <label htmlFor="organic">
              Organic
              <input
                type="radio"
                name="categories"
                id="organic"
                value="organic"
                checked={category === "organic"}
                onChange={(event) => setCategory(event.target.value)}
              />
            </label>
            <label htmlFor="vegetarian">
              Vegetarian
              <input
                type="radio"
                name="categories"
                id="vegetarian"
                value="vegetarian"
                checked={category === "vegetarian"}
                onChange={(event) => setCategory(event.target.value)}
              />
            </label>
          </div>
        </div>
        <div className={layoutStyles.cheese_cards}>
          <CheeseCard
            productData={productData}
            min={min}
            setMin={setMin}
            max={max}
            setMax={setMax}
            category={category}
            setCategory={setCategory}
          />
        </div>
      </section>
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
