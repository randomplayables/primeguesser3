export type Feedback = 'correct' | 'higher' | 'lower';

export interface RoundData {
  guess: number;
  feedback: Feedback;
}

export interface GameSession {
  sessionId: string;
}

export interface InitGameSessionResponse {
  sessionId: string;
}

export type SaveGameDataResponse = any;

export interface UseGameReturn {
  guesses: RoundData[];
  remainingAttempts: number;
  hint: Feedback | null;
  isGameOver: boolean;
  isWin: boolean;
  handleGuess: (guess: number) => void;
  restartGame: () => void;
}

export interface GameBoardProps {
  guesses: RoundData[];
  remainingAttempts: number;
  hint: Feedback | null;
  isGameOver: boolean;
  isWin: boolean;
}

export interface GuessInputProps {
  onGuess: (guess: number) => void;
  disabled: boolean;
}

export interface HintProps {
  hint: Feedback | null;
}

export interface ResultProps {
  isWin: boolean;
  secretNumber: number;
  guessCount: number;
  onRestart: () => void;
}