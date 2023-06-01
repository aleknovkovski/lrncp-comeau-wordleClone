import React from "react";
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";

function GuessesList({guesses}) {
  return (
      <div className="guess-results">
          {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => {
            return <Guess word={guesses[index]} key={index}/>
          })}
      </div>
  );
}

export default GuessesList;
