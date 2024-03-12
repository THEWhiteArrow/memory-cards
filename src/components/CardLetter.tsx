import "./CardLetter.css";
type CardLetterProps = {
  letter: string | null;
  highlight: boolean;
};

function CardLetter(props: CardLetterProps) {
  const { letter, highlight } = props;
  return (
    <div
      className={`CardLetter ${letter === " " ? "disabled" : ""} ${
        letter ? "exists" : ""
      } ${highlight ? "highlight" : ""}`}
    >
      <div className="CardLetterText">{letter}</div>
    </div>
  );
}

export default CardLetter;
