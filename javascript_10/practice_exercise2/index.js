// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let country = document.getElementById("country");
let countryName = document.getElementById("countryName");
let flag = document.getElementById("flag");
let capital = document.getElementById("capital");
let population = document.getElementById("population");
let region = document.getElementById("region");
let enter = document.getElementById("enter");
// let countryValue = "Nigeria";
async function getCountryInfo(){
    let countryVal = country.value.trim();
    console.log(countryVal);
    try{
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryVal}`)
    if (!response.ok){
        throw new Error("Error while fetching data from API restcountries");
    }
    
    let data = await response.json();
    let flag_data = data[0].flags.png;
    let city_capital = data[0].capital[0];
    let city_pop = data[0].population;
    let city_region = data[0].region.toLocaleString('en-NG');
    let countryNameActual = data[0].name.common;
    // console.log(flag_data);
// flag.src.textContent = flag_data;
flag.innerHTML = `<img src = "${flag_data}" alt = "flag">`;
countryName.innerHTML = `<p><strong>Country name:</strong> ${countryNameActual}</p>`;
capital.innerHTML = `<p><strong>Capital:</strong> ${city_capital}</p>`;
population.innerHTML = `<p><strong>Population:</strong> ${city_pop}</p>`;
region.innerHTML = `<p >Region: ${city_region}</p>`;
    } catch(error){
        console.log("Error occurred:", error);
    }


}

enter.addEventListener("click", getCountryInfo);
// getCountryInfo();