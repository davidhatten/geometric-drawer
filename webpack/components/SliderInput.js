import React from 'react';
import {Col, Form, InputNumber, Row, Slider} from "antd";
const FormItem = Form.Item;

const SliderInput = (props) => (
    <FormItem label={props.name}>
        <Col span={18}>
            <Slider min={props.min} max={props.max} value={props.value} onChange={props.updateValue}/>
        </Col>
        <Col span={1}>
            {/*Empty spacer*/}
        </Col>
        <Col>
            <InputNumber size="small" min={props.min} max={props.max} value={props.value} onChange={props.updateValue}/>
        </Col>
    </FormItem>
);

export default SliderInput;
