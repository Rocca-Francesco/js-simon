
// assegno un intervallo in cui il contatore viene aggiornato
const timer = setInterval(myCountdown, 1000);

function myCountdown() {
    // prendo le date interessate
    let today = new Date();
    let tomorrow = new Date("2023-02-07 9:30");

    // trasformo le date interessate in millisecondi
    today = today.getTime();
    tomorrow = tomorrow.getTime();

    // calcolo i millisecondi di differenza
    const timeLeft = tomorrow - today;

    // trasformo tutto in secondi
    const secondsLeft = Math.floor(timeLeft / 1000);

    // calcolo in tempo reale la differanza
    const sec = secondsLeft % 60;
    const min = Math.floor((secondsLeft / 60) % 60);
    const hours = Math.floor((secondsLeft / 60 / 60) % 24);
    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    console.log(days, hours, min, sec);

    // prendo gli elemnti dove scriverò il mio countdown
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    // in caso di fine del countdown, fermo il refresh
    if (days == 0 && hours == 0 && min == 0 && sec == 0) {
        clearInterval(timer);
    };
};