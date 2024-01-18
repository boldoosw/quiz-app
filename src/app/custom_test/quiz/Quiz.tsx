"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Components
import Button from "@/components/Button/Button";
// Types
import { QuestionsState } from "@/types/quiz";
import CustomCard from "@/components/QuestionCard/CustomCard";

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};
let chartData: number[] = [];
const Quiz = ({ questions, totalQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  const [userAnswers, setUserAnswers] = React.useState<Record<number, string>>(
    {}
  );
  const [isQuestionAnswered, setIsQuestionAnswered] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<
    Record<number, string>
  >({});

  const router = useRouter();

  // return !showResult ? (
  return (
    <div className="text-black text-center mt-8">
      <p className="text-[#9F50AC] font-bold pb-2 text-[14px]">
        Асуулт {currentQuestionIndex + 1} / {totalQuestions}
      </p>
      <div className="md:flex md:flex-justify-center ">
        <CustomCard
          currentQuestionIndex={currentQuestionIndex}
          question={questions[currentQuestionIndex].question}
          answers={questions[currentQuestionIndex].answers}
          answer_val={questions[currentQuestionIndex].answer_val}
          // answer_pic={questions[currentQuestionIndex].answer_pic}
          userAnswer={userAnswers[currentQuestionIndex]}
          radioHandler={function (): void {
            throw new Error("Function not implemented.");
          }} // correctAnswer={questions[currentQuestionIndex].correct_answer}
          // onClick={handleOnAnswerClick}
        />
      </div>
    </div>
    // ) : (
    //   <div className="text-black text-center mt-8">
    //     <VulnChart
    //       labels={[
    //         "Бодит үйл ажиллагааг дэмжигч",
    //         "Шинжээч судлаач",
    //         "Урлагын",
    //         "Нийгмийн",
    //         "Удирдан зохион байгуулах",
    //         "Стандартыг баримтлагч",
    //       ]}
    //       data={chartData}
    //     />
    //   </div>
  );
};

export default Quiz;
