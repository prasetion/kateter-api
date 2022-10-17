import React from "react";
import styles from "../styles/Home.module.css";

const DataItemQuiz = ({ item }) => {
  return (
    <div>
      <div className={styles.card}>
        <h3>NRP: {item.studentId}</h3>
        <p>
          Nama: {item.name} <br />
          Institusi: {item.school} <br />
          Email: {item.email} <br />
          Waktu Mulai : {item.startTime} <br />
          Waktu Akhir : {item.endTime} <br />
          Jenis Kuis: {item.quizType} <br />
          Score: {item.score} <br />
        </p>
      </div>
    </div>
  );
};

export default DataItemQuiz;
