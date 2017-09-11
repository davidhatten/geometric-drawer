import React, { Component } from 'react';
import Circle from './Circle';
import Square from './Square';
import { CIRCLE_NAME, SQUARE_NAME } from './../shapeConstants';

const shapeTags = {
                    [CIRCLE_NAME]: Circle, 
                    [SQUARE_NAME]: Square,
                };

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
        const absPosition = {
            x: (this.state.svgWidth/elementDimensions.width) * position.x ,
            y: (this.state.svgHeight/elementDimensions.height) * position.y,
        };
        const locationProps = this.props.shapeConfig.shapeProps.location(absPosition);
        
        const newShape = {
            type: this.props.shapeConfig.type,
            shapeProps: {
                ...locationProps,
                fill:"none",
                stroke:"black",
                strokeWidth:"5",
            }
        };

        this.setState({
            shapes: this.state.shapes.concat(
                                        React.createElement(
                                                shapeTags[newShape.type],
                                                newShape.shapeProps
                                            )),
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
                        {this.state.shapes}
                        <Circle r="100" cx="1889.689265536723" cy="1919.8783732421134" fill="none" stroke="black" strokeWidth="5"></Circle>
                </svg>
            </div>
        );
    }
}

export default Canvas;