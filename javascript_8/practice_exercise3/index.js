
let saveTimer;
let lastSavedContent = "";
let getContent = document.getElementById("input-field");
let message = document.getElementById("message");
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
         let loaded = localStorage.getItem("savedContent");
        let restored = loaded? JSON.parse(loaded): {text:""};
        let text = restored.text;
        lastSavedContent = text;
        let data = {
            text: content,
            timestamp: time
        }
        console.log(data);
        console.log("new content: ",content);
        console.log("Last saved content: ",lastSavedContent);

        if (content !== "" && content !== lastSavedContent){
        localStorage.setItem("savedContent", JSON.stringify(data));
        // alert("Content saved after 5 seconds");
    } else {
        message.textContent = "Nothing was typed or no change was made.";
    message.style.color = "red";
        setTimeout(()=> {
            message.textContent = "";
        }, 3000)
        // alert("Nothing was typed!")
    }}, 5000);
    
}

function load(){
       
        let loaded = localStorage.getItem("savedContent");
        let data = JSON.parse(loaded)
        let text = data.text;
        getContent.value = text;
     
}


let loaded = localStorage.getItem("savedContent");
let data = JSON.parse(loaded)
let text = data.text;

// setTimeout(save, 5000);
save();
load();
// setTimeout(load, 6000);

// window.addEventListener("load", load());