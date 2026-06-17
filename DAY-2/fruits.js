let fruits = ["🍎", "🥭", "🍎", "🍇", "🥭","🍇","🍎"];

for(i=0; i<fruits.length; i++){
    console.log(fruits[i]+" "+i)
    if(fruits[i]=="🍎"){
        document.getElementById('a').textContent+="🍎"
    }
    else if(fruits[i]=="🥭"){
        document.getElementById('b').textContent+="🥭"
    }
    else{
        document.getElementById('c').textContent+="🍇"
    }
}

