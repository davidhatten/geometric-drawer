import React, { Component } from 'react';
import { Form } from 'antd';
import LineWidthInput from "../containers/LineWidthInput";

class GeneralOptionsConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form> 
                <LineWidthInput />
            </Form>
        );
    }
}

export default GeneralOptionsConfig;