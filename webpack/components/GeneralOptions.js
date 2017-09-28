import React, { Component } from 'react';
import { Form, InputNumber, Row, Col, Slider } from 'antd';

const FormItem = Form.Item;

class GeneralOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form> 
                <Row>
                    <label>Line Width:</label>
                </Row>
                <Row type="flex" justify="space=around" align="middle">
                    <Col span={12}>
                        <Slider min={1} max={100} />
                    </Col>
                    <Col span={1}>
                        <InputNumber size="small" min={0} max={100} />
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default GeneralOptions;