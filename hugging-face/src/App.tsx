import { useState } from "react";
import { languages } from "./languages";
import { getRandomWord } from "./utils";

import ConfettiContainer from "./components/ConfettiContainer";
import Header from "./components/Header";
import GameStatus from "./components/GameStatus";
import LanguageChips from "./components/LanguageChips";
import WordLetters from "./components/WordLetters";
import AriaLiveStatus from "./components/AriaLiveStatus";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

export default function AssemblyEndgame() {
  // State
  const [currentWord, setCurrentWord] = useState<string>(() =>
    getRandomWord()
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Derived values
  const maxWrongGuesses = languages.length - 1;

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= maxWrongGuesses;
  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter =
    guessedLetters[guessedLetters.length - 1];

  const isLastGuessIncorrect =
    !!lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  // Alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Add letter
  function addGuessedLetter(letter: string): void {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }

  // New game
  function startNewGame(): void {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <main>
      <ConfettiContainer isGameWon={isGameWon} />

      <Header />

      <GameStatus
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />

      <LanguageChips
        languages={languages}
        wrongGuessCount={wrongGuessCount}
      />

      <WordLetters
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      <AriaLiveStatus
        currentWord={currentWord}
        lastGuessedLetter={lastGuessedLetter}
        guessedLetters={guessedLetters}
        numGuessesLeft={maxWrongGuesses}
      />

      <Keyboard
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
        addGuessedLetter={addGuessedLetter}
      />

      <NewGameButton
        isGameOver={isGameOver}
        startNewGame={startNewGame}
      />
    </main>
  );
}