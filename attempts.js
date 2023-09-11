// setInterval ( expression, interval );
// Для того, чтобы остановить последующие вызовы в setInterval(), 
// вам нужно вызывать clearInterval(timerId), где timerId это имя функции setInterval.
//вызываем expression для вывода числа.в том же expression нужно уменьшать тайм 
// итак, какой у нас будет интервал, нам известно - 1000
// какой должен быть expression? 
// делай вывод в консоль значения до тех пор, пока оно не станет равно нулю. потом обнулись 
//пробуем 1 =>


//не совсем понимаю, как очищать  интервал универсально (не подставляя конкретный ид)
let b = (time) => {
    return function () {
        if (time > 0) {
            console.log(time);
        } else {
            clearInterval(motherFuckerID);
        }
        time--;
    }
}

let a = (time) => {
    return function () {
        if (time > 0) {
            console.log(time);
        } else {
            clearInterval(simpleId);
        }
        time--;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//теперь сообразим это в одну функцию с параметрами времени 

let functionTimer = (training, resting) => {
    motherFuckerID = setInterval(b(training), 1000);

    let whaat = () => {
        simpleId = setInterval(a(resting), 1000);
    }
    setTimeout(whaat, training * 1000);
}


async function repeatCycle(training, resting, repeat) {
    let timeToWait = (training + resting) * 1000;
    while (repeat > 0) {
        functionTimer(training, resting);
        await sleep(timeToWait);
        repeat--;
    }
}

repeatCycle(5, 2, 3);



// let proverka = (bubaka) => {
//     // for (let i = 0; i <= bubaka; i++) {
//     while (bubaka > 0) {
//         // let pipi = setTimeout(() => { console.log(bubaka);}, 5000);
//         setTimeout(() => { console.log(bubaka); }, 5000);
//         bubaka--;
//         // }
//     }
// }
// proverka(7);


// async function delayedTimer(bubaka) {
//     while (bubaka > 0) {
//         console.log(bubaka);
//         await sleep(3000);
//         bubaka--;
//     }
// }

// delayedTimer(7);