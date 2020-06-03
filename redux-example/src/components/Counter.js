import React from 'react';
import Value from './Value'
import Control from './Control'

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Value />
                <Control />
            </div>
        )
    }
}
export default Counter;