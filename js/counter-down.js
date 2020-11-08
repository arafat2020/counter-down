const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.menute');
const second = document.querySelector('.second')

const input = document.querySelector('.container');
const data = input.dataset.initial;
const spliter = data.split('/');
let getDay = spliter[0];
let getMounth = spliter[1];
let getYear = spliter[2]
const int = document.querySelector('.int');
const btn = document.querySelector('.btn');
const alart = document.querySelector('.alart');


function counterJs(){
    const currentDate = new Date()
    const endDate = new Date(`${getMounth}/${getDay}/${getYear}`)
    const distance = endDate - currentDate
    let daytime = distance/(24*60*60*1000);
    let htime = distance%(24*60*60*1000)/(60*60*1000);
    let mintime = distance%(60*60*1000)/(60*1000);
    let sectime = distance%(60*1000)/1000;
    day.innerHTML = Math.floor(daytime);
    hour.innerHTML = Math.floor(htime);
    minute.innerHTML = Math.floor(mintime);
    second.innerHTML = Math.floor(sectime);
    console.log(daytime,htime,mintime,sectime)
    if(distance < 0){
        clearInterval(stop)
        day.innerHTML = "Expaired!!!";
        hour.innerHTML ="Expaired!!!";
        minute.innerHTML = "Expaired!!!";
        second.innerHTML = "Expaired!!!";
    }
}

 setInterval(()=>{
    counterJs()
},1000)

