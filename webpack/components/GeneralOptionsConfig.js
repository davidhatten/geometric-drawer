import React, { Component } from 'react';
import { Form } from 'antd';
import LineWidthInput from "../containers/LineWidthInput";
import HorizontalAxisLock from "../containers/HorizontalAxisLock";
import VerticalAxisLock from "../containers/VerticalAxisLock";

class GeneralOptionsConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form> 
                <LineWidthInput />
                <HorizontalAxisLock />
                <VerticalAxisLock />

            </Form>
        );
    }
}

export default GeneralOptionsConfig;