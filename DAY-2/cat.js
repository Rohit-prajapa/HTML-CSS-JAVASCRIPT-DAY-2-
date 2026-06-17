function catty(){
        fetch("https://api.thecatapi.com/v1/images/search")
    .then(res=>res.json())
    .then(abc=>{
        document.querySelector('img').src=abc[0].url
        console.log(abc)
    })
    }