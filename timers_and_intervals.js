// // console.log("Start");

// // setTimeout(function(){
// //     console.log("This appears after 2 seconds");
// // }, 2000);

// // console.log("End");

// setTimeout(function(){
//     console.log("Hello after 1 second");
// }, 1000)

// setTimeout(()=> {
//     console.log("Hello after 3 seconds");
// }, 3000);


// function showMessage(){
//     console.log("This is a delayed message");
// }

// setTimeout(showMessage, 2000);

// setTimeout(() => console.log("1 Second"), 1000);
// setTimeout(()=> console.log("2 seconds"), 2000);
// setTimeout(()=> console.log("3 Seconds"), 3000);

// let timerId = setTimeout(()=> {
//     console.log("This will not run");
// }, 5000);

// clearTimeout(timerId);
// console.log("Timer was cancelled");

// let notificationTimer;

// function showNotification(message){
//     console.log("Notification:", message);
//     notificationTimer = setTimeout(() => {
//         console.log("Notification hidden");
//     }, 3000);
// }

// function hideNotificationNow(){
//     clearTimeout(notificationTimer);
//     console.log("Notification hidden immediately");

// }

// showNotification("Welcome!");

// let counter = 0;

// let interValid = setInterval(function(){
//     counter++;
//     console.log("Counter:", counter);

//     if (counter >= 5){
//         clearInterval(interValid);
//         console.log("Stopped!");
//     }
// }, 1000);


// function startCountdown(seconds){
//     let timeLeft = seconds;
//     console.log("Countdown started:", timeLeft);

//     let countdownId = setInterval(function(){
//         timeLeft--;
//         console.log("Time left:", timeLeft);
//         if (timeLeft <= 0){
//             clearInterval(countdownId);
//             console.log("Time's up!");
//         }
//     }, 1000);
// }

// startCountdown(10);


