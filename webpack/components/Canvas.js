import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circles: [],
            svgHeight: 3300,
            svgWidth: 2550,
        };
    }
    drawShape = () => {
        const { elementDimensions, position } = this.props;
        const posOffset = {
            width: this.state.svgWidth/elementDimensions.width,
            height: this.state.svgHeight/elementDimensions.height,
        };
        const newCircle = {
            cx: position.x * posOffset.width, 
            cy: position.y * posOffset.height,
            r:"100",
            fill:"none",
            stroke:"black",
            strokeWidth:"5",
        };
        this.setState({
            circles: this.state.circles.concat(newCircle),
        });
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
                    viewBox={`0 0 ${this.state.svgWidth} ${this.state.svgHeight}`}
                    width="100%"
                    height="100%"
                    style={svgStyle}
                    onClick={this.drawShape}>
                        You must use a browser that supports HTML5.
                        {
                            this.state.circles.map((circle) => (
                                React.createElement(
                                        'circle',
                                        circle
                                    )
                                )
                            )
                        }
                </svg>
            </div>
        );
    }
}

export default Canvas;
