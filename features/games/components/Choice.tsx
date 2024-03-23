import { ChoiceType } from "@/constants/questions";
import { getAnswers } from "@/features/games/helpers";
import { useFonts } from "@/hooks/useFont";

interface ChoiceProp {
  question: number;
  id: string;
  name: string;
  value: string;
  onClick: (choice: number) => void;
  checked: boolean;
  choice: ChoiceType;
}

const Choice: React.FC<ChoiceProp> = ({
  question,
  id,
  name,
  value,
  onClick,
  checked,
  choice,
}) => {
  const { paragraphFont } = useFonts();

  const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onClick(Number(event.currentTarget.value));
  };

  const handleUpdateScore = () => {
    let answers = getAnswers();
    if (!answers) {
      answers = [];
    }

    let changedAnswers = answers;
    changedAnswers[question] = choice.point;
    window.localStorage.setItem("answers", JSON.stringify(changedAnswers));
  };

  return (
    <div
      className={`cursor-pointer py-5 px-20 lg:px-64 border-2 rounded-2xl w-full  ${
        checked ? "border-amber-300" : "border-[#B9A5D6]"
      }`}
      onClick={() => {
        onClick(Number(value));
        handleUpdateScore();
      }}
    >
      <input
        className="appearance-none"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={handleChoiceChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        key={value}
        className={`cursor-pointer text-[#5A81BC] ${paragraphFont.className}`}
      >
        {choice.label}
      </label>
    </div>
  );
};

export default Choice;
