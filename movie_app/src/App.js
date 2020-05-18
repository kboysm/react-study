import React from 'react';
import './App.css';
import Movie from './Movie'


const movies = [
  {
    title: "행복한 세상의 족제비",
    poster: "https://lh3.googleusercontent.com/proxy/5-ByH1wVit0v39H8a8vfp-eIwVNUmxoCdqkoJuXc0IXzsjsLyRBVfClP55dTAUFxjOfGTGaXntENdgr0nfTIrhaj5mqmwdttHLZGIXIluUAO"
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
class App extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        {movies.map((movie, idx) => {
          return <Movie title={movie.title} poster={movie.poster} key={idx} />
        })}
      </div>
    )
  }
}

export default App;
