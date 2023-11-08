
export function updateAnimations(wrongGuesses: number) {
    const ufoElement = document.querySelector('.ufo') as HTMLElement | null;
    const sheepElement = document.querySelector('.sheep') as HTMLElement | null;
    const ufolight = document.querySelector('.ufolight-gradient') as HTMLElement | null;
  
    if (ufoElement && ufolight && sheepElement) {
      if (wrongGuesses === 1) {
        ufoElement.style.animation = 'slide 2s forwards';
      } else if (wrongGuesses === 2) {
        setTimeout(() => {
          ufolight.style.animation = 'opacityOn 3s normal forwards';
        }, 1000); // 1.5-second delay
      } else if (wrongGuesses === 3) {
        sheepElement.style.animation = 'moveAndRotate 9s forwards';
      }
    }
  }