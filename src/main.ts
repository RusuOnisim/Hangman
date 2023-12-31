import { checkGuess } from './check';
import { displayInitialWord } from './check';
import { updateWordDisplay } from './check';
import { checkWin } from './check'
import { chosenWord } from './check';
let guessedWord: string[] = Array(chosenWord.length).fill('_');
let gameover: boolean = false;
const letterButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.letter-button');
const startGameButton = document.getElementById('Start') as HTMLButtonElement | null;
if (startGameButton) {
  startGameButton.addEventListener('click', () => {
    window.location.href = 'menu.html';
  });
}
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

updateWordDisplay();

displayInitialWord();
const container = document.querySelector('.overlayhint') as HTMLDivElement;
const hint = document.getElementById('testButton') as HTMLButtonElement;
hint.addEventListener('click', () => {
  container.style.display = 'flex';
});
container.addEventListener('click', () => {
  container.style.display = 'none';
});
