import React from 'react';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";
import {drawPointedPetal} from "../../petalUtil";

class PointedPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal() {
        return drawPointedPetal(...arguments);
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