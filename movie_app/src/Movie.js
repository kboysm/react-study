import React from 'react'
import './Movie.css'

class Movie extends React.Component {
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.MovieTitle}</h1>
            </div>
        )
    }
}

class MoviePoster extends React.Component {
    render() {
        return (
            <img src={this.props.poster} />
        )
    }
}

export default Movie