import ('./style.css');
import { checkGuess } from './check3';
import { displayInitialWord } from './check3';
import { updateWordDisplay } from './check3';
import { checkWin } from './check3'
import { chosenWord } from './check3';
let guessedWord: string[] = Array(chosenWord.length).fill('_');
let gameover: boolean = false;
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

updateWordDisplay() ;

displayInitialWord();

const container = document.querySelector('.overlayhint') as HTMLDivElement;
const hint = document.getElementById('testButton') as HTMLButtonElement;
hint.addEventListener('click', () => {
  container.style.display = 'flex';
});
container.addEventListener('click', () => {
  container.style.display = 'none';
});
