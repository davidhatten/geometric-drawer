import React, { Component } from 'react';
import { Form } from 'antd';
import LineWidthInput from "../containers/LineWidthInput";
import HorizontalAxisLock from "../containers/HorizontalAxisLock";

class GeneralOptionsConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form> 
                <LineWidthInput />
                <HorizontalAxisLock />

            </Form>
        );
    }
}

export default GeneralOptionsConfig;