
let restRanBtn = document.querySelector("button")


function suggestion(event){
    // console.log("go to sagebrush")

    let ranRest =['sagebrush', 'baldwin cafe', 'sushi thai', 'miyakos', 'mexican forrest']
    let randomVal = ranRest[Math.floor(ranRest.length * Math.random())]

    window.alert(randomVal)
   


}



restRanBtn.addEventListener('click', suggestion)