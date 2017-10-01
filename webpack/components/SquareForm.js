import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "./SliderInput";

const SquareForm = (props) => (
    <Form>
        <Row type="flex">
            <Col span={24}>
                <SliderInput
                    min={props.length.min}
                    max={props.length.max}
                    name={props.length.name}
                    value={props.length.value}
                    updateValue={props.updateLength}
                />
            </Col>
        </Row>
    </Form>
);

export default SquareForm;