let studentDict = [
    {
        name: "Ajee",
        grade: 90
    },
    {
        name: "David",
        grade: 92
    },
    {
        name: "Seyo",
        grade: 70
    },
    {
        name: "Feyi",
        grade: 80
    }
]

let averageGrade = (studentDict) =>{
    total = 0;
   
        for (let i = 0; i < studentDict.length; i++){
            total += studentDict.grade
            
        }
    
let average = total / studentDict.length;
console.log(average);
}

averageGrade(studentDict);