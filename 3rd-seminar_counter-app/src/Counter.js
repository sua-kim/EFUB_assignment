import React, { Component } from 'react';

class Counter extends Component {
    state = { number: 0 };

    plus = () => {
        this.setState({
            number: this.state.number + 1
        });
    };
    minus = () => {
        this.setState({
            number: this.state.number - 1
        });
    };
    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>Count</h1>
                <h2>값 : {number}</h2>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default Counter;