import React, { Component } from 'react';
import { Form, InputNumber, Row, Col, Slider } from 'antd';
import { connect } from 'react-redux';
import { changeGeneralConfig } from '../actions/changeGeneralConfig';
import SliderInput from "../components/SliderInput";
import LineWidthInput from "./LineWidthInput";

class GeneralOptionsConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form> 
                <LineWidthInput min={1} max={1000} />
            </Form>
        );
    }
}

export default GeneralOptionsConfig;