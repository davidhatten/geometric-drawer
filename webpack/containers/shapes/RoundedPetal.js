import React from 'react';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";
import {drawRoundedPetal} from "../../petalUtil";

class RoundedPetal extends AbstractPetal {
    constructor(props) {
        super(props);

    }
    drawPetal() {
        return drawRoundedPetal(...arguments);
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

export default connect(mapStateToProps)(RoundedPetal);