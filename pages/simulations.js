import React from "react";
import DataList from "../components/DataList";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDkUB699CCzrKOpwUNcBUyO7MRPKdab_Tc",
  authDomain: "bengkel-cc4a7.firebaseapp.com",
  projectId: "bengkel-cc4a7",
  storageBucket: "bengkel-cc4a7.appspot.com",
  messagingSenderId: "417386101686",
  appId: "1:417386101686:web:7131d4817424eb8ace1f17",
  measurementId: "G-JRBQQWS098",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

export async function getServerSideProps() {
  const simulationCollection = collection(db, "simulations");
  const simulationSnapshot = await getDocs(simulationCollection);
  const simulationList = simulationSnapshot.docs.map((doc) => doc.data());

  return {
    props: {
      simulationList,
    },
  };
}

export default simulations;
