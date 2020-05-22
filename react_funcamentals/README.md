# react_Project

처음으로 create-react-app 모듈이 아닌 처음부터 끝까지 webpack설정 오류 하나하나 잡으면서 만들어본 react app

## 겪은 오류 사항과 해결

3-3편 수강 중 webpack.config.js를 수정 중 강의와 다르게 오류 발생 ->react-hot-loader버전을3으로 낮추고
react-hot-loader를 react-hot-loader/webpack로 수정 후 해결

```
module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']

                })],
                exclude: /node_modules/,

            }
        ]
    },
```

## 함수 복습

String.toLowerCase() : 문자열을 소문자로 변환

indexOf() : String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환

arr.sort([compareFunction]) :  compareFunction이 없을 시 오름차순으로 정렬한 배열을 반환

Array.filter() : 테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환

Array.prototype.slice() : begin부터 end까지에 대한 얖은 복사본을 새로운 배열 객체로 반환

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```