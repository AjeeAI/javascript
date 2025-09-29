
let names = [];
let grades = [];
let addStudent = (name, grade) => {
    names.push(name);
grades.push(grade);
   
}

addStudent("Ajee", 90);
addStudent("Seyi", 80);
addStudent("Shola", 85);

console.log(names, grades)

 let average = (grades) => {
    let total = 0;
    for (let grade of grades){
        total += grade;
    }
    averageGrade = total / grades.length;
    return averageGrade;
 }

 console.log(average(grades))
 

 
 let highestScore = (grades) =>{
     let hScore = Math.max(...grades);
     let hscoreIndex = grades.indexOf(hScore);
     let swhs = names[hscoreIndex];
     return swhs;
    }
    // console.log(highestScore(grades));
    let studentWithHighestScore = highestScore(grades);
console.log(studentWithHighestScore);


 let lowestScore = (grades) =>{
    let lScore = Math.min(...grades);
    let lScoreIndex = grades.indexOf(lScore);
    let swls = names[lScoreIndex];
    return swls;
 }
// console.log(highestScore(grades));
let studentWithLowestScore = lowestScore(grades);
console.log(studentWithLowestScore);




