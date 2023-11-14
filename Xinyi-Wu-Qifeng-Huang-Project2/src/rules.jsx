import Header from "./Header";
import './index.css';

export default function Rules() {
  return (
    <div>
      <Header />
      <div className="rules-container">
        <h2>Rules for Wordle Game</h2>
        <p>
          Welcome to the Wordle Game! Here are the rules to play and enjoy the
          game:
        </p>
        <ol>
          <li>Choose a difficulty level: Normal or Hard.</li>
          <li>
            You have a limited number of attempts to guess the hidden word.
          </li>
          <li>
            Input a word with the specified length based on the difficulty.
          </li>
          <li>
            After each attempt, you will receive feedback on your guess.
          </li>
          <li>
            If your guess is correct, congratulations! You can try again.
          </li>
          <li>
            If your guess is incorrect, keep trying until you run out of
            attempts.
          </li>
          <li>
            Enjoy the game and challenge yourself to improve your word-guessing
            skills!
          </li>
        </ol>
      </div>
    </div>
  );
}
