import React from 'react'

class Person extends React.Component {
    state = {
        person: [
            { name: "ZZZ", age: 56 },
            { name: "AAA", age: 85 },
            { name: "BBB", age: 45 },
        ]
    }
    render() {
        const { name, age } = this.props; //ES6
        return (
            <div>
                <h1>이름 : {name} , 나이는 : {age}</h1>
            </div>
        )
    }
}

// 1.const Person = (props) => (
// 2.const Person = ({ name, age }) => (
//     <div>
//         <h1>이름 : {name} , 나이는 : {age}</h1>
//     </div>
// )
// export default person
export { Person };