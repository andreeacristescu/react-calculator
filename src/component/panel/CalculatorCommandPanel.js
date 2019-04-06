import CalculatorCommand from "../command/CalculatorCommand";
import React from "react";
import PropTypes from "prop-types";

import "./CalculatorCommandPanel.css";

class CalculatorCommandPanel extends React.Component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-calculator-command-panel">
                <div>
                    <CalculatorCommand name="CLEAR" clickHandler={this.handleClick} />
                    <CalculatorCommand name="+/-" clickHandler={this.handleClick} />
                    <CalculatorCommand name="%" clickHandler={this.handleClick} />
                    <CalculatorCommand name="÷" clickHandler={this.handleClick} />
                </div>
                <div>
                    <CalculatorCommand name="7" clickHandler={this.handleClick} />
                    <CalculatorCommand name="8" clickHandler={this.handleClick} />
                    <CalculatorCommand name="9" clickHandler={this.handleClick} />
                    <CalculatorCommand name="x" clickHandler={this.handleClick} />
                </div>
                <div>
                    <CalculatorCommand name="4" clickHandler={this.handleClick} />
                    <CalculatorCommand name="5" clickHandler={this.handleClick} />
                    <CalculatorCommand name="6" clickHandler={this.handleClick} />
                    <CalculatorCommand name="-" clickHandler={this.handleClick} />
                </div>
                <div>
                    <CalculatorCommand name="1" clickHandler={this.handleClick} />
                    <CalculatorCommand name="2" clickHandler={this.handleClick} />
                    <CalculatorCommand name="3" clickHandler={this.handleClick} />
                    <CalculatorCommand name="+" clickHandler={this.handleClick} />
                </div>
                <div>
                    <CalculatorCommand name="0" clickHandler={this.handleClick} />
                    <CalculatorCommand name="." clickHandler={this.handleClick} />
                    <CalculatorCommand name="=" clickHandler={this.handleClick} />
                </div>
            </div>
        );
    }
}
CalculatorCommandPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default CalculatorCommandPanel;