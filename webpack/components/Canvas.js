import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Circle from './Circle';
import Square from './Square';
import FlowerOfLife from './FlowerOfLife';
import { CIRCLE_NAME, FOL_NAME, SQUARE_NAME } from './../shapeConstants';
import { triggerDraw } from '../actions/triggerDraw';

const shapeTags = {
    [CIRCLE_NAME]: Circle,
    [SQUARE_NAME]: Square,
    [FOL_NAME]: FlowerOfLife,
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
    initiateDraw = () => {
        const { elementDimensions, position } = this.props;
        console.log("canvas - initateDraw", this.props);
        const absPosition = {
            x: (this.state.svgWidth/elementDimensions.width) * position.x ,
            y: (this.state.svgHeight/elementDimensions.height) * position.y,
        };
        this.props.drawSelectedShape(absPosition);
        // const locationProps = this.props.shapeConfig.location(absPosition);

        // const newShape = {
        //     type: this.props.shapeConfig.type,
        //     shapeProps: {
        //         config: locationProps,
        //         style: {
        //             fill:`none`,
        //             stroke:`black`,
        //             strokeWidth:`5`,
        //         },
        //     },
        // };

        // this.setState({
        //     shapes: this.state.shapes.concat(
        //         React.createElement(
        //             shapeTags[newShape.type],
        //             newShape.shapeProps
        //         )),
        // });
    }
    render() {
        const svgStyle = {
            borderWidth: `1px`,
            borderStyle: `solid`,
            display: `block`,
            margin: `auto`,
        };
        const shapes = this.props.shapes.map((shape) =>
            React.createElement(shape.shape, shape.props)
        );
        return (
            <div>
                <svg
                    id="drawingCanvas"
                    viewBox={`0 0 ${this.state.svgWidth} ${this.state.svgHeight}`}
                    width="100%"
                    height="100%"
                    style={svgStyle}
                    onClick={this.initiateDraw}>
                    You must use a browser that supports HTML5.
                    {shapes}
                </svg>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shapes: state.drawShape.history,
});

const mapDispatchToProps = dispatch => ({
    drawSelectedShape: (location) => {dispatch(triggerDraw(location));},
});

Canvas.propTypes = {
    elementDimensions: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
    }),
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    shapeConfig: PropTypes.shape({
        type: PropTypes.string,
        location: PropTypes.func,
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
