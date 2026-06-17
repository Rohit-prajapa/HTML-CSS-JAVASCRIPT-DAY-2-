let light = document.querySelectorAll('.light');
console.log(light);

let currentLight = 0;


light[currentLight].classList.add('activate');

setInterval(() => {
    changeLight();
}, 500);

const changeLight = () => {

    
    light[currentLight].classList.remove('activate');

    
    currentLight++;

    
    if(currentLight >= light.length){
        currentLight = 0;
    }

    
    light[currentLight].classList.add('activate');
};