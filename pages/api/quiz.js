import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

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

export default async (req, res) => {
  if (req.method === "GET") {
    const simulationCollection = collection(db, "quizes");
    const simulationSnapshot = await getDocs(simulationCollection);
    const simulationList = simulationSnapshot.docs.map((doc) => doc.data());
    res.status(200).json(simulationList);
  } else if (req.method === "POST") {
    const simulation = JSON.parse(JSON.stringify(req.body));
    const newSimulation = {
      name: simulation.name,
      school: simulation.school,
      studentClass: simulation.studentClass,
      phone: simulation.phone,
      email: simulation.email,
      startTime: simulation.startTime,
      endTime: simulation.endTime,
      totalCorrect: simulation.totalCorrect,
      totalWrong: simulation.totalWrong,
      duration: simulation.duration,
    };

    const simulationCollection = collection(db, "quizes");
    const simulationSnapshot = await addDoc(
      simulationCollection,
      newSimulation
    );

    console.log(simulationSnapshot);

    res.status(200).json({
      message: "success",
    });
  }
};
