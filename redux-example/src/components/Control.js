import React from "react";
import PropTypes from "prop-types";
const propsTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func,
};

function createWarning(funcName) {
  return () => console.warn(funcName + " is not defined");
}

class Control extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    );
  }
}
Control.defaultProps = {
  onPlus: createWarning("onPlus"),
  onSubtract: createWarning("onSubtract"),
  onRandomizeColor: createWarning("onRandomizeColor"),
};
export default Control;
