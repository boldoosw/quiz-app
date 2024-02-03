"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Types
import { QuestionsState } from "@/types/quiz";
import CustomCard from "@/components/QuestionCard/CustomCard";
import { Question } from "../../../types/quiz";

type Props = {
  questions: QuestionsState;
};

// eslint-disable-next-line react-hooks/rules-of-hooks

const Quiz = ({ questions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );
  const handleOnAnswerClick = (
    answer: string,
    answer_val: string,
    currentQuestionIndex: number
  ) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));

    userAnswers[currentQuestionIndex] = answer;

    console.log(answer);
    console.log(currentQuestionIndex);
  };

  return (
    <div className="md:grid grid-cols-2 gap-2">
      {questions.map(function (question, i) {
        return (
          <CustomCard
            key={i}
            question={question}
            currentQuestionKey={i}
            userAnswer={userAnswers[currentQuestionIndex]}
            onChange={handleOnAnswerClick}
          />
        );
      })}
    </div>
  );
};

export default Quiz;
