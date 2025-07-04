import React from 'react'
import useGame from '../hooks/useGame'
import GuessInput from './GuessInput'
import Hint from './Hint'
import Result from './Result'

const GameBoard: React.FC = () => {
  const {
    guesses,
    hint,
    attemptsLeft,
    maxAttempts,
    isGameOver,
    isWinner,
    handleGuess,
    handleRestart,
  } = useGame()

  return (
    <div className="game-board">
      <div className="status">
        <p>
          Attempts left: {attemptsLeft} / {maxAttempts}
        </p>
      </div>
      <div className="guess-history">
        <h2>Your Guesses:</h2>
        {guesses.length > 0 ? (
          <ul>
            {guesses.map((guess, index) => (
              <li key={index}>{guess}</li>
            ))}
          </ul>
        ) : (
          <p>No guesses yet.</p>
        )}
      </div>
      {isGameOver ? (
        <Result isWinner={isWinner} onRestart={handleRestart} />
      ) : (
        <>
          <GuessInput onGuess={handleGuess} />
          <Hint hint={hint} />
        </>
      )}
    </div>
  )
}

export default GameBoard