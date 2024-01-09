// Helpers
import { getBGColor } from "./helpers";

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
};

const QuestionCardNew: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  onClick,
  correctAnswer,
}) => {
  return (
    <div className=" flex flex-column flex-wrap justify-between">
      {/* <Header>Choose a category to get started:</Header> */}

      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
        <p
          className="text-[20px] max-w-[400px]"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        {answers.map((answer) => (
          <>
            <li>
              <input
                type="radio"
                id={answer + currentQuestionIndex}
                name={question + currentQuestionIndex}
                value={answer + currentQuestionIndex}
                className="hidden peer"
                //    required
                onClick={() => onClick(answer, currentQuestionIndex)}
              />
              <label
                htmlFor={answer + currentQuestionIndex}
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-full">
                  <span
                    className="truncate"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </div>
              </label>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
  // return (
  //   <div>
  //     <p
  //       className="text-[20px] max-w-[400px]"
  //       dangerouslySetInnerHTML={{ __html: question }}
  //     />
  //     <div className="flex flex-col items-center pt-8">
  //       {answers.map((answer) => (
  //         <div
  //           key={answer}
  //           onClick={() => onClick(answer, currentQuestionIndex)}
  //           className={`${getBGColor(
  //             userAnswer,
  //             correctAnswer,
  //             answer
  //           )} cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[10px]`}
  //         >
  //           <span
  //             className="truncate"
  //             dangerouslySetInnerHTML={{ __html: answer }}
  //           />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default QuestionCardNew;
