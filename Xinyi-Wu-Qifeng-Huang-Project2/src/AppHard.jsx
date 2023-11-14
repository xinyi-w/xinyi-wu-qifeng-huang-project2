import "./App.css";
import BoardHard from "./ComponentsHard/BoardHard";
import Keyboard from "./ComponentsHard/KeyBoard";
import { boardDefault, generateWordSet } from "./ComponentsHard/WordsHard";
import { useState, createContext, useEffect } from "react";
import GameOver from "./ComponentsHard/GameOver";
import Header from "./Header";

export const AppHardContext = createContext();

export default function AppHard() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [error, setError] = useState(null);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    console.log("onEnter called");
    if (currAttempt.letter !== 7) {
      setError("Word too short!");
      return;
    }

    let currWord = "";
    for (let i = 0; i < 7; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
  
      if (currWord.toLowerCase() === correctWord.toLowerCase()) {
        // Words match, update the gameOver state
        setGameOver({
          gameOver: true,
          guessedWord: true,
        });
      } else if (currAttempt.attempt === 4) {
        // No more attempts left, update the gameOver state
        setGameOver({
          gameOver: true,
          guessedWord: false,
        });
      }
    } else {
      setError("Word not found!");
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 6) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div>
      <Header />
      <div className="App">
        <h1>Wordle</h1>
        <AppHardContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            correctWord,
            onSelectLetter,
            onDelete,
            onEnter,
            setDisabledLetters,
            disabledLetters,
            gameOver,
          }}
        >
          <div className="game">
            {error && <div className="error-message">{error}</div>}
            <BoardHard />
            <div className="difficulty-buttons">
              <button onClick={() => window.location.href = '/game/hard'}>
                Reset
              </button>
            </div>
            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </AppHardContext.Provider>
      </div>
    </div>
  );
}