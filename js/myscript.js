
// prendo in considerazione l'orario di inizio lezione
const lessonStart = Date.parse("February 7, 2023 9:30 AM");;

// prendo i dati relativi all'ora che voglio raggiungere
// const daysLesson = lessonStart.getDay();
// console.log(daysLesson);
// const hoursLesson = lessonStart.getHours();
// console.log(hoursLesson);
// const minutesLesson = lessonStart.getMinutes();
// console.log(minutesLesson);
// const secondsLesson = lessonStart.getSeconds();
// console.log(secondsLesson);

// prendo in considerazione l'orario attuale
const adesso = Date.now();

// prendo i dati relativi all'ora attuale
// const daysAdesso = adesso.getDay();
// console.log(daysAdesso);
// const hoursAdesso = adesso.getHours();
// console.log(hoursAdesso);
// const minutesAdesso = adesso.getMinutes();
// console.log(minutesAdesso);
// const secondsAdesso = adesso.getSeconds();
// console.log(secondsAdesso);

// confronto l'attuale con quella da raggiungere
let daysCountdown = daysLesson % daysAdesso;
let hoursCountdown = 24 % hoursAdesso;
let minutesCountdown = 60 % minutesAdesso;
let secondsCountdown = 60 % secondsAdesso;

// imposto l'intervallo ogni quanto dovrò stampare, un secondo
const countdownStampa = setInterval(stampaAdesso, 1000);

function stampaAdesso() {
    // prendo i miei elementi dove stampero il countdown
    document.getElementById("days").innerHTML = daysCountdown;
    document.getElementById("hours").innerHTML = hoursCountdown + ":";
    document.getElementById("minutes").innerHTML = minutesCountdown + ":";
    document.getElementById("seconds").innerHTML = secondsCountdown;
}


console.log(now);
console.log(lesson);