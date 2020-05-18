import React from 'react';
import './App.css';
import Movie from './Movie'



class App extends React.Component {
  state = {

    movies: [
      {
        title: "행복한 세상의 족제비",
        poster: "https://t1.daumcdn.net/tvpot/thumb/vae3auRHH4E4RkPuvRPKqKL/thumb.png?t=1430669993436"
      },
      {
        title: "보노보노",
        poster: "https://t1.daumcdn.net/liveboard/fanzeel/5f1b14c3dff24410892506ca89ae9016.JPG"
      },
      {
        title: "포켓몬스터",
        poster: "https://i.ytimg.com/vi/XZApRsbSfc8/maxresdefault.jpg"
      },
      {
        title: "나루토",
        poster: "https://i.ytimg.com/vi/N_3Eft3kaRE/maxresdefault.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: ' world! '

      })
    }, 3000)
  }
  render() {
    return (
      <div className="App">


        {this.state.movies.map((movie, idx) => {
          return <Movie title={movie.title} poster={movie.poster} key={idx} />
        })}
      </div>
    )
  }
}

export default App;
