function tellJoke(){
    return new Promise(function(resolve){
        setTimeout(()=> {
            resolve("😂 Here’s a funny joke!")
        }, 1000)
    })
    
}

tellJoke()
.then(function(joke){
    console.log(joke);
})