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
