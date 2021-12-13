// what is a class in programming?
// you can think of a Class as a factory: let's talk about a chair factory
// the chair that comes out of the chair factory is called an INSTANCE of that class

import { Component } from "react"

// one very important thing about classes is that they can INHERIT properties from other classes
// so a class can "derive" from another one, can inherit properties instead of being
// written from scratch

class ClassComponent extends Component { // Component is another class, taken directly from the React Library

    // state is a reserved keyword, you have to use it
    state = {
        // a state object can be defined just in a class component.
        // what is a state? a state is an object that can carry information over time.
        counter: 0
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: '2rem' }}>My name is: {this.props.name}</div>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                <h3>{this.state.counter}</h3>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
            </div>
        )
    }
}

export default ClassComponent

// a class component can do everything a functional component can do and more!