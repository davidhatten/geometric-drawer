import React from 'react';
import SvgPath from 'path-svg/svg-path';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";

class PrismPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal(startInnerPoint, startOuterPoint, startInnerControlPoint, startOuterControlPoint,
        returnInnerPoint, returnOuterPoint, returnInnerControlPoint, returnOuterControlPoint) {
        // This goofy array spreading is because of the rotate library
        const path = SvgPath().to(...startInnerPoint[0])
            .line(...startInnerControlPoint[0])
            .line(...startOuterControlPoint[0])
            .line(...startOuterPoint[0])
            .line(...returnOuterPoint[0])
            .line(...returnOuterControlPoint[0])
            .line(...returnInnerControlPoint[0])
            .line(...returnInnerPoint[0])
            .close();

        return path.str();
    }
    render() {
        const paths = this.doubleControlPointsMirroredForEachPetalArmAlgorithm();

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

export default connect(mapStateToProps)(PrismPetal);

