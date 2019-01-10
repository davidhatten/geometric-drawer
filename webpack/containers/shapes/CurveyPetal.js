import React from 'react';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";
import {drawCurveyPetal} from "../../petalUtil";

class CurveyPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal() { // now this is the height of bullshit
        return drawCurveyPetal(...arguments);
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

export default connect(mapStateToProps)(CurveyPetal);

