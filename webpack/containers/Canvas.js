import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Anchor } from 'antd';

import { triggerDraw } from '../actions/triggerDraw';

class Canvas extends Component {
    constructor(props) {
        super(props);
    }
    initiateDraw = () => {
        const { elementDimensions, position } = this.props;
        const absPosition = {
            x: (this.props.svgWidth/elementDimensions.width) * position.x ,
            y: (this.props.svgHeight/elementDimensions.height) * position.y,
        };

        this.props.drawSelectedShape(absPosition);
    }
    render() {
        const svgStyle = {
            borderWidth: `3px`,
            borderStyle: `solid`,
            borderRadius: `4px`,
            display: `block`,
            margin: `auto`,
            backgroundColor: `white`,
        };
        const { shapeData, shapeProps, shapesIds } = this.props;
        const drawnShapes = shapesIds.map((shapeId, index) =>
            React.createElement(shapeData[shapeId].shapeTag,
                { ...shapeProps[shapeId],
                    key: index }
            )
        );
        return (
            <div>
                <svg
                    id="drawingCanvas"
                    viewBox={`0 0 ${this.props.svgWidth} ${this.props.svgHeight}`}
                    width="95%"
                    height="95%"
                    style={svgStyle}
                    onClick={this.initiateDraw}>
                    You must use a browser that supports HTML5.
                    {drawnShapes}
                </svg>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shapesIds: state.shapeHistory.allIds,
    shapeData: state.shapeHistory.byId,
    shapeProps: state.shapeProps.byId,
    svgHeight: state.generalConfig.canvasHeight,
    svgWidth: state.generalConfig.canvasWidth,
});

const mapDispatchToProps = dispatch => ({
    drawSelectedShape: (location) => {dispatch(triggerDraw(location));},
});

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
