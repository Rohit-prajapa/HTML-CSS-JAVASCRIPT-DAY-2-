let webSite=document.querySelector('body')
console.log(webSite)

let btn=document.querySelector('button')
console.log(btn)

btn.addEventListener('click',()=>{
    webSite.classList.toggle('night')
    if(btn.textContent==='🌚'){
        btn.textContent='🌞'
    }else{
        btn.textContent='🌚'
    }
})

age=45

while(age<52){
    age+=3
}

console.log(age)