import questions from "@/constants/questions";
import useMultiStepsForm from "@/hooks/useMultiStepsForm";
import { useState } from "react";
import Question from "./Question";

const QuestionForm = () => {
  const [answers, setAnswers] = useState<number[]>([]);

  const isAnswerSelected = (questionNumber: number, choice: number) => {
    return answers[questionNumber] === choice;
  };

  const handleUpdateAnswer = (questionNumber: number, choice: number) => {
    let changedAnswers = answers;
    changedAnswers[questionNumber] = choice;
    setAnswers([...changedAnswers]);
  };

  const { currentStepIndex, step, steps, back, next, isFirst, isLast } =
    useMultiStepsForm(
      questions.map((question, idx) => (
        <Question
          idx={idx}
          key={`question-component-${idx}`}
          question={question}
          handleUpdateAnswer={handleUpdateAnswer}
          isAnswerSelected={isAnswerSelected}
        />
      ))
    );

  return (
    <form>
      <div>
        {currentStepIndex + 1}: {steps.length}
      </div>
      {step}
      {!isFirst && (
        <button type="button" onClick={back}>
          back
        </button>
      )}
      {!isLast && (
        <button type="button" onClick={next}>
          next
        </button>
      )}
    </form>
  );
};

export default QuestionForm