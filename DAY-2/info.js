

let mydata=document.querySelector('form')
console.log(mydata)

mydata.addEventListener('submit',(e)=>{
    e.preventDefault()
    let uName=document.querySelectorAll('input')[0].value
console.log(uName)

let pass=document.querySelectorAll('input')[1].value
console.log(pass)
if(pass.length<6){
    alert("Too Small Password")
    return
}
else if(pass.length>15){
    alert("Too large password")
    return
}
else{
    sessionStorage.setItem('isLoggedIn','true')
window.location.href="welcome.html"
}
})

