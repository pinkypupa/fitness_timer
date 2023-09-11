let textContainer = document.querySelector(".circle__text");
let buttonStart = document.querySelector(".start");
let circle = document.querySelector(".circle");

//один цикл это смена работа + отдых. каждая работа это: удаление класса, добавляем функцию с таймером. 
//каждый отдых это добавление класса и функция с таймером, но начинаем после предыд. 

let countOne = (time) => {
  return function () {
    if (time > 0) {
      // console.log(time);
      textContainer.textContent = time;
    } else {
      clearInterval(firstID);
      textContainer.textContent = 0;
      // circle.classList.add("contrast");
    }
    time--;
  }
}

let countTwo = (time) => {
  return function () {
    if (time > 0) {
      // console.log(time);
      textContainer.textContent = time;
    } else {
      clearInterval(secondID);
      textContainer.textContent = 0;
      // circle.classList.remove("contrast");
    }
    time--;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//теперь сообразим это в одну функцию с параметрами времени 

let functionTimer = (training, resting) => {
  firstID = setInterval(countOne(training), 1000);
  circle.classList.remove("contrast");

  let restingPeriod = () => {
    secondID = setInterval(countTwo(resting), 1000);
    circle.classList.add("contrast");
  }

  setTimeout(restingPeriod, training * 1000 + 1000);
}


async function repeatCycle(training, resting, repeat) {
  let timeToWait = (training + resting) * 1000;
  while (repeat > 0) {
    functionTimer(training, resting);
    await sleep(timeToWait);
    repeat--;
  }
}

// repeatCycle(10, 4, 2);

buttonStart.addEventListener('click', function () {
  repeatCycle(5, 2, 1);
});

