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
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).json({ message: "options enable" });
  }

  if (req.method === "GET") {
    const simulationCollection = collection(db, "simulations");
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
      score: simulation.score,
    };

    const simulationCollection = collection(db, "simulations");
    const simulationSnapshot = await addDoc(
      simulationCollection,
      newSimulation
    );

    res.status(200).json({
      message: "success",
    });
  }
};
