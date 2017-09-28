import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <LineWidthInput min={1} max={1000} />
                <HorizontalAxisLock />

            </Form>
        );
    }
}

export default GeneralOptionsConfig;