import Head from "next/head";

import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, fuga.</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et magnam itaque eum ullam illo velit ex voluptates, tempora nam.</p>
      <Link href="/ninjas">
        <a className={styles.button}>See ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
