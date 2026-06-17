let headline=document.getElementById('s')
console.log(headline)

let news=document.querySelector('input')
console.log(news)

news.addEventListener('change',()=>{
   headline.textContent=news.value
})