// @flow

import React, { Component } from 'react';
import Circle from './Circle';
import Square from './Square';
import FlowerOfLife from './FlowerOfLife';
import { CIRCLE_NAME, FOL_NAME, SQUARE_NAME } from './../shapeConstants';

const shapeTags = {
    [CIRCLE_NAME]: Circle,
    [SQUARE_NAME]: Square,
    [FOL_NAME]: FlowerOfLife,
};

type Props = {
    elementDimensions: { width: number, height: number},
    position: { x: number, y: number},
    shapeConfig: { shapeProps: { location: Function }, type: string}
};

type State = {
    shapes: Array<Object>,
    svgHeight: number,
    svgWidth: number,
};

class Canvas extends Component<Props, State> {
    constructor(props: Props) {
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
                locationData: locationProps,
                style: {
                    fill:`none`,
                    stroke:`black`,
                    strokeWidth:`5`,
                },
            },
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
                </svg>
            </div>
        );
    }
}

Canvas.propTypes = {

};

export default Canvas;
