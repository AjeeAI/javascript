let images = [
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
    "images/image5.jpeg"
]

let img_container = document.getElementById("img-holder");
let back_image = document.getElementById("back-image");
let counter = 0;
// function changeImage(){
//     img_container.src = images[counter];
//     counter++;
//     if (counter > images.length -1){
//         counter = 0;
//     }
// }

function changeImage(){
    back_image.style.backgroundImage = `url(${images[counter]})`;
    counter++;
    if (counter > images.length -1){
        counter = 0;
    }
}

let slide = setInterval(changeImage, 3000);

let stop = document.getElementById("stop");
let restart = document.getElementById("restart");

stop.addEventListener("click", function(){
    clearInterval(slide);
    alert("stop button clicked");
})
restart.addEventListener("click", function(){
    alert("RESTART button clicked")
    slide = setInterval(changeImage, 3000);
})