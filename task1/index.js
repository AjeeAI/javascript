function displayInfo(){
    let firstName = "Ajijolaoluwa"
    let lastName = "Adesoji"
    var age = 23
    var isStudent = true
    const favColor = "Blue"
    age_in_5 = age + 5;
    // alert("Button clicked")

   let output = `

   <div class = "output">
   <p> 
        My first name is: ${firstName}.
   </p>

    <p> 
        My last name is: ${lastName}.
   </p>

    <p> 
        I am ${age}.
   </p>

   <p> 
        Am I a student? well that's ${isStudent}.
   </p>
     <p> 
   I will ${age_in_5} in 5 years.
   </p>
   <p> 
        Fun fact about me: My favorite color is ${favColor}.
   </p>
   </div>
    ` ;

    document.getElementById("text").innerHTML = output;
    console.log(firstName, lastName)
}

// const btn1 = getElementById("btn")

// btn1.onclick = () => {
//     displayInfo()
// }
