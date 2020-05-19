import React from 'react';
import './App.css';
import Movie from './Movie'



class App extends React.Component {
  state = {

  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({

    //     movies: [
    //       {
    //         title: "행복한 세상의 족제비",
    //         poster: "https://t1.daumcdn.net/tvpot/thumb/vae3auRHH4E4RkPuvRPKqKL/thumb.png?t=1430669993436"
    //       },
    //       {
    //         title: "보노보노",
    //         poster: "https://t1.daumcdn.net/liveboard/fanzeel/5f1b14c3dff24410892506ca89ae9016.JPG"
    //       },
    //       {
    //         title: "포켓몬스터",
    //         poster: "https://i.ytimg.com/vi/XZApRsbSfc8/maxresdefault.jpg"
    //       },
    //       {
    //         title: "나루토",
    //         poster: "https://i.ytimg.com/vi/N_3Eft3kaRE/maxresdefault.jpg"
    //       },
    //       {
    //         title: "원피스",
    //         poster: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/images/2016/07/18/16/5/adbdce04-afc8-4be2-bfe6-a1279b0946d3.JPG"
    //       }
    //     ]

    //   })
    // }, 3000)
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating') //ajax로 url을 불러옴
      .then(r => r.json())
      .then(j => console.log(j))
      .catch(e => console.log(e.message))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, idx) => {
      return <Movie title={movie.title} poster={movie.poster} key={idx} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    )
  }
}

export default App;
