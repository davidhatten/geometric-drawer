import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shapes: [],
            svgHeight: 3300,
            svgWidth: 2550,
        };
    }
    drawShape = () => {
        const { elementDimensions, position } = this.props;
        console.log("Attempting to draw", this.props.shapeConfig);
        const absPosition = {
            x: (this.state.svgWidth/elementDimensions.width) * position.x ,
            y: (this.state.svgHeight/elementDimensions.height) * position.y,
        };
        const locationProps = this.props.shapeConfig.shapeProps.location(absPosition);
        console.log("location props are ", locationProps);
        const newShape = {
            type: this.props.shapeConfig.type,
            // cx: position.x * posOffset.x, 
            // cy: position.y * posOffset.x,
            // r:"100",
            shapeProps: {
                ...locationProps,
                fill:"none",
                stroke:"black",
                strokeWidth:"5",
            }
        };
        this.setState({
            shapes: this.state.shapes.concat(newShape),
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
                            this.state.shapes.map((shape) => (
                                React.createElement(
                                        shape.type,
                                        shape.shapeProps
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
