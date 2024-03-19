import { QuestionType } from "@/constants/questions";

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

  const handleClickAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdateAnswer(idx, Number(event.currentTarget.value));
  };

  return (
    <>
      <p>{label}</p>
      {choices.map((choice, choiceIdx) => {
        return (
          <>
            <input
              type="radio"
              id={`${label}-${choiceIdx}`}
              name={label}
              value={choiceIdx}
              onChange={handleClickAnswer}
              checked={isAnswerSelected(idx, choiceIdx)}
            />
            <label htmlFor={`${label}-${choiceIdx}`} key={choiceIdx}>
              {choice}
            </label>
            <br />
          </>
        );
      })}
    </>
  );
};

export default Question;
