import React from 'react'
import './Movie.css'

class Movie extends React.Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a Movie</h1>
            </div>
        )
    }
}

class MoviePoster extends React.Component {
    render() {
        return (
            <img src="https://ww.namu.la/s/e5fc04db5da6d26eb057cb9528b76fafbf688b87503c4c2ba7696de83ce40a7ce31d636679917b0ba34b30d33eace2b14fe3a660bb8308cfff0dda382bd24b5e021fc826a3357fcce7e3374bfccf6a8a4be4110744c3ebe9042a78e886b26aa3" />
        )
    }
}

export default Movie