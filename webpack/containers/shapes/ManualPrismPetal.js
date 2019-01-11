import AbstractPetal from "./AbstractPetal";
import React from 'react';
import { connect } from "react-redux";
import { drawPrismPetal } from "../../petalUtil";

class ManualPrismPetal extends AbstractPetal {
    constructor(props) {
        super(props);
    }
    drawPetal() {
        return drawPrismPetal(...arguments);
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

export default connect(mapStateToProps)(ManualPrismPetal);
