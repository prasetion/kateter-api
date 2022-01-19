import { simulations } from "./data/simulation";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(simulations);
  } else if (req.method === "POST") {
    const simulation = JSON.parse(JSON.stringify(req.body));
    const newSimulation = {
      id: Date.now(),
      name: simulation.name,
      school: simulation.school,
      class: simulation.class,
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
