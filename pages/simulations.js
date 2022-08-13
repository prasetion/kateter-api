import React from "react";
import DataList from "../components/DataList";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import DownloadData from "../components/DownloadData";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
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
        <DownloadData
          apiData={simulationList}
          fileName={"simulation"}
        ></DownloadData>
      </div>
      <DataList datalist={simulationList}></DataList>
    </div>
  );
};

export async function getServerSideProps() {
  const simulationCollection = collection(db, "simulation");
  const simulationSnapshot = await getDocs(simulationCollection);
  const simulationList = simulationSnapshot.docs.map((doc) => doc.data());

  return {
    props: {
      simulationList,
    },
  };
}

export default simulations;
