import React from 'react';
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";

class RoundedPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal(startInnerPoint, startOuterPoint, startControlPoint,
        returnInnerPoint, returnOuterPoint, returnControlPoint) {
        // This goofy array spreading is because of the rotate library
        const path = SvgPath()
            .to(...startInnerPoint[0])
            .bezier2(...startControlPoint[0], ...startOuterPoint[0])
            .line(...returnOuterPoint[0])
            .bezier2(...returnControlPoint[0], ...returnInnerPoint[0])
            .close();

        return path.str();
    }
    render() {
        const paths = this.singleControlPointForEachPetalArmAlgorithm();

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

export default connect(mapStateToProps)(RoundedPetal);