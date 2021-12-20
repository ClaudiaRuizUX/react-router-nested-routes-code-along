import React, {Component} from 'react';

class Temp extends Component {
    constructor() {
        super()
        this.state ={
            count: 0
        }
    }

    render() {
        return (
        <div>
            <p>You clicked {count} times </p>
            <button onClick={() => this.setState.(prevState => {return {count: prevState.count +1})}}></button>

        </div>)

    }
}

export default Temp;