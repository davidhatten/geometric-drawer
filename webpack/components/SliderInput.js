import React from 'react';
import {Col, Form, InputNumber, Row, Slider} from "antd";

const SliderInput = (props) => (
    <div>
        <Row>
            <label>Line Width:</label>
        </Row>
        <Row type="flex" justify="space=around" align="middle">
            <Col span={12}>
                <Slider min={1} max={1000} value={props.lineWidth} onChange={props.updateLineWidth}/>
            </Col>
            <Col span={1}>
                <InputNumber size="small" min={0} max={1000} value={props.lineWidth} onChange={props.updateLineWidth}/>
            </Col>
        </Row>
    </div>
);

export default SliderInput;