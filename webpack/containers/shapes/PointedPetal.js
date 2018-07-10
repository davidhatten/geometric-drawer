import React from 'react';
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";

class PointedPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal(startInnerPoint, startOuterPoint, startControlPoint, returnInnerPoint, returnOuterPoint, returnControlPoint) {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        const path = SvgPath().to(...startInnerPoint[0])
            .line(...startControlPoint[0])
            .line(...startOuterPoint[0])
            .line(...returnOuterPoint[0])
            .line(...returnControlPoint[0])
            .line(...returnInnerPoint[0])
            .close();

        return path.str();
    }
    render() {
        const paths = this.singleControlPointMirroredForEachPetalArmAlgorithm();

        return (
            <g>
                <path d={paths.join(` `)} {...this.props.styleProps[this.props.style]} />
            </g>
        );

    }
}


const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(PointedPetal);