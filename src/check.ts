import { updateAnimations } from "./updategame";
export { checkGuess } ;
export {displayInitialWord};
export {updateWordDisplay};
export {checkWin};
export {chosenWord};
const letterButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.letter-button');
const messageDisplay = document.getElementById('message') as HTMLDivElement | null;
const messageDisplay1 = document.getElementById('message1') as HTMLDivElement | null;
const wordList: string[] = [
  "CODE",
  "BYTE",
  "DATA",
  "DNS",
  "SQL",
  "HTML",
  "CSS",
  "URL",
  "JAVA",
  "PHP",
  "VPN",
  "API",
  "WIFI",
  "SSL",
  "OS",
  "IDE",
  "UNIX",
  "IPv6",
  "JSON",
  "PERL"
];
let chosenWord: string = wordList[Math.floor(Math.random() * wordList.length)];
let guessedWord: string[] = Array(chosenWord.length).fill('_');
let wrongGuesses: number = 0;
let gameover: boolean = false;
const wordDisplay = document.getElementById('word-display') as HTMLDivElement;


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



  function updateWordDisplay() {
    wordDisplay!.textContent = guessedWord.join(' ');
  }



  function displayInitialWord() {
    const initialWord = guessedWord.map((letter) => (letter !== '_' ? letter : '_')).join(' ');
    wordDisplay!.textContent = initialWord;
  }

  const lose = document.querySelector('.overlaylose') as HTMLDivElement;
  const win = document.querySelector('.overlaywin') as HTMLDivElement;
  function checkWin() {
    if (gameover) return;
  
    if (guessedWord.join('') === chosenWord) {
      gameover = true;
  
      
      letterButtons.forEach((button) => {
        button.disabled = true;
      });
      win.style.display ='flex';
      messageDisplay!.textContent = 'Congratulations! You won!';
    } else if (wrongGuesses === 3) {
      gameover = true;
  
  
      letterButtons.forEach((button) => {
        button.disabled = true;
      });
  
      setTimeout(() => {
        lose.style.display ='flex';
        messageDisplay1!.textContent = 'You lost. The word was: ' + chosenWord;
      }, 6000);
    }
  }
 console.log(chosenWord);