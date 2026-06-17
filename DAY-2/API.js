console.log(Promise)

let p=new Promise((resolve,reject)=>{
    resolve("job Done")
})

p.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})

let mycal=new Promise((resolve,reject)=>{
    let num=5+3
    if(num==9){
        resolve("Success: ")
    }else{
        reject("fail")
    }
})

mycal
.then((message)=>{
    console.log("Good News "+message)
})
.catch((error)=>{
    console.log("Oops see You "+error)
})