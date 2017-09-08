import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);
    }
    drawShape = () => {

    }
    render() {
        const svgStyle = {
            borderWidth: `1px`,
            borderStyle: `solid`,
            display: `block`,
            margin: `auto`,
        };
        return (
            <div>
                <svg
                    viewBox="0 0 2550 3300"
                    width="100%"
                    height="100%"
                    style={svgStyle}
                    onClick={this.drawShape}>
                        You must use a browser that supports HTML5.
                </svg>
            </div>
        );
    }
}

export default Canvas;
