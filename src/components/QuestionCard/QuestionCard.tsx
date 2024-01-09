// Helpers
import { getBGColor } from "./helpers";
import Image from "next/image";
import logonew from "@/assets/images/logo_mcu.png";

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
};

const QuestionCard: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  onClick,
  correctAnswer,
}) => {
  return (
    <div className=" flex flex-column flex-wrap justify-between">
      {/* <p
        className="text-[20px] max-w-[400px]"
        dangerouslySetInnerHTML={{ __html: question }}
      /> */}
      {/* <div className="flex flex-col items-center pt-8"> */}

      <div className="grid w-full gap-6 md:grid-cols-2">
        {answers.map((answer) => (
          <div
            key={answer}
            onClick={() => onClick(answer, currentQuestionIndex)}
            className={`${getBGColor(
              userAnswer,
              correctAnswer,
              answer
            )} p-1 cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full  rounded-[10px]`}
          >
            {" "}
            {/* <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            > */}
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={logonew}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5> */}
              <p className=" font-normal text-gray-700 dark:text-gray-400">
                {answer}
              </p>
            </div>
            {/* <span
              className="truncate"
              dangerouslySetInnerHTML={{ __html: answer }}
            /> */}
            {/* </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
