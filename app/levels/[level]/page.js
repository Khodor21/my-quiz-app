// /app/levels/[level]/page.js
import React from "react";
import QuizForm from "../../components/Quiz/QuizForm";
import quizData from "../../quizData.json";

const LevelPage = ({ params: { level } }) => {
  const quizQuestions = quizData[level];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">
        We are here in the Level {level}
      </h1>
      <QuizForm quizQuestions={quizQuestions} />
    </div>
  );
};

export default LevelPage;
