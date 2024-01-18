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
  // const q = questions[0];

  return (
    <div className="md:grid grid-cols-2 gap-2">
      {questions.map(function (item, i) {
        console.log("test");
        return (
          <CustomCard
            key={i}
            question={item}
            radioHandler={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        );
      })}
    </div>
  );

  // <div>
  //   <ul>
  //     {questions.map(function (item, i) {
  //       console.log("test");
  //       return <li key={i}>Test</li>;
  //     })}
  //   </ul>
  // </div>;
  // questions.map((question: Question) => ());
};

export default Quiz;
