let score1_tag = document.getElementById("score1");
let score2_tag = document.getElementById("score2");
let score3_tag = document.getElementById("score3");
let name_tag = document.getElementById("name");
let age_tag = document.getElementById("age");
let class_tag = document.getElementById("class");
let image_tag = document.getElementById("image_url");

let button = document.getElementById("btn");
let table_body = document.getElementById("table-body");
function getAverage(){
    // event.preventDefault();
   let score1 = parseFloat(score1_tag.value.trim());
    let score2 = parseFloat(score2_tag.value.trim());
    let score3 = parseFloat(score3_tag.value.trim());
    let total = score1 + score2 + score3;
    localStorage.setItem("total", total);
    let average = (score1 + score2 + score3) / 3;
    return average;

}


// let studentData = [];
let studentData = JSON.parse(localStorage.getItem("studentData")) || [];
let id = 0;
function addStudent(event){
  event.preventDefault();
  let avg = getAverage();
  id++;
  let name = name_tag.value.trim();
  let age = age_tag.value.trim();
  let classData = class_tag.value.trim();
  let image = image_tag.value.trim();
  let studentDetails = {
    id: `${id}`,
    studentName: `${name}`,
    studentAge: `${age}`,
    studentClass: `${classData}`,
    studentImage: `${image}`,
    studentAverage: `${avg}`
  }

  studentData.push(studentDetails);
  localStorage.setItem("studentData", JSON.stringify(studentData));
  console.log(studentData);
  // loadStudents();
}

function loadStudents(){
  let studentDeets = localStorage.getItem("studentData");
  if (!studentDeets) return;
  let studentData = JSON.parse(studentDeets);
  for (data of studentData){
    let table_row = document.createElement("tr");
    let name_td = document.createElement("td");
    let class_td = document.createElement("td");
    let age_td = document.createElement("td");
    let image_td = document.createElement("td");
    let avg_td = document.createElement("td");
    let performance_td = document.createElement("td");
    let button = document.createElement("td");
    name_td.textContent = data.studentName;
    class_td.textContent = data.studentClass;
    age_td.textContent = data.studentAge;
    // image_td.textContent = data.studentImage;
    image_td.innerHTML = `<img src = "${data.studentImage}" alt = "Student Image">`;
    avg_td.textContent = data.studentAverage;

    table_row.appendChild(image_td);
    table_row.appendChild(name_td);
    table_row.appendChild(class_td);
    table_row.appendChild(avg_td);


    let avg = data.studentAverage;
    let condition;
        if (avg >= 75){
          condition = "Excellent";
          performance_td.style.color = "green";
        } else if (avg >= 50 && avg < 75){
          condition = "Good";
          performance_td.style.color = "yellow";
        } else {
          condition = "Needs help";
          performance_td.style.color = "red";
        }
        performance_td.textContent = condition;
  
        table_row.appendChild(performance_td);
        
        button.innerHTML = `<button onclick="deleteStudent()"> Delete </button>`;
        table_row.appendChild(button);

        table_body.appendChild(table_row);


  }


}

// function deleteRow(){
//   alert("Delete button clicked!")
//   let studentDeets = localStorage.getItem("studentData");
//   let studentData = JSON.parse(studentDeets);
//   let updated = studentData.filter((student)=> student.id !== id);
//   console.log(updated);
//   localStorage.setItem("studentData", JSON.stringify(updated));
//   loadStudents();
// }

function deleteStudent(index) {
  let studentDeets = localStorage.getItem("studentData");
  let studentData = JSON.parse(studentDeets) || [];

  studentData.splice(index, 1); // remove one student at that index
  localStorage.setItem("studentData", JSON.stringify(studentData));

  // loadStudents(); // refresh the table
}

loadStudents();

button.addEventListener("click", addStudent);


  // function addStudent(event){
  //     event.preventDefault();
  //     avg = getAverage();
  //     console.log(avg);
  //     let name = name_tag.value.trim();
  //     let age = age_tag.value.trim();
  //     let classCon = class_tag.value.trim();
  //     let image = image_tag.value.trim();
  //     table_row = document.createElement("tr");
  //     let name_td = document.createElement("td");
  //     name_td.textContent = name;
  
  //     let age_td = document.createElement("td");
  //     age_td.textContent = age;
  
  //     let class_td = document.createElement("td");
  //     class_td.textContent = classCon;
  
  //     let image_td = document.createElement("td");
  //     image_td.textContent = image;
  //     let avg_td = document.createElement("td");
  //     avg_td.textContent = avg;
  //     let performance_td = document.createElement("td");
  //      table_row.appendChild(image_td);
  //     table_row.appendChild(name_td);
  //      table_row.appendChild(class_td);
  //       table_row.appendChild(avg_td);
  //     let condition;
  //       if (avg > 75){
  //         condition = "Excellent";
  //         performance_td.style.color = "green";
  //       } else if (avg >= 50 && avg < 75){
  //         condition = "Good";
  //         performance_td.style.color = "yellow";
  //       } else {
  //         condition = "Needs help";
  //         performance_td.style.color = "red";
  //       }
  //       performance_td.textContent = condition;
  
  //       table_row.appendChild(performance_td);
  //       let button = document.createElement("td");
  //       button.innerHTML = `<button"> Delete </button>`;
  //       table_row.appendChild(button);
  //     table_body.appendChild(table_row);
  
  
  // }