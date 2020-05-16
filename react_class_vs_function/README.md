

## 인프런-생활코딩

공부 정리

```
  let dateState = useState((new Date().toString()));
  let _date = dateState[0] //state의 데이터 값이 들어감
  let setDate = dateState[1]; //_date를 컨트롤할 수 있는 함수가 들어감

  let [_date, setDate] = useState((new Date()).toString()) //위의 선언과 똑같음
```

### useEffect

```
  useEffect(function () {
    console.log('%cfunc => useEffect (componentDidMount & componentUpdate)' + (++funcId), funcStyle)
  }); //class style component의 hook중 componentDidMount & componentUpdate와 비슷
```

### clean up

```
 useEffect(function () {
    console.log('%cfunc => useEffect (componentDidMount & componentUpdate)' + (++funcId), funcStyle)
    return function () { //클린 업 : 컴포넌트에 변화가 생기면 리턴 함수가 호출되고 useEffect가 호출 되도록 함
      console.log('%cfunc => useEffect return (componentDidMount & componentUpdate)' + (++funcId), funcStyle)
    }
  });
```

### skipping effect

```
let [number, setNumber] = useState(props.initNumber) //위의 선언과 똑같음
  useEffect(function () {
    console.log('%cfunc => useEffect (componentDidMount & componentUpdate)' + (++funcId), funcStyle)
    document.title = number;
    return function () { //클린 업 : 컴포넌트에 변화가 생기면 리턴 함수가 호출되고 다시 useEffect가 호출 되도록 함
      console.log('%cfunc => useEffect return (componentDidMount & componentUpdate)' + (++funcId), funcStyle)
    }
  }, [number]);//[number]을 넣어 줌으로써 배열안에 원소의 상태가 바뀌었을때에만 첫번째 인자인 콜백함수가 실행
```

### useState에서 componentDidMount만 실행하고 싶을 때
```
let [number, setNumber] = useState(props.initNumber) //위의 선언과 똑같음
  useEffect(function () {
    console.log('%cfunc => useEffect (componentDidMount)' + (++funcId), funcStyle)
    document.title = number;
    return function () { 
      console.log('%cfunc => useEffect return (componentDidMount )' + (++funcId), funcStyle)
    }
  }, []);// []배열을 넣으면 1회만 실행 /컴포넌트가 최초로 생성 될 때 딱 한번만 실행
```