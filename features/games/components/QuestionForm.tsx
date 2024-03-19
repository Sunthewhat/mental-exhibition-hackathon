import questions from "@/constants/questions";
import useMultiStepsForm from "@/hooks/useMultiStepsForm";
import Question from "./Question";
import { useRouter } from "next/navigation";
import { Progress } from "../../../components/ui/progress";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface QuestionFormProps {
  setEnterGame: (value: boolean) => void;
  handleUpdateAnswer: (questionNumber: number, choice: number) => void;
  isAnswerSelected: (questionNumber: number, choice: number) => boolean;
  answers: number[];
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  setEnterGame,
  handleUpdateAnswer,
  isAnswerSelected,
  answers,
}) => {
  const { toast } = useToast();
  const router = useRouter();

  const handleClickBack = () => {
    if (isFirst) setEnterGame(false);
    back();
  };

  const handleClickNext = () => {
    if (isLast) {
      if (!isCompleteAllAnswer()) {
        toast({
          title: "Form not completed",
          description: "กรุณาตอบคำถามให้ครบทุกข้อ",
          variant: "destructive",
          duration: 3000,
        });
        return;
      } // TODO: warn user

      router.push("/game/result");
    }
    next();
  };

  const isCompleteAllAnswer = (): boolean => {
    return !(answers.length === 0 || answers === null);
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
    <div className="px-8 pt-16 flex w-full flex-col items-center justify-center gap-[4rem] lg:h-auto">
      <div className="text-center text-white font-bold text-md md:text-base lg:text-lg">
        <p>KMUTT</p>
        <p>MENTAL HEALTH</p>
        <p>EXHIBITION</p>
      </div>
      <div className="pb-8 w-full md:w-1/2 lg:w-2/3 z-10 text-center font-bold text-md md:text-base lg:text-lg bg-white rounded-t-[200px] rounded-b-[15px]">
        <form>{step}</form>
      </div>
      <div className="pb-8 z-10 flex flex-col items-center justify-center gap-3 w-full">
        <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col items-center justify-center">
          <Progress
            value={((currentStepIndex + 1) / steps.length) * 100}
            className="h-2 border border-rose-300"
          />
          <p className="self-start text-xs mt-2">
            {currentStepIndex + 1}/{steps.length}
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button type="button" onClick={handleClickBack}>
            <div
              className="w-0 h-0 
  border-t-[25px] border-t-transparent
  border-r-[30px] border-r-rose-300
  border-b-[25px] border-b-transparent"
            ></div>
          </button>
          <button type="button" onClick={handleClickNext}>
            <div
              className="w-0 h-0 
  border-t-[25px] border-t-transparent
  border-l-[30px] border-l-rose-300
  border-b-[25px] border-b-transparent"
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
