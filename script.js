// faccio 4 variabili e le collego ai rispettivi span
const days = document.querySelector('span#days');
const hours = document.querySelector('span#hours');
const minutes = document.querySelector('span#minutes');
const seconds = document.querySelector('span#seconds');

// data dove far finire il countdown
const countdownEnd = new Date(2024, 0, 1, 0, 0, 0, 0);

const timer = setInterval(function(){
    // orario attuale
    const nowTime = new Date();
    const dateBetween = countdownEnd.getTime() - nowTime.getTime();

    seconds.innerHTML = Math.floor(dateBetween % (60 * 1000) / 1000);
    minutes.innerHTML = Math.floor((dateBetween % (60 * 60 * 1000)) / (1000 * 60));
    hours.innerHTML = Math.floor((dateBetween % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    days.innerHTML = Math.floor((dateBetween / (60 * 60 * 24 * 1000)));

    if ( dateBetween <= 0){
        clearInterval(timer);
        document.querySelector('main .bg-countdown .row #timer-countdown h2').innerHTML = 'BYE 2023, WELCOME 2024!';
    }
}, 1000)