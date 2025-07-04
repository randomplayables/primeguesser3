# Prime Number Guessing Game

An interactive game built with Vite, React, and TypeScript. Try to guess the secret prime number within a defined range before you run out of attempts. Hints will guide you to guess higher or lower, and your progress is saved via the RandomPlayables API.

## Features

- Random prime number generation
- Higher / lower hints
- Configurable range and maximum attempts
- Session initialization and data saving with RandomPlayables

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm or yarn

### Installation

1. Clone the repository  
2. Install dependencies  
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the project root with your game ID  
   ```
   VITE_GAME_ID=your_game_id_here
   ```

### Available Scripts

- `npm run dev`  
  Starts the development server at http://localhost:5173  
- `npm run build`  
  Bundles the app for production to the `dist` folder  
- `npm run preview`  
  Serves the production build locally for preview

## Gameplay

- A secret prime number is chosen at random within the configured range.  
- Enter your guess; you will be told if the secret number is higher or lower.  
- You have a limited number of attempts (see `src/constants/index.ts`).  
- After each guess, game state is saved to the RandomPlayables backend.

## Project Structure

```
.
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   ├── GameBoard.tsx      # Displays game status and past guesses
│   │   ├── GuessInput.tsx     # Input field for entering guesses
│   │   ├── Hint.tsx           # Shows higher/lower hints
│   │   └── Result.tsx         # Win/loss screen with restart option
│   ├── constants
│   │   └── index.ts           # Game constants (range, max attempts)
│   ├── hooks
│   │   └── useGame.ts         # Game logic, session init, data saving
│   ├── services
│   │   └── apiService.ts      # Backend API integration
│   ├── types
│   │   └── index.ts           # TypeScript interfaces and types
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Entry point that renders App
│   └── index.css              # Global styles
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-repo/issues).

## License

MIT License