import React from 'react';
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";

class CurveyPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal(startInnerPoint, startOuterPoint, startInnerControlPoint, startOuterControlPoint,
        returnInnerPoint, returnOuterPoint, returnInnerControlPoint, returnOuterControlPoint) {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        // except it isn't any sufficiently complex petal will use this
        // maybe wrap this in a call to petalUtil?
        const path = SvgPath().to(...startInnerPoint[0])
            .bezier3(...startInnerControlPoint[0], ...startOuterControlPoint[0], ...startOuterPoint[0])
            .line(...returnOuterPoint[0])
            .bezier3(...returnOuterControlPoint[0], ...returnInnerControlPoint[0], ...returnInnerPoint[0])
            .close();

        return path.str();
    }
    render() {
        const paths = this.doubleControlPointsForEachPetalArmAlgorithm();

        return (
            <g>
                <path d={paths.join(` `) + ` Z`} {...this.props.styleProps[this.props.style]} />
            </g>
        );
    }
}

const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(CurveyPetal);

