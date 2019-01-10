import AbstractPetal from "./AbstractPetal";
import React from 'react';
import { connect } from "react-redux";
import {drawRoundedPetal} from "../../petalUtil";

class ManualRoundedPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal() {
        return drawRoundedPetal(...arguments);
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

export default connect(mapStateToProps)(ManualRoundedPetal);
