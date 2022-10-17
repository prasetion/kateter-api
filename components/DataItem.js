import React from "react";
import styles from "../styles/Home.module.css";

const DataItem = ({ item }) => {
  return (
    <div>
      <div className={styles.card}>
        <h3>NRP: {item.studentId}</h3>
        <p>
          Nama: {item.name} <br />
          Institusi: {item.school} <br />
          Email: {item.email} <br />
          Jenis Simulasi: {item.simulationType} <br />
          Waktu Mulai : {item.startTime} <br />
          Waktu Akhir : {item.endTime} <br />
          Durasi: {item.duration} <br />
          Langkah Benar: {item.correctStep} <br />
          Langkah Salah: {item.wrongStep} <br />
          Score: {item.score} <br />
        </p>
      </div>
    </div>
  );
};

export default DataItem;
