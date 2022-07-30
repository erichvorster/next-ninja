import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  //data is fetched on the server and pumped into the component so that it is renderd at build time
  return {
    props: { ninjas: data },
  };
};

const index = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => {
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default index;
