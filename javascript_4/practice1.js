let movie = {
 title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,

  getSummary: function() {
    return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
  }
};


movie.isWatched = true;


console.log(movie.getSummary());
console.log("Watched:", movie.isWatched);

let movies = [
  movie,
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    isWatched: true,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "The Godfather Part II",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "The Dark Knight Rises",
    director: "Christopher Nolan",
    releaseYear: 2012,
    rating: 8.4,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    rating: 8.9,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  }

];


function displayTopRatedMovies(movies) {
  console.log("Movies with ratings greater than 7 :");
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
      console.log(movies[i].getSummary());
    }
  }
}


displayTopRatedMovies(movies);
