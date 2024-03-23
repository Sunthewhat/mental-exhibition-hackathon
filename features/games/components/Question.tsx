import { QuestionType } from "@/constants/questions";
import Choice from "./Choice";

interface QuestionProp {
  idx: number;
  question: QuestionType;
  handleUpdateAnswer: (questionNumber: number, choice: number) => void;
  isAnswerSelected: (questionNumber: number, choice: number) => boolean;
}

const Question: React.FC<QuestionProp> = ({
  idx,
  question,
  handleUpdateAnswer,
  isAnswerSelected,
}) => {
  const { label, choices } = question;

  const handleClickAnswer = (choice: number) => {
    handleUpdateAnswer(idx, choice);
  };

  return (
    <div className="px-8 pt-32 flex w-full flex-col items-center justify-center gap-10">
      <p>{label}</p>
      <div className="flex flex-col gap-3 items-center">
        {choices.map((choice, choiceIdx) => {
          return (
            <Choice
              questionNumber={idx}
              key={`${label}-${choiceIdx}`}
              id={`${label}-${choiceIdx}`}
              name={label}
              value={String(choiceIdx)}
              onClick={handleClickAnswer}
              checked={isAnswerSelected(idx, choiceIdx)}
              choice={choice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
