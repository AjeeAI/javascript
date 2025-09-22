
function add(){
    let var1 = Number(prompt("Input the first number: "))
    let var2 = Number(prompt("Input the second number: "))
    let total = var1 + var2;
    document.getElementById("total").innerHTML = total
    document.getElementById("total").style.display = "flex"
    document.getElementById("first").innerHTML = var1;
    document.getElementById("second").innerHTML = var2;
    document.getElementById("op").innerHTML = "+";
    console.log(`The addition of ${var1} and ${var2} is ${total}`)
    // alert("Add button pressed")
}

function minus(){
    let var1 = Number(prompt("Input the first number: "))
    let var2 = Number(prompt("Input the second number: "))
    let total = var1 - var2;
    document.getElementById("total").innerHTML = total
    document.getElementById("total").style.display = "flex"
    document.getElementById("first").innerHTML = var1;
    document.getElementById("second").innerHTML = var2;
    document.getElementById("op").innerHTML = "-";
    console.log(`The subtraction of ${var2} from ${var1} is ${total}`)
    // alert("Subtract button pressed")
}

function mult(){
    let var1 = Number(prompt("Input the first number: "))
    let var2 = Number(prompt("Input the second number: "))
    let total = var1 * var2;
    document.getElementById("total").innerHTML = total
    document.getElementById("total").style.display = "flex"
    document.getElementById("first").innerHTML = var1;
    document.getElementById("second").innerHTML = var2;
    document.getElementById("op").innerHTML = "x";
    console.log(`The multiplication of ${var1} and ${var2} is ${total}`)
    // alert("Multiplication button pressed")
}

function divide(){
    let var1 = Number(prompt("Input the first number: "))
    let var2 = Number(prompt("Input the second number: "))
    let total = var1 / var2;
    document.getElementById("total").innerHTML = total
    document.getElementById("total").style.display = "flex"
    document.getElementById("first").innerHTML = var1;
    document.getElementById("second").innerHTML = var2;
    document.getElementById("op").innerHTML = "/";
    console.log(`Dividing ${var1} by ${var2} gives us ${total}`)
    // alert("Division button pressed")
}


function mod(){
    let var1 = Number(prompt("Input the first number: "))
    let var2 = Number(prompt("Input the second number: "))
    let total = var1 % var2;
    document.getElementById("total").innerHTML = total
    document.getElementById("total").style.display = "flex"
    document.getElementById("first").innerHTML = var1;
    document.getElementById("second").innerHTML = var2;
    document.getElementById("op").innerHTML = "%";
    console.log(`${var1} modulo ${var2} gives us ${total}`)
    // alert("Division button pressed")
}

