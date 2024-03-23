import { memo, useCallback, useEffect, useMemo, useState } from "react";
import questions from "@/constants/questions";
import useMultiStepsForm from "@/hooks/useMultiStepsForm";
import Question from "../Question";
import { useRouter } from "next/navigation";
import { Progress } from "../../../../components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { getScore } from "@/features/games/helpers";
import Warning from "../Warning";
import InterceptDialog from "@/features/ui/componets/InterceptDialog";
import { useSeason } from "@/hooks/useSeason";

interface QuestionFormProps {
  setEnterGame: (value: boolean) => void;
  handleUpdateAnswer: (questionNumber: number, choice: number) => void;
  isAnswerSelected: (questionNumber: number, choice: number) => boolean;
  answers: number[];
}

const MemoizedQuestion = memo(Question);

const QuestionForm: React.FC<QuestionFormProps> = ({
  setEnterGame,
  handleUpdateAnswer,
  isAnswerSelected,
  answers,
}) => {
  const score = getScore();
  const router = useRouter();
  const [warn, setWarn] = useState(false);
  const { toast } = useToast();
  const { id } = useSeason(score);

  const { currentStepIndex, step, steps, back, next, isFirst, isLast } =
    useMultiStepsForm(
      useMemo(
        () =>
          questions.map((question, idx) => (
            <MemoizedQuestion
              idx={idx}
              key={`question-component-${idx}`}
              question={question}
              handleUpdateAnswer={handleUpdateAnswer}
              isAnswerSelected={isAnswerSelected}
            />
          )),
        [handleUpdateAnswer, isAnswerSelected]
      )
    );

  const isCompleteAllAnswer = useCallback((): boolean => {
    return (
      answers.length === steps.length &&
      answers.every((answer) => answer !== undefined)
    );
  }, [answers, steps]);

  const handleClick = useCallback(
    (previous: boolean) => {
      if (previous) {
        if (isFirst) setEnterGame(false);

        back();
        return;
      }

      if (isLast) {
        if (!isCompleteAllAnswer()) {
          toast({
            title: "Form not completed",
            description: "กรุณาตอบคำถามให้ครบทุกข้อ",
            variant: "destructive",
            duration: 3000,
          });
          return;
        }

        if (id === 1) {
          setWarn(true);
        } else {
          router.push("/game/result");
        }
      }

      next();
    },
    [
      back,
      isFirst,
      isLast,
      isCompleteAllAnswer,
      next,
      router,
      setEnterGame,
      toast,
      isCompleteAllAnswer,
    ]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handleClick(true);
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        if (warn) {
          setWarn(false);
          return;
        }
        handleClick(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick, currentStepIndex, warn]);

  return (
    <div
      className={`relative px-8 pt-16 flex w-full flex-col items-center justify-center gap-[4rem] lg:h-auto`}
    >
      {warn && (
        <InterceptDialog
          onClose={() => {
            setWarn(false);
            router.push("/game/result");
          }}
        >
          <Warning
            onClose={() => {
              setWarn(false);
              router.push("/game/result");
            }}
          />
        </InterceptDialog>
      )}

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
          <button type="button" onClick={() => handleClick(true)}>
            <div
              className="w-0 h-0 
  border-t-[25px] border-t-transparent
  border-r-[30px] border-r-rose-300
  border-b-[25px] border-b-transparent"
            ></div>
          </button>
          <button type="button" onClick={() => handleClick(false)}>
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
