import React from 'react';
import AbstractPetal from "./AbstractPetal";
import { drawCurveyPetal } from "../../petalUtil";
import { connect } from "react-redux";

class ManualCurveyPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal() {
        return drawCurveyPetal(...arguments);
    }
    render() {
        const paths = this.doubleControlPointIndependentForEachPetalArmAlgorithm();

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

export default connect(mapStateToProps)(ManualCurveyPetal);
