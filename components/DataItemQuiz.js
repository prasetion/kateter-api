import React from "react";
import styles from "../styles/Home.module.css";

const DataItemQuiz = ({ item }) => {
  return (
    <div>
      <div className={styles.card}>
        <h3>NRP: {item.nrp}</h3>
        <p>
          Nama: {item.name} <br />
          Kelas: {item.classroom} <br />
          Time: {item.time} <br />
          Correct: {item.correct} <br />
          Wrong: {item.correct} <br />
        </p>
      </div>
    </div>
  );
};

export default DataItemQuiz;
