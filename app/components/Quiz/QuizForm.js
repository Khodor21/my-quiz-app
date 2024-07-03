// /app/components/Quiz/QuizForm.js
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Question from "./Question";
import QuizResult from "./QuizResult";

const QuizForm = ({ quizQuestions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <QuizResult score={score} totalQuestions={quizQuestions.length} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Question
        question={quizQuestions[currentQuestionIndex].question}
        options={quizQuestions[currentQuestionIndex].options}
        handleAnswer={handleAnswer}
      />
    </motion.div>
  );
};

export default QuizForm;
