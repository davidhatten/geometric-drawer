import React, { Component } from 'react';
import { connect } from "react-redux";

class CirclePetal extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <g>

            </g>
        );
    }
}


const mapStateToProps = state => ({
    styleProps: state.shapeStyle.byId,
});

export default connect(mapStateToProps)(CirclePetal);
