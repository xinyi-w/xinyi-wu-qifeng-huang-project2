import { useState, useEffect } from 'react';
import Header from './Header';
import "./Game.css"

const wordleWords = {
  normal: ['rocket', 'guitar', 'flower', 'puzzle', 'castle', 'planet', 'breeze', 'cookie', 'wonder', 'piano'],
  hard: ['mystery', 'dolphin', 'champion', 'fantasy', 'whisper', 'silence', 'elephant', 'calendar', 'passion', 'journey'],
};

const getRandomWord = (difficulty) => {
  const words = wordleWords[difficulty];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
};

export default function Game (){
  const [difficulty, setDifficulty] = useState('normal');
  const [targetWord, setTargetWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setTargetWord(getRandomWord(difficulty));
    setAttempts(difficulty === 'normal' ? 6 : 5);
    setFeedback('');
  }, [difficulty]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value.toUpperCase());
  };

  const handleGuess = () => {
    if (userInput.length !== targetWord.length) {
      setFeedback('Word length does not match.');
      return;
    }

    setAttempts(attempts - 1);

    if (userInput === targetWord) {
      setFeedback('Congratulations! Would you like to try again?');
    } else {
      let feedbackString = '';
      for (let i = 0; i < targetWord.length; i++) {
        if (userInput[i] === targetWord[i]) {
          feedbackString += 'G';
        } else if (targetWord.includes(userInput[i])) {
          feedbackString += 'Y';
        } else {
          feedbackString += 'R';
        }
      }
      setFeedback(feedbackString);
    }
  };

  return (
    <div>
      <Header />
      <div className="game-container">
          <h1>Wordle Game</h1>
          <div>
            <button onClick={() => setDifficulty('normal')}>Normal</button>
            <button onClick={() => setDifficulty('hard')}>Hard</button>
          </div>
          <div>
            <p>Guess the {targetWord.length}-letter word!</p>
            <p>Attempts remaining: {attempts}</p>
            <input type="text" value={userInput} onChange={handleInputChange} />
            <button onClick={handleGuess}>Guess</button>
            <p>{feedback}</p>
          </div>
        </div>
    </div>
  );
}