import React, { Component } from 'react';
import LineWidthInput from "../containers/LineWidthInput";
import HorizontalAxisLock from "../containers/HorizontalAxisLock";
import VerticalAxisLock from "../containers/VerticalAxisLock";
import FillShapeInput from "../containers/FillShapeInput";
import CanvasSizeInput from "../containers/CanvasSizeInput";
import {FormGroup} from "@material-ui/core";

class GeneralOptionsConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FormGroup>
                <LineWidthInput />
                <FillShapeInput />
                <HorizontalAxisLock />
                <VerticalAxisLock />
                <CanvasSizeInput />
            </FormGroup>
        );
    }
}

export default GeneralOptionsConfig;