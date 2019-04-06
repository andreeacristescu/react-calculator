import React from "react";
import PropTypes from "prop-types";

import "./CalculatorDisplay.css";

class CalculatorDisplay extends React.Component {
    render() {
        return (
            <div className="component-calculator-display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}
CalculatorDisplay.propTypes = {
    value: PropTypes.string,
};
export default CalculatorDisplay;