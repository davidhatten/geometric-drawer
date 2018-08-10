import React, { Component } from 'react';
import { Form } from 'antd';
import LineWidthInput from "../containers/LineWidthInput";
import HorizontalAxisLock from "../containers/HorizontalAxisLock";
import VerticalAxisLock from "../containers/VerticalAxisLock";
import FillShapeInput from "../containers/FillShapeInput";

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
            </Form>
        );
    }
}

export default GeneralOptionsConfig;