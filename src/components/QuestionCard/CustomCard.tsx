import React from "react";

import { Question } from "@/types/quiz";
import { getBGColor } from "./helpers";
const { useEffect, useState } = React;
type Props = {
  question: Question;
  currentQuestionKey: number;
  userAnswer: string | undefined;
  onChange: (
    answer: string,
    answer_val: string,
    currentQuestionIndex: number
  ) => void;
};

const CustomCard: React.FC<Props> = ({
  question,
  currentQuestionKey,
  userAnswer,
  onChange,
}) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="md:w-full gap-6 md:grid-cols-2 m-2">
      <div
        id={question.question}
        className="bg-sky-100 flex
        flex-row justify-between items-center cursor-pointer 
            select-none  max-w-[400] w-full  rounded-[10px]
              border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <div className="w-full m-4 ">{question.question}</div>
        <ul className="w-full  mr-2 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className=" text-center hover:bg-green-400 ">
            <div className="flex items-center ps-3">
              <input
                id={question.question + question.answers[0]}
                type="radio"
                value="yes"
                name={question.question}
                onChange={
                  () => onChange("yess", question.question, currentQuestionKey)
                  // onChange(answer, answer_val[i], currentQuestionIndex)
                }
                className={`${getBGColor(
                  userAnswer,
                  question.answers[0]
                )}  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 `}

                // className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={question.question + question.answers[0]}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Тийм
              </label>
            </div>
          </li>
          <li className=" text-center hover:bg-green-400">
            <div className="flex items-center ps-3">
              <input
                id={question.question + question.answers[1]}
                type="radio"
                value="no"
                name={question.question}
                onChange={
                  () => onChange("nono", question.question, currentQuestionKey)
                  // onChange(answer, answer_val[i], currentQuestionIndex)
                }
                // className={`${getBGColor(userAnswer, answer)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={question.question + question.answers[1]}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Үгүй
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomCard;
