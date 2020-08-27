import React, {Component} from 'react';

class Calculator extends Component {
    constructor (props) {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        }
    }
    // [num] in setState allows us to use key values dynamically!
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value })
    }

    render() {
        return(
        <div className="container">
            <h1>Add with React!</h1>
            <div className="add">
                <input type="number"
                name="num1"
                placeholder="Enter your first number"
                value={this.state.num1}
                onChange={e => this.setNum(e, 'num1')} />
                <span>+</span>
                <input type="number"
                name="num2"
                placeholder="Enter your second number"
                value={this.state.num2}
                onChange={e => this.setNum(e, 'num2')} />
                <button>=</button>
                <h3>Addition results go here!</h3>
            </div>
        </div>
        )
    }
}

export default Calculator;