import './style.css';
import { updateAnimations } from './updategame';

const wordList: string[] = ["JAVASCRIPT", "HTML", "CSS", "OPENAI", "GPT"];
let chosenWord: string = wordList[Math.floor(Math.random() * wordList.length)];
let guessedWord: string[] = Array(chosenWord.length).fill('_');
let wrongGuesses: number = 0;
let gameover: boolean = false;

const startButton = document.querySelector('.learn-more') as HTMLButtonElement | null;
const container1 = document.querySelector('.container') as HTMLDivElement | null;
const container2 = document.querySelector('.container2') as HTMLDivElement | null;
const wordDisplay: HTMLDivElement | null = document.getElementById('word-display');
const messageDisplay: HTMLDivElement | null = document.getElementById('message');

if (startButton && container1) {
  startButton.addEventListener('click', () => {
    container1.style.display = 'none';
    container2.style.display = 'flex';
  });
}

const letterButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.letter-button');
letterButtons.forEach((button: HTMLButtonElement) => {
  button.addEventListener('click', () => {
    const letter: string = button.textContent || "";
    if (!guessedWord.includes(letter)) {
      if (gameover) return;
      checkGuess(letter);
      checkWin();
      button.disabled = true;
    } else {
      alert('You already guessed that letter.');
    }
  });
});

function updateWordDisplay() {
  wordDisplay!.textContent = guessedWord.join(' ');
}

function checkGuess(letter: string) {
  if (gameover) return; 

  if (chosenWord.includes(letter)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    wrongGuesses++;
    updateAnimations(wrongGuesses);
    
  }
  updateWordDisplay();
}

function checkWin() {
  if (gameover) return; 

  if (guessedWord.join('') === chosenWord) {
    gameover = true;
    letterButtons.forEach((button) => {
      button.disabled = true;
    });
    messageDisplay!.textContent = 'Congratulations! You won!';
  } else if (wrongGuesses === 3) {
    gameover = true;
    setTimeout(() => {
      messageDisplay!.textContent = 'You lost. The word was: ' + chosenWord;
    }, 1000);

    letterButtons.forEach((button) => {
      button.disabled = true;
    });
  }}

function displayInitialWord() {
  const initialWord = guessedWord.map((letter) => (letter !== '_' ? letter : '_')).join(' ');
  wordDisplay!.textContent = initialWord;
}

displayInitialWord();