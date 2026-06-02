let photo = document.querySelector('img');
console.log(photo);

let b1= document.querySelectorAll('button')[0];
console.log(b1);

b1.addEventListener('click',()=>{
    photo.src="happyemoji.webp"
})
