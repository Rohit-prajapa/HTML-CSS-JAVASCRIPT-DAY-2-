let content=document.querySelector("h1")
console.log(content)

let btn=document.querySelector("button")
console.log(btn)

// btn.addEventListener('click',()=>{
// content.textContent="i want to learn js"
// })

function add(a,b){
    console.log(a+b)
}

add(5,6)

add(3,4)

const add1=(x,y)=>{
    console.log(x+y)
}

add1(5,7)
add1(9,8)

// if else
    age=19
if(age<18){
    console.log("cannot vote")
}
else{
    console.log("please vote")
}

x=5
if(x%2==0){
    console.log("even number")
}
else{
    console.log("odd numbre")
}

for(let i=1; i<=5; i++){
    console.log(i);
}

function geet(name){
    return 'hello' +name
}

console.log(geet("rohit"))

btn.addEventListener('click',()=>{
    if(content.textContent =='i am learning Javascript'){
        content.textContent ='I want to learn React'
    }
    else{
        content.textContent='i am learning Javascript'
    }
})

