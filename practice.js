function sayHello(){
    console.log("Hello from my first function!");
}

sayHello();
console.log("")

function showCurrentTime(){
    let now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}

showCurrentTime();

function greetPerson(name){
    console.log(`Hello, ${name}! Welcome to Javascript!`)
}

greetPerson("Alice")
greetPerson("Bob")
greetPerson("Charlie")

console.log("");

function introduce(firstName, lastName, age){
    console.log(`Hi! I'm ${firstName} ${lastName} and I'm ${age} years old.`)

}

introduce("Jane", "Smith", 25);
introduce("John", "Doe", 30);
introduce("Sarah", "Johnson", 22);

console.log("");

function greetWithDefault(name = "Friend"){
    console.log(`Hello, ${name}`);
}

greetWithDefault("Maria");
greetWithDefault();


function addNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

let sum = addNumbers(5, 3);
console.log("Sum:", sum);

console.log("10 + 7 =", addNumbers(10, 7));

console.log("");

function createFullName(first, last){
    return `${first} ${last}`.trim();
}

let fullName = createFullName("John", "Doe")
console.log("Full name:", fullName);
console.log("");


function isAdult(age){
    return age >= 18;
}

console.log("Is 16 adult?", isAdult(16));
console.log("Is 21 adult?", isAdult(21));

let userAge = 20;
if (isAdult(userAge)){
    console.log("User can vote!");
} else{
    console.log("User cannot vote yet.")
}


function multiply(a, b){
    return a * b;
}

function divide(a ,b){
    if (b === 0){
        return "Cannot divide by Zero!";
    }
    return a / b;
}
 
function calculateArea(length, width){
    return length * width;
}

console.log("Multiply 6 x 4 =", multiply(6, 4));
console.log("Divide 15 by 3 =", divide(15, 3));
console.log("Divide 15 by 0 = ", divide(15, 0));
console.log("Area of 5 x 3 room =", calculateArea(5, 3), "square units");

let age = 25;
let temperature = 75;
let isRaining = false;

if (age >= 18){
    console.log("You are an adult!");
} 

if (temperature > 80){
    console.log("It's hot today!");
} else {
    console.log("The weather is nice!")
}

if (isRaining){
    console.log("Don't forget your umbrella!");
} else{
    console.log("No umbrella needed today!")
}

console.log("")


let score = 85;
let passingGrade = 70;

if (score >= passingGrade){
    console.log(`Congratulations! You passed with ${score}%`);

} else{
    console.log(`Sorry, you scored ${score}%. You need ${passingGrade}% to pass.`)
}



