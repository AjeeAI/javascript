


let saveTimer;

let save_button = document.getElementById("delete");
let getContent = document.getElementById("input-field");
function save(){
    saveTimer = setInterval(()=> {

        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        // let time;
        if (hours < 10) "0" + hours;
        if (minutes < 10) "0" + minutes;
        if (seconds < 10) "0" + seconds;
        let time = `${hours}hrs:${minutes}min:${seconds}secs`;
        
        let content = getContent.value.trim();
        let data = {
            text: content,
            timestamp: time
        }
        
        if (content !== ""){
        localStorage.setItem("savedContent", JSON.stringify(data));
        // alert("Content saved after 5 seconds");
    } else {
        // alert("Nothing was typed!")
    }}, 5000);
    
}

function load(){
        clearInterval
        let loaded = localStorage.getItem("savedContent");
        let data = JSON.parse(loaded)
        let text = data.text;
        getContent.textContent = text;
     
}

// function clear(){
//     localStorage.clear("savedContent");
// }
// save_button.addEventListener("click", clear());
// save();
setTimeout(save, 5000);
setTimeout(load, 6000);

// window.addEventListener("load", load());