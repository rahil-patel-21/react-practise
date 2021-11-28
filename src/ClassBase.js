import { Component } from "react";

class ClassBase extends Component {
    constructor() {
        super();
        this.state = {
            data: 'Rahil'
        };
    }
    changeData() {
        this.setState({ data: 'Patel' });
    }
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.changeData()}>Click Here</button>
            </div>
        );
    }
}

export default ClassBase;