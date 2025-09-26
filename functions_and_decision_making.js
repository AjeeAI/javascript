const calculateTax = function(amount, rate){
    return amount * rate;
}

console.log("Tax on $100 at 8.5%:", calculateTax(100, 0.085));

const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

const convertToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;


console.log("25C in fahrenheit:", convertToFahrenheit(25));
console.log("77F in Celsius:", convertToCelsius(77).toFixed(1));
console.log("")

function calculateBMI(weight, height){
    return weight / (height * height);
}

function getBMICategory(bmi){
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "overweight";
    return "Obese";

}

function healthCheck(weight, height){
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    return {
        bmi: bmi.toFixed(1),
        category: category,
        message: `Your BMI is ${bmi.toFixed(1)} (${category})`
    };
}

const result = healthCheck(70, 1.75);
console.log("Health Check Result:");
console.log(result.message);

console.log("");

function getDiscountMessage(totalAmount, membershipType){
    if (totalAmount < 50){
        return "Minimum order is $50 for discounts.";
    }
    if (membershipType === "gold"){
        return `Gold member discount: ${totalAmount * 0.15}`;
    }
    if (membershipType === "silver"){
        return `Silver member discount: ${totalAmount * 0.10}`;
    }
    return "Regular customer - no discount available.";
}

console.log("Discount examples:");
console.log(getDiscountMessage(30, "gold"));
console.log(getDiscountMessage(100, "gold"));
console.log(getDiscountMessage(100, "silver"));
console.log(getDiscountMessage(100, "regular"));

// Validation function

function isValidEmail(email){
    return email.includes("@") && email.includes(".");
}

// Formatter function

function formatCurrency(amount){
    return `$${amount.toFixed(2)}`;
}

// Decision maker function

function shouldBuyItem(price, budget, necessity){
    if (necessity === "essential"){
        return price <= budget;
    }
    else if (necessity === "important"){
        return price <= budget * 0.7;
    } else {
        return price <= budget * 0.3;
    }
}

function analyseGrades(grades){
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    const highest =  Math.max(...grades);
    const lowest = Math.min(...grades);

    return {
        average: average.toFixed(1),
        highest: highest,
        lowest: lowest,
        letterGrade: average >= 90 ? "A" : average >= 80 ? "B": average >= 70 ? "C": "F"
    };
}

console.log("Function Pattern Examples:");
console.log("")

console.log("Email validation:");
console.log(isValidEmail("user@example.com"));
console.log(isValidEmail("invalid-email"));

console.log("");


console.log("Currency formatting:");
console.log(formatCurrency(1234.5));

console.log("");

console.log("Purchase decision:");
console.log("$100 item, $500 budget, essential:",
shouldBuyItem(100, 500, "essential") );
console.log("$100 item, $500 budget, luxury:", shouldBuyItem(100, 500, "luxury"));

console.log("");

console.log("Grade analysis:");

const studentGrades = [88, 92, 76, 94, 89];
const analysis = analyseGrades(studentGrades);
console.log(`Average: ${analysis.average}% (${analysis.letterGrade})`);

console.log(`Range: ${analysis.lowest} - ${analysis.highest}`);

