let movies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Titanic", "Avatar", "Inception", "Avengers: Endgame", "Jurassic Park", "The Lion King", "Forrest Gump"];
let ratings = [9.3, 9.2, 9.0, 7.8, 8.8, 8.4, 8.1, 8.5, 8.8, 8.6];

function addMovie(movie, rating){
    // let movie = prompt("Enter the name of a movie: ")
    // let rating = prompt("Enter the rating of the said movie: ")
    movies.push(movie);
    ratings.push(rating);
}

addMovie("Cinderella", 9.2)

console.log(movies)
console.log(ratings)

function getAverageRating(){
    let sum = 0;
    for (let rating of ratings){
        sum += rating;
    }
    let averageRating = sum / ratings.length;
    console.log("The average rating is", averageRating.toFixed(1));
}

getAverageRating();


function getTopMovie(){
    let highestRating = Math.max(...ratings);
    let hisghestRatedMovie = movies[ratings.indexOf(highestRating)];
    console.log("Highest rated movie:", hisghestRatedMovie);
}

getTopMovie();

const moviesSummary = () =>{
   let summary = {}
for (let i = 0; i < movies.length; i++){

   summary[movies[i]] = ratings[i];
   

}
return summary;
}
console.log("")
console.log("Movies Summary:");
let summaryObj = moviesSummary();
console.log(summaryObj);


