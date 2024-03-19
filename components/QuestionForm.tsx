import questions from "@/constants/questions";
import useMultiStepsForm from "@/hooks/useMultiStepsForm";
import Question from "./Question";
import { useRouter } from "next/navigation";

interface QuestionFormProps {
  setEnterGame: (value: boolean) => void;
  handleUpdateAnswer: (questionNumber: number, choice: number) => void;
  isAnswerSelected: (questionNumber: number, choice: number) => boolean;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  setEnterGame,
  handleUpdateAnswer,
  isAnswerSelected,
}) => {
  const router = useRouter();

  const handleClickBack = () => {
    if (isFirst) setEnterGame(false);
    back();
  };

  const handleClickNext = () => {
    if (isLast) router.push("/game/result");
    next();
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
    <div className="px-8 pt-16 flex w-full flex-col items-center justify-center gap-[4rem]">
      <div className="text-center text-white font-bold text-md md:text-base lg:text-lg">
        <p>KMUTT</p>
        <p>MENTAL HEALTH</p>
        <p>EXHIBITION</p>
      </div>
      <div className="pb-8 w-full w-3/4 md:w-2/3 lg:w-1/3 z-10 text-center font-bold text-md md:text-base lg:text-lg bg-white rounded-t-[200px] rounded-b-[15px]">
        <form>{step}</form>
      </div>
      <div className="z-10 flex gap-3">
        <div>
          {currentStepIndex + 1}/{steps.length}
        </div>
        <button type="button" onClick={handleClickBack}>
          back
        </button>
        <button type="button" onClick={handleClickNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
