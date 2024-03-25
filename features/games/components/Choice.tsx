import { ChoiceType } from "@/constants/questions";
import { getAnswers } from "@/features/games/helpers";
import { useFonts } from "@/features/shared/hooks/useFont";

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

  const style = {
    hover:
      "duration-500 hover:scale-90 transition hover:bg-[#B9A5D6] hover:text-white",
    selected: "border-[#B9A5D6]  bg-purple-100",
    notSelected: "border-[#B9A5D6] ",
  };

  return (
    <div
      className={`
      flex 
      items-center 
      justify-center 
      text-center 
      cursor-pointer
      py-5 
      border-2 
      rounded-2xl 
      choice-hover 
      w-full 
      h-[70px] 
      p-2 
      text-[#5A81BC] 
      
      ${style.hover}
      ${checked ? style.selected : style.notSelected} 
      `}
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
        className={`cursor-pointer ${paragraphFont.className} `}
      >
        {choice.label}
      </label>
    </div>
  );
};

export default Choice;
