"use client";
import QuestionForm from "@/components/QuestionForm";
import EnterName from "@/features/games/components/EnterName";
import React, { useState } from "react";

const GamePage = () => {
  const [enterGame, setEnterGame] = useState<boolean>(false);
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
        <QuestionForm
          isAnswerSelected={isAnswerSelected}
          handleUpdateAnswer={handleUpdateAnswer}
          setEnterGame={setEnterGame}
        />
      ) : (
        <EnterName setEnterGame={setEnterGame} />
      )}
    </>
  );
};

export default GamePage;
