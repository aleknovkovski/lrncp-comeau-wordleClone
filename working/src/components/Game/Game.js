import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});


function Game() {
    const [guesses, setGuesses] = React.useState([]);

    const handleNewGuess = (submittedGuess) => {
        setGuesses((prevGuesses) => [...prevGuesses, submittedGuess]);
    }

    return <>
        <GuessesList guesses={guesses}/>
        <GuessInput handleNewGuess={handleNewGuess}/>
    </>;
}

export default Game;
