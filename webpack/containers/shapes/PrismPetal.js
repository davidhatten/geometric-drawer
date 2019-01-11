import React from 'react';
import { connect } from "react-redux";
import AbstractPetal from "./AbstractPetal";
import {drawPrismPetal} from "../../petalUtil";

class PrismPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal() {
        return drawPrismPetal(...arguments);
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

