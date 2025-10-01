let grades = [52, 89, 77, 80, 45, 90, 89, 92];

function getAverage(grades){
    total = 0;
    for (let grade of grades){
        total += grade;
    }

    console.log("The total is:", total);
}

getAverage(grades);

// function getHighest(grades){
//  let highest = Math.max(...grades);
//  console.log(highest);
//  return `The highest grade is: ${highest}`;
// }

// getHighest(grades)

function getHighest(grades){
    return Math.max(...grades)
}

console.log(getHighest(grades));

function getLowest(grades){
    return Math.min(...grades);
}

console.log(getLowest(grades))

function getPassRate(grades){
    passList = [];
    for (let grade of grades){
        if (grade >= 50){
            passList.push(grade);
        }

    }
    let percentage = (passList.length / grades.length) *100;
    return `Percentage of student who passed is ${percentage}%`;
}

console.log(getPassRate(grades));