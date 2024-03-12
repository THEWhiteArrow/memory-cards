import { useEffect, useState } from "react";
import CardLetter from "./CardLetter";
import "./Card.css";

type CardProps = {
  word: string;
  translation: Array<string>;
  // nextCard: () => {};
};

function Card(props: CardProps) {
  const { word, translation } = props;
  const [guess, setGuess] = useState("");
  const [highlight, setHighlight] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [incorrectString, setIncorrectString] = useState("");

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
      return guess.toLowerCase() === translation.join("").replaceAll(" ", "");
    }
    function handleKeyPress(event: KeyboardEvent) {
      // TODO: fix this enter not firiring
      if (!highlight && event.key === "Backspace") {
        setGuess((currentGuess) => currentGuess.slice(0, -1));
      } else if (event.key === "Enter") {
        if (isCorrect()) {
          if (highlight) {
            // nextCard();
          }
          setHighlight(true);
          setIncorrect(false);
          console.log("Correct");
        } else {
          setIncorrect(true);
          setIncorrectString(randomIncorrectString());
          console.log("Incorrect");
        }
      } else if (
        !highlight &&
        event.key.length === 1 &&
        event.key !== " " &&
        guess.length <
          (translation.join("").replaceAll(" ", "").match(/\w/g) || []).length
      ) {
        setGuess((currentGuess) => currentGuess + event.key);
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [guess, highlight, translation]);

  let currentIndex = 0;

  const cards = translation.map((word, j) => (
    <div className="CardGuessRow">
      {word.split("").map((letter, i) => (
        <CardLetter
          key={`${j}_${i}`}
          highlight={highlight}
          letter={letter === " " ? " " : guess[currentIndex++]}
        />
      ))}
    </div>
  ));

  return (
    <div className="Card">
      <h2>{word}</h2>
      <div className="CardGuessContainer">{cards}</div>
      <div className="CardIncorrect">{incorrect ? incorrectString : ""}</div>
    </div>
  );
}

export default Card;
