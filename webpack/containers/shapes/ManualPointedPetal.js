import AbstractPetal from "./AbstractPetal";
import { connect } from "react-redux";
import { drawPointedPetal } from "../../petalUtil";
import React from 'react';

class ManualPointedPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal() {
        return drawPointedPetal(...arguments);
    }
    render() {
        const paths = this.singleControlPointIndependentForEachPetalArmAlgorithm();

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

export default connect(mapStateToProps)(ManualPointedPetal);