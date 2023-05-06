import React from "react";

export class Cart extends React.Component {
    static defaultProps = {
        name : 'Name blank',
        price : 100,
        value : 1,
        min : 0,
        cost : 100,
    };
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            price : props.price,
            value : props.value,
            cost : props.cost,
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState(
            (state, props) => {
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

    render() {
        return (
                <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.price}</td>
                    <td style={{ paddingLeft: 20,
                        paddingRight: 20,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",}}>
                        <button type="button" className="bp4-button bp4-outlined bp4-large"
                                onClick={this.handleIncrement}>+
                        </button>
                        <div>{this.state.value}</div>
                        <button type="button" className="bp4-button  bp4-outlined bp4-large"
                                onClick={this.handleDecrement}>-
                        </button>
                    </td>
                    <td>{this.state.cost=this.state.price*this.state.value}</td>
                </tr>
            );
    }
}