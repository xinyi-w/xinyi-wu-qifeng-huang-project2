import './index.css';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home-content">
        <h2>Welcome to Wordle Game</h2>
        <p>
          Wordle is a single-player word game where you have to guess a word
          within a certain number of attempts. Can you guess the word and win
          the game?
        </p>
        <p>Choose a difficulty level to start playing!</p>
        <div className="difficulty-buttons">
          <button onClick={() => window.location.href = '/game/normal'}>
            Normal
          </button>
          <button onClick={() => window.location.href = '/game/hard'}>
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}
