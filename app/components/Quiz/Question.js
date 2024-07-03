// /app/components/Quiz/Question.js
import React from "react";
import { motion } from "framer-motion";

const Question = ({ question, options, handleAnswer }) => {
  return (
    <motion.div
      className="my-8 mx-auto max-w-2xl bg-second p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-lg changabold mb-4 text-main">
        {question}
      </h2>
      <ul className="space-y-4">
        {options.map((option, index) => (
          <li key={index}>
            <motion.button
              className="w-full bg-main hover:bg-main/70 text-second changaregular font-bold py-2 px-4 rounded transition duration-300"
              onClick={() => handleAnswer(option)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Question;
