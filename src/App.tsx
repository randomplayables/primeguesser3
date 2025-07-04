import React from 'react';
import logo from './assets/logo.svg';
import useGame from './hooks/useGame';
import GameBoard from './components/GameBoard';
import GuessInput from './components/GuessInput';
import Hint from './components/Hint';
import Result from './components/Result';

const App: React.FC = () => {
  const {
    guesses,
    hint,
    attemptsLeft,
    maxAttempts,
    isGameOver,
    hasWon,
    target,
    roundNumber,
    handleGuess,
    handleRestart,
  } = useGame();

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="Logo" />
        <h1>Prime Number Guessing Game</h1>
      </header>
      <main className="app-main">
        <GameBoard guesses={guesses} attemptsLeft={attemptsLeft} maxAttempts={maxAttempts} />
        {!isGameOver ? (
          <>
            <GuessInput onGuess={handleGuess} />
            <Hint hint={hint} />
          </>
        ) : (
          <Result hasWon={hasWon} target={target} roundNumber={roundNumber} onRestart={handleRestart} />
        )}
      </main>
    </div>
  );
};

export default App;