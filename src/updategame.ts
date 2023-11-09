const live1Image = document.getElementById('live1') as HTMLImageElement ;
const live2Image = document.getElementById('live2') as HTMLImageElement ;
const live3Image = document.getElementById('live3') as HTMLImageElement ;
const hint = document.getElementById('testButton') as HTMLButtonElement;
export function updateAnimations(wrongGuesses: number) {
    const ufoElement = document.querySelector('.ufo') as HTMLElement | null;
    const sheepElement = document.querySelector('.sheep') as HTMLElement | null;
    const ufolight = document.querySelector('.ufolight-gradient') as HTMLElement | null;
  
    if (ufoElement && ufolight && sheepElement) {
      if (wrongGuesses === 1) {
        live1Image.style.animation = 'monochromeBlink 1s ease-in-out 1 forwards';
        ufoElement.style.animation = 'slide 2s forwards';
      } else if (wrongGuesses === 2) {
        live2Image.style.animation = 'monochromeBlink 1s ease-in-out 1 forwards';
        setTimeout(() => {
          ufolight.style.animation = 'opacityOn 3s normal forwards';
        }, 1000);
      } else if (wrongGuesses === 3) {
        live3Image.style.animation = 'monochromeBlink 1s ease-in-out 1 forwards';
        sheepElement.style.animation = 'moveAndRotate 9s forwards';
        hint.disabled=true;
      }
    }
    
  }
  