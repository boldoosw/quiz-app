export const getBGColor = (userAnswer: string | undefined,  answer: string): string => {
  // const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;

  // if ((isAnswerCorrect === true && answer === userAnswer) || (isAnswerCorrect === false && answer === correctAnswer))
    if (answer === userAnswer)
    return 'bg-blue-500 text-white';

  // if (isAnswerCorrect === false && answer === userAnswer) return 'bg-[#AC5050] text-white';

  return 'bg-white text-[#9F50AC]';
};