

## 인프런-생활코딩

공부 정리

```
  let dateState = useState((new Date().toString()));
  let _date = dateState[0] //state의 데이터 값이 들어감
  let setDate = dateState[1]; //_date를 컨트롤할 수 있는 함수가 들어감

  let [_date, setDate] = useState((new Date()).toString()) //위의 선언과 똑같음
```
