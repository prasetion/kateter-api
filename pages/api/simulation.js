import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

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
const fieldName = "simulation";

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
    const simulationCollection = collection(db, fieldName);
    const simulationSnapshot = await getDocs(simulationCollection);
    const simulationList = simulationSnapshot.docs.map((doc) => doc.data());
    res.status(200).json(simulationList);
  } else if (req.method === "POST") {
    const simulation = JSON.parse(JSON.stringify(req.body));
    const newSimulation = {
      name: simulation.name,
      school: simulation.school,
      studentId: simulation.studentId,
      email: simulation.email,
      simulationType: simulation.simulationType,
      startTime: simulation.startTime,
      endTime: simulation.endTime,
      duration: simulation.duration,
      correctStep: simulation.correctStep,
      wrongStep: simulation.wrongStep,
      score: simulation.score,
    };

    const simulationCollection = collection(db, fieldName);
    const simulationSnapshot = await addDoc(
      simulationCollection,
      newSimulation
    );

    res.status(200).json({
      message: "success",
    });
  }
};
