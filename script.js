
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

    rentMovie(title) {
        const movieIndex = this.movies.findIndex(movie => movie.title === title)


        if (movieIndex !== -1 && this.movies[movieIndex].availableCopies > 0) {
        this.movies[movieIndex].availableCopies--
        this.rentedMovies.push(this.movies[movieIndex])
        return `${title} rented successfully.`
        } else {
        return `Sorry, ${title} is not available for rent or no copies left.`
        }
    }


    returnMovie(title) {
        const rentedMovieIndex = this.rentedMovies.findIndex(movie => movie.title === title)


        if (rentedMovieIndex !== -1) {
        this.movies.push(this.rentedMovies[rentedMovieIndex])
        this.rentedMovies.splice(rentedMovieIndex, 1)
        return `${title} returned successfully.`
        } else {
        return `Error: ${title} was not rented from this store.`
        }
    }


    displayAvailableMovies() {
        return this.movies.map(movie => `${movie.title} (${movie.genre}) - Available Copies: ${movie.availableCopies}`).join('\n')
    }


    displayRentedMovies() {
        return this.rentedMovies.map(movie => `${movie.title} (${movie.genre})`).join('\n')
    }
}

