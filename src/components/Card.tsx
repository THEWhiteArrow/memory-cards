import { useEffect, useState } from "react";
import CardLetter from "./CardLetter";
import "./Card.css";

type CardProps = {
  word: string;
  translation: Array<string>;
  onNextCard: () => Promise<void>;
};

type CardState = {
  guess: string;
  highlight: boolean;
  incorrect: boolean;
  incorrectString: string;
};

function Card(props: CardProps) {
  const { word, translation, onNextCard } = props;

  const [state, setState] = useState<CardState>({
    guess: "",
    highlight: false,
    incorrect: false,
    incorrectString: "",
  });

  function randomIncorrectString() {
    const incorrectStrings = [
      "Nope, try again. :(",
      "Not quite, try again. ",
      "Incorrect, try again.",
      "Wrong, try again. :(",
      "Try again.",
      "Nope, try again.",
      "Better luck next time.",
      "Incorrect.",
      "Wrong.",
      "You can do it! Try again.",
      "You wish. Try again.",
    ];

    return incorrectStrings[
      Math.floor(Math.random() * incorrectStrings.length)
    ];
  }

  useEffect(() => {
    function isCorrect() {
      return (
        state.guess.toLowerCase() === translation.join("").replaceAll(" ", "")
      );
    }
    async function handleKeyPress(event: KeyboardEvent) {
      // TODO: fix this enter not firiring

      if (!state.highlight && event.key === "Backspace") {
        setState((currentState) => ({
          ...currentState,
          guess: currentState.guess.slice(0, -1),
        }));
      } else if (event.key === "Enter") {
        if (isCorrect()) {
          if (state.highlight) {
            setState((currentState) => ({
              ...currentState,
              highlight: false,
              incorrect: false,
              guess: "",
            }));
            await onNextCard();
          } else {
            setState((currentState) => ({
              ...currentState,
              highlight: true,
              incorrect: false,
            }));
          }

          console.log("Correct");
        } else {
          setState((currentState) => ({
            ...currentState,
            incorrect: true,
            incorrectString: randomIncorrectString(),
          }));
          console.log("Incorrect");
        }
      } else if (
        !state.highlight &&
        event.key.length === 1 &&
        event.key !== " " &&
        state.guess.length <
          (translation.join("").replaceAll(" ", "") || []).length
      ) {
        setState((currentState) => ({
          ...currentState,
          guess: currentState.guess + event.key,
        }));
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [state, onNextCard, translation]);

  let currentIndex = 0;

  const cards = translation.map((word, j) => (
    <div className="CardGuessRow">
      {word.split("").map((letter, i) => (
        <CardLetter
          key={`${j}_${i}`}
          highlight={state.highlight}
          letter={letter === " " ? " " : state.guess[currentIndex++]}
        />
      ))}
    </div>
  ));

  return (
    <div className="Card">
      <h2>{word}</h2>
      <div className="CardGuessContainer">{cards}</div>
      <div className="CardIncorrect">
        {state.incorrect ? state.incorrectString : ""}
      </div>
    </div>
  );
}

export default Card;
