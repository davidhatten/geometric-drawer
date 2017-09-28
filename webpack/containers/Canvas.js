import React, { Component } from 'react';
import { connect } from 'react-redux';

import { triggerDraw } from '../actions/triggerDraw';

class Canvas extends Component {
    constructor(props) {
        super(props);
        // TODO: Move this into global state and load into props
        this.state = {
            svgHeight: 3300,
            svgWidth: 2550,
        };
    }
    initiateDraw = () => {
        const { elementDimensions, position } = this.props;
        console.log(`canvas - initateDraw`, this.props);
        const absPosition = {
            x: (this.state.svgWidth/elementDimensions.width) * position.x ,
            y: (this.state.svgHeight/elementDimensions.height) * position.y,
        };

        this.props.drawSelectedShape(absPosition);
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

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
