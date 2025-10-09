// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// async function getQuote(){
//     try {
//         let response = await fetch('https://api.quotable.io/random');

//         let data = await response.json();

//         console.log("Quote:", data.content);
//         console.log("Author:", data.author);
//     } catch(error) {
//         console.log("Error:", error)
//     }
// }

// getQuote();

// async function getDataSafely(){
//     try {
//         let response = await fetch("https://api.quotable.io/random");
//         if (!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         let data = await response.json();
//         console.log("Success:", data);
//     } catch (error){
//         console.log("Something went wrong:", error.message);
//     }
// }

// getDataSafely();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getRandomQuote(){
    document.getElementById("quoteDisplay").innerHTML = '<span class= "loading"> Loading quote ... </span>';
    document.getElementById("authorDisplay").textContent = "";

    try {
        let response = await fetch("https://api.quotable.io/random");

        if (!response.ok){
            throw new Error("Failed to fetch quote");
        }

        let data = await response.json();

        document.getElementById("quoteDisplay").textContent = '"' + data.content + '"';
        document.getElementById("authorDisplay").textContent = "- " + data.author;

        console.log("Quote:", data.content);
        console.log("Author:", data.author);
    } catch (error){
        document.getElementById("quoteDisplay").innerHTML = '<span class = "error"> Error loading quote. Please try again. </span>';
        console.log("Error:", error);
    }
}

getRandomQuote();