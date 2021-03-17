import logo from './logo.svg';
import './App.css';
import React from "react";

const range = max => [...Array(max).keys()];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arena: range(10).map(() => range(10))
        }
        console.log(this.state.map)
    }

    render() {
        return (
            <div className="App">
                <div>
                    {this.state.arena.flatMap(row =>
                        <div>{(row.map(cell => <div className="Cell"/>))}</div>)}
                </div>
            </div>
        );
    }
}

export default App;
