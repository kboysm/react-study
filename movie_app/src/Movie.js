import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

// class Movie extends React.Component {

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired,
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// class MoviePoster extends React.Component {

//     static propTypes = {
//         poster: PropTypes.string.isRequired,
//     }

//     render() {
//         return (
//             <img src={this.props.poster} />
//         )
//     }
// }

function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie_Colums">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns"></div>
            <h1>{title}</h1>
            <div className="Movie_Genres">
                {genres.map((genres, index) => <MovieGenres genres={genres} key={index} />
                )}
            </div>
            <p className="Movie_Synopsis">
                {synopsis}
            </p>
        </div>
    )
}
function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}
function MovieGenres({ genres }) {
    return (
        <span className="Movie_Genres">{genres}</span>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenres.propTypes = {
    genres: PropTypes.string.isRequired
}
export default Movie