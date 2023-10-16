import Notiflix from "notiflix";
const form = document.querySelector('.form');
form.addEventListener('submit', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target;

  for (let i = 1; i <= amount.value; i++) {
    let delayStep = Number(delay.value) + step.value*i;
    console.log(delayStep);
    createPromise(i, delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          })
  }
  e.target.reset();
  }

function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
       setTimeout(() => {
       if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
        }, delay)
  })
}