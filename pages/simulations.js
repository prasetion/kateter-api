import React from "react";
import DataList from "../components/DataList";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const simulations = ({ simulationList }) => {
  return (
    <div className={styles.container}>
      <h1>Simulations Data</h1>
      <div>
        <Link href="/" passHref>
          <button className={styles.button}>Back</button>
        </Link>
        <button className={styles.button}>Download List Simulations</button>
      </div>
      <DataList datalist={simulationList}></DataList>
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://bengkel-api.vercel.app/api/simulation");
  const simulationList = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      simulationList,
    },
  };
}

export default simulations;
