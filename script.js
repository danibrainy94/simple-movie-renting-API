
// A simple Movie renting API
class Movie {
    constructor(title, genre, availableCopies) {
        this.title = title;
        this.genre = genre;
        this.availableCopies = availableCopies;
    }
}


class MovieStore {
    constructor() {
        this.movies = [
        new Movie('Inception', 'Sci-Fi', 5),
        new Movie('The Shawshank Redemption', 'Drama', 3),
        new Movie('The Dark Knight', 'Action', 7),
        ]
        this.rentedMovies = []
    }
}