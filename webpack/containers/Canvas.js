import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerDraw } from '../actions/triggerDraw';
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    svgPaper: {
        borderRadius: `8px`,
    },
    svg: {
        borderRadius: `8px`,
        display: `block`,
        margin: `auto`,
        backgroundColor: `white`,
    },
};

class Canvas extends Component {
    constructor(props) {
        super(props);
    }
    initiateDraw = (event) => {
        const svg = document.getElementById(`drawingCanvas`);
        const pt = svg.createSVGPoint();

        pt.x = event.clientX;
        pt.y = event.clientY;
        const svgPt = pt.matrixTransform(svg.getScreenCTM().inverse());

        const absPosition = {
            x: svgPt.x,
            y: svgPt.y,
        };

        this.props.drawSelectedShape(absPosition);
    }
    render() {
        const { shapeData, shapeProps, shapesIds } = this.props;
        const drawnShapes = shapesIds.map((shapeId, index) =>
            React.createElement(shapeData[shapeId].shapeTag,
                { ...shapeProps[shapeId],
                    key: index }
            )
        );
        return (
            <div>
                <Paper elevation={1} className={this.props.classes.svgPaper}>
                    <svg
                        id="drawingCanvas"
                        viewBox={`0 0 ${this.props.svgWidth} ${this.props.svgHeight}`}
                        width="100%"
                        height="100%"
                        className={this.props.classes.svg}
                        onClick={this.initiateDraw}>
                        You must use a browser that supports HTML5.
                        {drawnShapes}
                    </svg>
                </Paper>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Canvas));
