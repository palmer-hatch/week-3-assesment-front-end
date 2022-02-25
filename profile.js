console.log("hello world")

const faveColo = document.querySelector('#color');
const favePlace = document.querySelector('#place');
const faveRitual = document.querySelector('#ritual');


function alertColor(){
    window.alert("Purple")
}

function alertPlace(){
    window.alert("SnowBird Ski Resort")
}

function alertRitual(){
    window.alert("Stretching before I go to bed")
}


faveColo.addEventListener('click', alertColor)
favePlace.addEventListener('click', alertPlace)
faveRitual.addEventListener('click', alertRitual)
// console.log("hello")