import React from "react";
import styles from "../styles/Home.module.css";

const DataItemQuiz = ({ item }) => {
  return (
    <div>
      <div className={styles.card}>
        <h3>Nama: {item.name}</h3>
        <p>
          Sekolah: {item.school} <br />
          Kelas: {item.studentClass} <br />
          No Hp: {item.phone} <br />
          Email: {item.email} <br />
          Waktu Mulai Pengerjaan: {item.startTime} <br />
          Waktu Berakhir Pengerjaan: {item.endTime} <br />
          Materi: {item.moduleName} <br />
          Total Jawaban Benar: {item.correctAnswer} <br />
          Total Jawaban Salah: {item.wrongAnswer} <br />
          Durasi Pengerjaan: {item.duration} <br />
          Score: {item.score} <br />
        </p>
      </div>
    </div>
  );
};

export default DataItemQuiz;
