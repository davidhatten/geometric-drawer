import React from 'react';
import {Col, Form, InputNumber, Row, Slider} from "antd";
const FormItem = Form.Item;

const SliderInput = (props) => (
    <FormItem label="Line Width">
        <Col span={12}>
            <Slider min={props.min} max={props.max} value={props.lineWidth} onChange={props.updateLineWidth}/>
        </Col>
        <Col span={1}>
            <InputNumber size="small" min={props.min} max={props.max} value={props.lineWidth} onChange={props.updateLineWidth}/>
        </Col>
    </FormItem>
);

export default SliderInput;
