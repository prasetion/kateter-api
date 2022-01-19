import { quizes } from "./data/quiz";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(quizes);
  } else if (req.method === "POST") {
    const quiz = JSON.parse(JSON.stringify(req.body));
    const newQuiz = {
      id: Date.now(),
      name: quiz.name,
      school: quiz.school,
      class: quiz.class,
      phone: quiz.phone,
      email: quiz.email,
      startTime: quiz.startTime,
      endTime: quiz.endTime,
      totalCorrect: quiz.totalCorrect,
      totalWrong: quiz.totalWrong,
      duration: quiz.duration,
    };
    quizes.data.push(newQuiz);
    res.status(200).json(quizes);
  }
}
