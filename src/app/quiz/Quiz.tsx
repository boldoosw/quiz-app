"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Components
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );
  const [isQuestionAnswered, setIsQuestionAnswered] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<
    Record<number, string>
  >({});

  const router = useRouter();

  const handleOnAnswerClick = (
    answer: string,
    answer_val: string,
    currentQuestionIndex: number
  ) => {
    // If user has already answered, do nothing
    // if (isQuestionAnswered) return;
    // Check answer against correct answer
    // const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    const answer_value = questions[currentQuestionIndex].answer_val;
    // Add score if answer is correct
    // if (isCorrect) setScore((prev) => prev + 1);
    // Save the answer in the object for user answers
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    setIsQuestionAnswered(true);

    userAnswers[currentQuestionIndex] = answer;
    selectedAnswer[currentQuestionIndex] = answer_val;

    console.log("userAnswer", userAnswers);
    console.log("selectedAnswer", selectedAnswer);
  };

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setIsQuestionAnswered(false);
    setCurrentQuestionIndex(newQuestionIndex);
  };

  return (
    <div className="text-black text-center mt-8">
      {/* <p className="p-8 font-bold text-[20px]">Score: {score}</p> */}
      <p className="text-[#9F50AC] font-bold pb-2 text-[14px]">
        Question {currentQuestionIndex + 1} out of {totalQuestions}
      </p>
      <QuestionCard
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        answer_val={questions[currentQuestionIndex].answer_val}
        answer_pic={questions[currentQuestionIndex].answer_pic}
        userAnswer={userAnswers[currentQuestionIndex]}
        // correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnswerClick}
      />
      <div className="flex justify-between mt-16 ">
        <Button
          text="Өмнөх"
          btn_next={true}
          onClick={() => handleChangeQuestion(-1)}
        />

        <Button
          text={
            currentQuestionIndex === totalQuestions - 1 ? "Дуусгах" : "Дараах"
          }
          btn_next={
            selectedAnswer[currentQuestionIndex] === undefined ||
            selectedAnswer[currentQuestionIndex] === null
              ? true
              : false
          }
          onClick={
            currentQuestionIndex === totalQuestions - 1
              ? () => router.push("/")
              : () => handleChangeQuestion(1)
          }
        />
      </div>
    </div>
  );
};

export default Quiz;
