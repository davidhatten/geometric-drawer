import React from 'react';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";
import SvgPath from "path-svg/svg-path";

class ClawPetal extends AbstractPetal {
    constructor(props) {
        super(props);
        this.firstPetalDrawn = false;
        this.drawPetal = this.drawPetal.bind(this);
    }
    drawPetal(startInnerPoint, startOuterPoint, startControlPoint, returnInnerPoint, returnOuterPoint, returnControlPoint) {
        // This goofy array spreading is because of the rotate library
        // at least it's confined to here
        const path = this.startClosedShapePetal(startInnerPoint);

        path.bezier2(...startControlPoint[0], ...startOuterPoint[0])
            .line(...returnOuterPoint[0])
            .bezier2(...returnControlPoint[0], ...returnInnerPoint[0]);

        return path.str();
    }
    startClosedShapePetal = (startPoint) => {
        let path = null;
        if (this.firstPetalDrawn) {
            path = SvgPath().line(...startPoint[0]);

        } else {
            path = SvgPath().to(...startPoint[0]);
            this.firstPetalDrawn = true;
        }

        return path;
    }
    render() {
        const paths = this.singleControlPointForBothPetalArmsAlgorithm();
        this.firstPetalDrawn = false;

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

export default connect(mapStateToProps)(ClawPetal);