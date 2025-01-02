const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newYears = '31 jan 2025';


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate)/1000 //convert days from milliseconds to seeconds after the difference
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const mins = Math.floor(totalseconds/60) % 60;
    const seconds =Math.floor(totalseconds) % 60 ;

    daysE1.innerHTML = (days);
    hoursE1.innerHTML = (hours);
    minsE1.innerHTML = (mins);
    secondsE1.innerHTML = (seconds);
}


//initial call
countdown();

setInterval(countdown, 1000); // to update the countdown time every seconds (1000 millisecons)

/*
Dates in JavaScript are typically represented in milliseconds
By dividing by 1000, we convert the time difference from milliseconds to seconds.

1jr ------> 24 * 3600s
days?? ------> totalseconds

1hr ------> 3600s
hrs?? ------> totalseconds

1 min ------> 60s
mins?? ------> totalseconds
*/
