import { QuestionType } from "@/constants/questions";
import Choice from "./Choice";
import { useFonts } from "@/features/shared/hooks/useFont";
import { motion } from "framer-motion";

interface QuestionProp {
  idx: number;
  question: QuestionType;
  handleNextQuestion: () => void;
  handleUpdateAnswer: (questionNumber: number, choice: number) => void;
  isAnswerSelected: (questionNumber: number, choice: number) => boolean;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Question: React.FC<QuestionProp> = ({
  idx,
  question,
  handleNextQuestion,
  handleUpdateAnswer,
  isAnswerSelected,
}) => {
  const { label, choices } = question;
  const { paragraphFont } = useFonts();

  const handleClickAnswer = (choice: number) => {
    handleUpdateAnswer(idx, choice);
    handleNextQuestion();
  };

  return (
    <div className="px-8 pt-32 flex w-full flex-col items-center justify-center gap-10">
      <p className={paragraphFont.className}>{label}</p>

      <div className="flex flex-col gap-3 w-full">
        {choices.map((choice, choiceIdx) => {
          return (
            <motion.div
              key={`${choice.label}-${choiceIdx}-motion`}
              variants={item}
            >
              <Choice
                question={idx}
                id={`${label}-${choiceIdx}`}
                key={`${label}-${choiceIdx}`}
                name={label}
                value={String(choiceIdx)}
                onClick={handleClickAnswer}
                checked={isAnswerSelected(idx, choiceIdx)}
                choice={choice}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
