## 노마드코더 영화 웹사이트 클론

### 필기

render의 기능은 뭔가를 보여주는,출력하는 기능이다.
render의 기능 : 이 컴포넌트가 나에게 보여주는 것이 무엇인가 

```
{movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })} //return이 없으면 에러 발생
```

PropTypes : props의 타입을 지정할 수 있음 , 부모 컴포넌트에서 얻는 정보의 종류가 무엇인지 ,있는지 없는지 알 수 있다.

yarn add prop-types로 모듈을 다운로드 후 해당 컴포넌트에

```
    static propTypes = {
        title: PropTypes.string.isRequired, //isRequired는 이 props는 필수라는 의미
        poster: PropTypes.string,
    } //이런 식으로 건네받는 props의 타입을 지정

```

Component Lifecycle

Render : componentWillMount() -> render() -> componentDidMount()

update: componentWillReceiveProps() -> shouldComponentUpdate() ->componentWillUpdate() ->render() ->componentDidUpdate()

```
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
         //////////// 위의 class타입의 컴포넌트와 아래 펑션타입의 컴포넌트는 서로 같다
function Movie({ title, poster }) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}
function MoviePoster({ poster }) {
    return (
        <img src={poster} />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
export default Movie
```

### 궁금했던 것들과 해결

1.r.json()을 return하지 않았는데 왜 다음 then으로 data가 이동하는거지??
```
 _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating') //ajax로 url을 불러옴
      .then(r => r.json())
      .then(j => console.log(j))
      .catch(e => console.log(e.message))
  }
```
해답 : arrow function은 return이 자동이라서 쓸 필요가 없다고 한다

### 완성!
![Movie_App_Img](https://user-images.githubusercontent.com/51103479/82421397-ecc33780-9abb-11ea-9384-a0c96d2f2f10.JPG)
