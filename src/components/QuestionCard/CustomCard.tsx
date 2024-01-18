import React from "react";

import { Question } from "@/types/quiz";

type Props = {
  question: Question;

  radioHandler: () => void;
};

const CustomCard: React.FC<Props> = ({ question, radioHandler }) => {
  return (
    <div className="md:w-full gap-6 md:grid-cols-2 m-2">
      <div
        className="bg-sky-100 flex
        flex-row justify-between items-center cursor-pointer 
            select-none  max-w-[400] w-full  rounded-[10px]
              border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <div className="w-full m-4 ">{question.question}</div>
        <ul className="w-full  mr-4 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className=" text-center hover:bg-green-400 ">
            <div className="flex items-center ps-3">
              <input
                id="list-radio-military"
                type="radio"
                value="yes"
                name={question.question}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={radioHandler}
              />
              <label
                htmlFor="list-radio-military"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Тийм
              </label>
            </div>
          </li>
          <li className=" text-center hover:bg-green-400">
            <div className="flex items-center ps-3">
              <input
                id="list-radio-passport1"
                type="radio"
                value="no"
                name={question.question}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={radioHandler}
              />
              <label
                htmlFor="list-radio-passport1"
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
