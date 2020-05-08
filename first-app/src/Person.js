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
                {/* <h2>{this.props.children}</h2> */}
                {this.props.myfun()}
                {console.log(this.props.st)}
            </div>
        )
    }
}

// const Person = (props) => (
// const Person = ({ name, age }) => (
// <div>
//     <h1>이름 : {name} , 나이는 : {age}</h1>
// </div>
// )
// export default person
export { Person };