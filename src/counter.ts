const startButton = document.getElementById('start-button') as HTMLButtonElement | null;
const container = document.querySelector('.container') as HTMLDivElement | null;


if (startButton && container) {
  startButton.addEventListener('click', () => {
  
    container.style.display = 'none';
  });
}