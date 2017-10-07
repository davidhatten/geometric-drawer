import React from 'react';
import {Col, Form, Input, Row} from "antd";
import SliderInput from "../controls/SliderInput";
import { standardRadius } from "../../shapeConstants";

const CircleForm = (props) => (

    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <SliderInput
                    min={standardRadius.min}
                    max={standardRadius.max}
                    name={standardRadius.name}
                    description={`The radius of the circle.`}
                    value={props.radius}
                    updateValue={props.updateRadius}
                />
            </Col>
        </Row>
    </Form>
);

export default CircleForm;