import React, { useCallback, useEffect, useState } from "react";
import { IMemoryCard, get_random_memory_card } from "../services/memory";
import Card from "./Card";
import "./CardAlbum.css";

interface CardAlbumProps {
  album: string;
}

function CardAlbum(props: CardAlbumProps) {
  const { album } = props;
  const [counter, setCounter] = useState(-2);
  const [cardData, setCardData] = useState<IMemoryCard | null>(null);

  const handleNext = useCallback(async () => {
    setCounter((counter) => counter + 1);
    await setCardData(await get_random_memory_card(album));
  }, [album]);

  useEffect(() => {
    handleNext();
  }, [handleNext]);

  return (
    <div className="CardAlbum">
      <h1>Verbs Album : {counter}</h1>
      {cardData && <Card {...cardData} onNextCard={handleNext} />}
    </div>
  );
}

export default CardAlbum;
