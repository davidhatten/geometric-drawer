import React from 'react';
import {Col, Form, Input, Row} from "antd";
import SliderInput from "./SliderInput";
import { standardRadius } from "../shapeConstants";

const CircleForm = (props) => (

    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                {console.log(props)}
                <SliderInput
                    min={standardRadius.min}
                    max={standardRadius.max}
                    name={standardRadius.name}
                    value={props.radius}
                    updateValue={props.updateRadius}
                />
            </Col>
        </Row>
    </Form>
);

export default CircleForm;