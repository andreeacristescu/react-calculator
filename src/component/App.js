import React from "react";
import CalculatorDisplay from "../component/display/CalculatorDisplay";
import CalculatorCommandPanel from "../component/panel/CalculatorCommandPanel";
import calculate from "../calculate/calculate";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }

    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName));
    };

    render() {
        return (
            <div className="component-app">
                <CalculatorDisplay value={this.state.next || this.state.total || "0"} />
                <CalculatorCommandPanel clickHandler={this.handleClick} />
            </div>
        );
    }
}
export default App;