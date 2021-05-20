import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import getAllProducts from "../database/model";

//import CheeseCard from "../components/cheeseCard";

import Layout from "../components/layout";
import Basket from "./basket";
import Login from "./login";

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
      <Link href="/login">
        <a>Click here login</a>
      </Link>
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

      <section id="products_grid" className={styles.grid}>
        <CheeseCard />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus
          orci ac auctor augue mauris augue. Sit amet risus nullam eget felis.
          Tempor commodo ullamcorper a lacus vestibulum sed. Eget est lorem
          ipsum dolor sit amet consectetur. Ornare arcu odio ut sem nulla
          pharetra diam sit. Volutpat blandit aliquam etiam erat velit
          scelerisque. Habitant morbi tristique senectus et netus et malesuada
          fames ac. Sit amet aliquam id diam maecenas ultricies mi eget. Amet
          nulla facilisi morbi tempus. Nunc pulvinar sapien et ligula
          ullamcorper malesuada proin libero. Ornare arcu odio ut sem nulla
          pharetra diam sit amet. Ullamcorper a lacus vestibulum sed. Nibh cras
          pulvinar mattis nunc sed blandit libero volutpat sed. Praesent semper
          feugiat nibh sed pulvinar proin. Pellentesque adipiscing commodo elit
          at imperdiet dui accumsan sit amet. Non blandit massa enim nec. Dis
          parturient montes nascetur ridiculus mus mauris. Tincidunt vitae
          semper quis lectus nulla at volutpat. Et ultrices neque ornare aenean.
          Tincidunt ornare massa eget egestas purus viverra accumsan. Commodo
          elit at imperdiet dui accumsan sit amet. Sapien eget mi proin sed.
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
          Fames ac turpis egestas sed. Posuere urna nec tincidunt praesent
          semper feugiat. Quam viverra orci sagittis eu volutpat odio facilisis.
          Porttitor massa id neque aliquam vestibulum morbi blandit. Varius vel
          pharetra vel turpis nunc eget lorem. Ultrices vitae auctor eu augue ut
          lectus arcu bibendum. In iaculis nunc sed augue lacus viverra.
          Ultrices neque ornare aenean euismod. Cursus metus aliquam eleifend mi
          in nulla posuere sollicitudin aliquam. Morbi tincidunt ornare massa
          eget egestas purus viverra. Dictum varius duis at consectetur lorem
          donec massa sapien. Amet volutpat consequat mauris nunc. Ligula
          ullamcorper malesuada proin libero. Pretium nibh ipsum consequat nisl
          vel pretium lectus quam id. Pellentesque elit eget gravida cum sociis.
          Sodales ut eu sem integer vitae. Pretium quam vulputate dignissim
          suspendisse in est ante in nibh. Risus commodo viverra maecenas
          accumsan. Massa id neque aliquam vestibulum morbi blandit cursus risus
          at. Nunc mattis enim ut tellus elementum sagittis vitae et. Consequat
          id porta nibh venenatis cras sed felis eget. Vel elit scelerisque
          mauris pellentesque pulvinar pellentesque habitant. A scelerisque
          purus semper eget duis at tellus. Egestas sed sed risus pretium quam
          vulputate. Nulla aliquet enim tortor at auctor urna nunc id cursus.
          Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
          Blandit massa enim nec dui nunc. Posuere lorem ipsum dolor sit amet
          consectetur adipiscing. Integer vitae justo eget magna fermentum
          iaculis. Venenatis urna cursus eget nunc. Sit amet luctus venenatis
          lectus magna fringilla urna. Facilisis volutpat est velit egestas.
          Tincidunt dui ut ornare lectus sit. Auctor neque vitae tempus quam
          pellentesque nec nam aliquam. Est velit egestas dui id ornare arcu
          odio ut sem. Metus dictum at tempor commodo ullamcorper a lacus
          vestibulum. Augue interdum velit euismod in pellentesque massa
          placerat duis ultricies. Facilisis gravida neque convallis a cras. Sit
          amet massa vitae tortor condimentum lacinia.
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
