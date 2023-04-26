import React from "react";
import { Button } from "@blueprintjs/core";

export class MyCounter extends React.Component {
    static defaultProps = {
        min : -10,
        max : 10,
        value : 0
    };
    constructor(props) {
        super(props);
        this.state = {
            value : props.value
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement() {
        this.setState(
            (state, props) => {
                if (state.value < props.max)
                    return {
                        value: state.value + 1
                    };
            }
        )
    }
    handleDecrement() {
        this.setState(
            (state, props) => {
                if (state.value > props.min)
                    return {
                        value: state.value - 1
                    };
            }
        )
    }
    handleReset() {
        this.setState(
            (state, props) => {
                return {
                    value: props.value
                };
            }
        )
    }

    render() {
        return (
            <div class="div_custom">
                <div class="customclass">Поточний рахунок: {this.state.value}</div>
                <div>
                    <button type="button" class="bp4-button bp4-outlined bp4-large" onClick={this.handleIncrement}>+</button>
                    <button type="button" class="bp4-button  bp4-outlined bp4-large" onClick={this.handleDecrement}>-</button>
                    <button type="button" class="bp4-button  bp4-outlined bp4-large" onClick={this.handleReset}>Reset</button>
                </div>
            </div>);
    }
}