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
  "XEROSTOMIA",
  "PECTUSEXCAVATUM",
  "XYLOLITHIASIS",
  "CRYPTORCHIDISM",
  "ANTIPHOSPHOLIPIDSYNDROME",
  "HIPPOCAMPALESCLEROSIS",
  "SCHISTOSOMIASIS",
  "PARANEOPASTICPEMPHIGUS",
  "POEMSSYNDROME",
  "ERYTHRODERMICPSORIASIS",
  "HYPERPARATHYROIDISM",
  "ANTIPSYCHOTICMEDICATION",
  "ANTITHROMBINIIIDEFICIENCY",
  "DICHLORODIPHENYLTRICHLOROETHANE",
  "ACETYLCHOLINESTERASEDEFICIENCY",
  "CHOROIDEREMIA",
  "EPENDYMOMA",
  "HYPOCHONDROPLASIA",
  "PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS",
  "FLOCCINAUCINIHILIPILIFICATION"
];
let chosenWord: string = wordList[Math.floor(Math.random() * wordList.length)];
let guessedWord: string[] = Array(chosenWord.length).fill('_');
let wrongGuesses: number = 0;
let gameover: boolean = false;
const wordDisplay = document.getElementById('word-display') as HTMLDivElement | null;
const lose = document.querySelector('.overlaylose') as HTMLDivElement;
const win = document.querySelector('.overlaywin') as HTMLDivElement;
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