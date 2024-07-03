// /app/components/Quiz/QuizResult.js
import React from "react";
import { motion } from "framer-motion";

const QuizResult = ({ score, totalQuestions }) => {
  return (
    <motion.div
      className="my-8 mx-auto max-w-lg bg-white p-6 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl">
        You scored {score} out of {totalQuestions}.
      </p>
    </motion.div>
  );
};

export default QuizResult;
