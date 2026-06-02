// const circle = document.getElementById("box");

// circle.addEventListener("click", function(){
//     circle.style.backgroundColor = "blue";
// });

let thecircle=document.getElementById('box')
console.log(thecircle)

thecircle.style.background='blue'

function mycolor(){
    if(thecircle.style.background=='red'){
        thecircle.style.background='blue'
    }
    else if(thecircle.style.background=='blue'){
        thecircle.style.background='yellow'
    }
    else if(thecircle.style.background=='black'){
        thecircle.style.background='green'
    }
    else{
        thecircle.style.background='black'
    }
    console.log("hello")
}

const circle = document.getElementById("circle");

circle.addEventListener("click", function(){
    circle.style.backgroundColor = "blue";
});



