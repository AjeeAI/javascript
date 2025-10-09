let setups = document.getElementById("setup");
let punchlines = document.getElementById("punchline");
let button = document.getElementById("joke-button");

async function tellJoke(){
    try {
        let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok){
        setups.textContent = "Error fetching joke from API";
        setups.style.color = "red";
        throw new Error("Failed to fetch joke!");
    }
    data = await response.json();
    setups.textContent = data.setup;
    punchlines.textContent = "";
    setTimeout(()=> {
        punchlines.textContent = data.punchline;
    }, 2000)
    } catch (error){
        console.log("The error was: ", error);
    }
}

tellJoke();

button.addEventListener("click", tellJoke);