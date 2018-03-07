import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.name = "Hello World";
    }

    render() {
        return (
            <div>
                {this.name}
            </div>
        )
    }
}
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
