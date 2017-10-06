import React from 'react';
import { Col, Form, InputNumber, Row, Slider, Tooltip } from "antd";
const FormItem = Form.Item;

const SliderInput = (props) => (
    <FormItem label={<Tooltip title={props.description}>{props.name}</Tooltip>}>
        <Col span={18}>
            <Slider min={props.min} max={props.max} value={props.value} onChange={props.updateValue}/>
        </Col>
        <Col span={1}>
            {/*Empty spacer*/}
        </Col>
        <Col>
            <Tooltip title={props.description}>
                <InputNumber size="small" min={props.min} max={props.max} value={props.value} onChange={props.updateValue}/>
            </Tooltip>
        </Col>
    </FormItem>
);

export default SliderInput;
