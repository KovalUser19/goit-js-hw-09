import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector("[data-start]");
 const timer = document.querySelector('.timer')
btn.addEventListener('click', countdownTimer);
btn.setAttribute('disabled', '');

const selectors = {
 day: document.querySelector('[data-days]'),
 hour: document.querySelector('[data-hours]'),
 minute: document.querySelector('[data-minutes]'),
 second: document.querySelector('[data-seconds]'),
}
currentTime = Date.now();

let timerId = null;

function countdownTimer() {
  futureTime = new Date(input.value);
  let targetTime = futureTime - currentTime;

  timerId = setInterval(() => {
    const convertedData =  convertMs(targetTime);
    selectors.day.textContent = addLeadingZero(convertedData.days);
    selectors.hour.textContent = addLeadingZero(convertedData.hours);
    selectors.minute.textContent = addLeadingZero(convertedData.minutes);
    selectors.second.textContent = addLeadingZero(convertedData.seconds);
    targetTime -= 1000;
    console.log(convertedData);
  }, 1000)
  if (targetTime === 0) {
    clearInterval(timerId);
  }
}

flatpickr(input,{
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
   onClose(selectedDates) {
     if (selectedDates[0] <= new Date()) {
       Notiflix.Notify.success('Please choose a date in the future');
     } else {
       btn.removeAttribute('disabled')
     }
    console.log(selectedDates[0]);
},
 })

 function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

   return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
   return `${value}`.padStart(2, '0');

}
