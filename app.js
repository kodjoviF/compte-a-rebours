const secondes = document.querySelector('.secondes .number')
const minutes = document.querySelector('.minutes .number')
const heures = document.querySelector('.heures .number')
const jours = document.querySelector('.jours .number')

let secval=60
let minval=30
let hourval=2
let dayval=1

const timefunction = setInterval(()=>{
secval--;
if(secval===0){
minval--;
secval=60;
}
if(minval===0){
hourval--;
minval=60;
}
if(hourval===0){
    dayval--;
    dayval=0;
}
if(dayval===0){
    dayval=0
}
if(dayval===0 && hourval===0 && minval===0 && secval===0  ){
    clearInterval(timefunction)
}
secondes.textContent = secval<10 ? `0 ${secval}` : secval;
minutes.textContent = minval<10 ? `0 ${minval}` : minval;
heures.textContent = hourval<10 ? `0 ${hourval}` : hourval;
jours.textContent = dayval<10 ? `0 ${dayval}` : dayval;

},1000)
