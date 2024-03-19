interface ChoiceProp {
  id: string;
  name: string;
  value: string;
  onClick: (choice: number) => void;
  checked: boolean;
  choice: string;
}

const Choice: React.FC<ChoiceProp> = ({
  id,
  name,
  value,
  onClick,
  checked,
  choice,
}) => {
  const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onClick(Number(event.currentTarget.value));
  };

  return (
    <div
      className={`cursor-pointer py-5 px-20 lg:px-64 border-2 rounded-2xl w-full  ${
        checked ? "border-amber-300" : "border-red-300"
      }`}
      onClick={() => onClick(Number(value))}
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
      <label htmlFor={id} key={value} className="cursor-pointer">
        {choice}
      </label>
    </div>
  );
};

export default Choice;
