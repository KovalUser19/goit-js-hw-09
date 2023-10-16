const start = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
start.addEventListener('click', startSetInterval);
stopBtn.addEventListener('click', stopSetInterval);

stopBtn.setAttribute('disabled', '');
let timerId = null;
  function startSetInterval(){
    timerId =  setInterval(() => {
      let color = getRandomHexColor();
      body.style.backgroundColor = color;
    }, 1000)

    start.setAttribute('disabled', '')
    stopBtn.removeAttribute('disabled')
};
function stopSetInterval() {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', '')
  start.removeAttribute('disabled')
}
  function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`
};
