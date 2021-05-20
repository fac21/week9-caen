import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import getCheeseData from "./products/[id].js";

export default function HomePage({ data }) {
  return (
    <>
      <div>
        <h1>Homepage </h1>
        {/* <p>Data from cookie: {data.user}</p> */}
      </div>
    </>
  );
}
