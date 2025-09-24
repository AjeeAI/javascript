//  Simple grading system

function getGrade(score){
    if (score === 100){
        console.log(`Outstanding! Grade: A+`);
    }
    else if (score >= 90){
       console.log(`Score: ${score} -> Grade: A`);
    } else if(score >= 80 && score <= 89){
        console.log(`Score: ${score} -> Grade: B`);
    } else if(score >=70 && score <= 79){
        console.log(`Score: ${score} -> Grade: C`);
    } else if(score >= 60 && score <= 69){
        console.log(`Score: ${score} -> Grade: D`);

    } else{
        console.log(`Score: ${score} -> Grade: F`);
    }

    // alert("Button clicked")

}

getGrade(89);
console.log("")




// Discount calculator


// function calculatePrice(price, customerType, isFirstPurchase){
//     let student = 0.1;
//     let senior = 0.15;
//     let employee = 0.2;
    
    
//     if (customerType === "student" && isFirstPurchase){
//         discount = student + 0.05;

//     } else{
//         discount = student;
//     }

//     if (customerType === "senior" && isFirstPurchase){
//         discount = senior + 0.05;
//     } else {
//         discount = senior;
//     }

//     if (customerType === "employee" && isFirstPurchase){
//         discount = employee + 0.05;
//     } else {
//         discount = employee;
//     }

//     let final_price = price - (price * discount);
//     console.log(`The final price for ${customerType} is ${final_price} after ${discount}% discount `) 
// }

// calculatePrice(1000, "senior", true)




function calculatePrice(price, customerType, isFirstPurchase) {
    let discount = 0;
    
    if (customerType === "student") {
        discount = 0.10; 
    } else if (customerType === "senior") {
        discount = 0.15; 
    } else if (customerType === "employee") {
        discount = 0.20; 
    }
    
    
    if (isFirstPurchase) {
        discount += 0.05; 
    }
    
    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}

let result = calculatePrice(100, "student", true)
console.log("Discount calculation")
console.log(`startPrice: ${result.originalPrice}`)
console.log(`Discount: ${result.discountPercent}%`)
console.log(`Discounted Price: ${result.finalPrice}`)

console.log("")
// Weather ADVISOR

function weatherAdvice(temperature, isRaining){
    if (temperature< 32 && isRaining){
        console.log("Freezing rain! Stay inside!")
    }
    else if(temperature < 32){
        console.log("Very cold, wear a heavy coat.")
    } else if(temperature >= 32 && temperature <= 60){
        console.log("Chilly, bring a jacket.")
    } else if(temperature >= 60 && temperature <= 80){
        console.log("Nice weather!")
    } else{
        console.log("It's hot, stay hydrated!")
    }

    advice = isRaining ? "Bring an Umbrella" : "No umbrella needed"
    console.log(advice);
}

weatherAdvice(35, true)
console.log("")

// ATM Simulation

function atm(balance, action, amount){
    if (action  === "withdraw"){
        if (amount > 500){
            console.log("Withdrawals of amounts over 500 are not allowed!!!")
        }
        else if (balance >= amount){
            balance = balance - amount;
            message = `Withdrawal successful. Your balance is now: ${balance}`
            console.log(message)
            
            
        } else{
            message = `Insufficient funds!!!`
            console.log(message)
            
        }
}
    else if (action  === "deposit"){
        if (amount > 0){
            balance = balance + amount;
        message = `Deposit successful. Your balance is now: ${balance}`
            console.log(message)

        } else{
            message = `Enter a valid amount!!!`
            console.log(message)
            
        }

    }
}

atm(1000, "withdraw", 600)


// Personal Assistant

function personalAssistant(time, weather, day_type){
    if (time >= 5 && time <= 11){
        if(day_type == "workday"){
            console.log("Good morning! Get a healthy breakfast and prepare for work early to beat traffic.")
        }
        else if(day_type ==="weekend"){
            console.log("Morning vibes! Perfect time for a light workout, reading, or a calm coffee.")
        }
        else{
            console.log("Good morning! Take it slow, maybe plan a fun outing or family activity.")
        }
    }

    else if (time >= 12 && time <= 16){
        if(day_type == "workday"){
            console.log("Stay focused on work but remember to take a short lunch break and stretch.")
        }
        else if(day_type ==="weekend"){
            console.log("Perfect time for errands, hanging out with friends, or pursuing a hobby.")
        }
        else{
            console.log("Enjoy some rest or plan something creative. Don't waste the day!")
        }
    }

    else if (time >= 17 && time <= 20){
        if(day_type == "workday"){
            console.log("You're done with work! Relax, have dinner, or hit the gym.")
        }
        else if(day_type ==="weekend"){
            console.log("Evening chill time — maybe a movie night or a casual hangout.")
        }
        else{
            console.log("Make the most of your evening — outdoor events or a nice dinner would be great.")
        }
    }

    else{
        if(day_type == "workday"){
            console.log("Time to wind down. Avoid screens and prepare for tomorrow.")
        }
        else if(day_type ==="weekend"){
            console.log("Perfect for stargazing, gaming, or a late-night snack.")
        }
        else{
            console.log("You can stay up a bit later, but don't ruin your sleep cycle.")
        }
    }
    

    let advice = weather === "sunny" ? "It's sunny outside — a great time for a walk, outdoor photos, or running errands." :  
    weather === "rainy"? "Take an umbrella! Great weather for staying in, watching a movie, or reading a book.": "Cloudy skies — good for being productive indoors or going out without worrying about heat.";
    console.log(advice)
    // if (weather === "sunny"){
    //     console.log("It's sunny outside — a great time for a walk, outdoor photos, or running errands.")
    // } else if(weather === "rainy"){
    //     console.log("Take an umbrella! Great weather for staying in, watching a movie, or reading a book.")
    // } else {
    //     console.log("Cloudy skies — good for being productive indoors or going out without worrying about heat.")
    // }
}

personalAssistant(6, "rainy", "weekend")