import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "Title is here!"};
    }
    changeTitle = () => {
        this.setState(prevState => ({
            title: "The title has been changed!"
        }));
    }
    render() {
        const pathStyle = {
            strokeWidth: 3,
            fillOpacity: 0
        }
        return (
                <div>Hello from the component!
                    <div id="title">{this.state.title}</div>
                    <button onClick={this.changeTitle}>Change Title</button>
                </div>
            );
    }
}

export default Hello;
