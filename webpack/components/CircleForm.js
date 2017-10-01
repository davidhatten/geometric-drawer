import React from 'react';
import {Col, Form, Input, Row} from "antd";
import SliderInput from "./SliderInput";

const FormItem = Form.Item;

const CircleForm = (props) => (

    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                {console.log(props)}
                <SliderInput
                    min={props.radius.min}
                    max={props.radius.max}
                    value={props.radius.value}
                    name={props.radius.name}
                    updateValue={props.updateRadius}
                />
            </Col>
        </Row>
    </Form>
);

export default CircleForm;