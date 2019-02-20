import React, { Component } from 'react';
import Form from 'antd/lib/form';
import 'antd/lib/form/style';
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
            <Form>
                <LineWidthInput />
                <FillShapeInput />
                <HorizontalAxisLock />
                <VerticalAxisLock />
                <CanvasSizeInput />
            </Form>
        );
    }
}

export default GeneralOptionsConfig;