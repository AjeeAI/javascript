let type = document.getElementById("type");

let sentence = "Welcome to JavaScript Timers!";

// function typing(){
//     for (let word of sentence){
//         // console.log(word);
//         setTimeout(type.textContent = word);
//     }
// }
index = 0;
function typing(){
    if (index < sentence.length){
        type.textContent += sentence[index];
        index++;
        setTimeout(typing, 100);
        // if (index >= sentence.length){
        //     // index = 0;
        //     // type.textContent =  ""
        // }
    } else {
        showHide();
    }
    

}

function showHide(){
               
                setInterval(() => {
                     type.style.display = "none";
                     setTimeout(()=> type.style.display = "flex", 1000)
                }, 2000);

            }
let timer = setTimeout(typing, 1000);