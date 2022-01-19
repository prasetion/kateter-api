import { simulations } from "./data/simulation";
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

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "simulations");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export default function handler(req, res) {
  if (req.method === "GET") {
    const docSnap = getCities(db);
    console.log(docSnap);
    res.status(200).json(docSnap);
  } else if (req.method === "POST") {
    const simulation = JSON.parse(JSON.stringify(req.body));
    const newSimulation = {
      id: Date.now(),
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
    simulations.data.push(newSimulation);
    res.status(200).json(simulations);
  }
}
