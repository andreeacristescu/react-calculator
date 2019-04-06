import React from "react";
import PropTypes from "prop-types";
import "./CalculatorCommand.css";

class CalculatorCommand extends React.Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        const className = [
            "component-calculator-command",
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}
CalculatorCommand.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
};
export default CalculatorCommand;