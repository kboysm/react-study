import React from 'react';
import PropTypes from 'prop-types';
const propsTypes = {
    number: PropTypes.number
}

class Value extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}
Value.defaultProps = {
    number: -1
}
export default Value;