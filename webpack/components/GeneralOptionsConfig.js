import React, { Component } from 'react';
import LineWidthInput from "../containers/LineWidthInput";
import HorizontalAxisLock from "../containers/HorizontalAxisLock";
import VerticalAxisLock from "../containers/VerticalAxisLock";
import FillShapeInput from "../containers/FillShapeInput";
import CanvasSizeInput from "../containers/CanvasSizeInput";

class GeneralOptionsConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <FillShapeInput />
                <HorizontalAxisLock />
                <VerticalAxisLock />
                <LineWidthInput />
                <CanvasSizeInput />
            </React.Fragment>
        );
    }
}

export default GeneralOptionsConfig;