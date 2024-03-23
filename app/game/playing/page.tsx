"use client";
import EnterName from "@/features/games/components/pages/EnterName";
import QuestionForm from "@/features/games/components/pages/QuestionForm";
import React, { useState } from "react";

const GamePage = () => {
  const [enterGame, setEnterGame] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [answers, setAnswers] = useState<number[]>([]);
  
  const isAnswerSelected = (questionNumber: number, choice: number) => {
    return answers[questionNumber] === choice;
  };

  const handleUpdateAnswer = (questionNumber: number, choice: number) => {
    let changedAnswers = answers;
    changedAnswers[questionNumber] = choice;
    setAnswers([...changedAnswers]);
  };

  return (
    <>
      {enterGame ? (
        <>
          <QuestionForm
            isAnswerSelected={isAnswerSelected}
            handleUpdateAnswer={handleUpdateAnswer}
            setEnterGame={setEnterGame}
            answers={answers}
        
          />
        </>
      ) : (
        <EnterName name={name} setName={setName} setEnterGame={setEnterGame} />
      )}
    </>
  );
};

export default GamePage;
