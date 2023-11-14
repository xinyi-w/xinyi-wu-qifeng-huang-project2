import { useState, useEffect } from "react";
import Header from "./Header";
import "./Game.css";

const INITIAL_ATTEMPTS = 6;

export default function Game() {
  const [word, setWord] = useState("");
  const [attempts, setAttempts] = useState(INITIAL_ATTEMPTS);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [guessedWord, setGuessedWord] = useState(Array(word.length).fill(""));

  useEffect(() => {
    setWord(getRandomWord());
    setAttempts(INITIAL_ATTEMPTS);
    setUserInput("");
    setFeedback("");
    setGuessedWord(Array(word.length).fill(""));
  }, []);

  function getRandomWord() {
    const words = ["example", "another", "wordle", "react", "javascript"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value.toLowerCase().slice(0, word.length));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    checkGuess();
  };

  const checkGuess = () => {
    const newGuessedWord = [...guessedWord];
    let correctPositions = 0;

    for (let i = 0; i < word.length; i++) {
      if (userInput[i] === word[i]) {
        correctPositions++;
        newGuessedWord[i] = userInput[i];
      }
    }

    const isCorrect = correctPositions === word.length;

    if (isCorrect) {
      setFeedback("Congratulations! You guessed the word!");
      setGuessedWord(word.split(""));
    } else {
      setAttempts((prevAttempts) => prevAttempts - 1);
      setFeedback(
        `Incorrect! ${attempts - 1} attempts remaining. Try again!`
      );
    }

    if (attempts === 1 && !isCorrect) {
      setFeedback(`Sorry, you've run out of attempts. The correct word was "${word}". Try again!`);
      setGuessedWord(word.split(""));
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setAttempts(INITIAL_ATTEMPTS);
    setUserInput("");
    setFeedback("");
    setGuessedWord(Array(word.length).fill(""));
  };

  return (
    <div>
      <Header />
      <div className="game-container">
        <h2>Wordle Game</h2>
        <p>{`Attempts remaining: ${attempts}`}</p>
        <div className="word-display">
          {guessedWord.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Enter a {word.length}-letter word:
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              maxLength={word.length}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p className="feedback">{feedback}</p>
        <button className="reset-button" onClick={resetGame}>
          Try Again
        </button>
      </div>
    </div>
  );
}
