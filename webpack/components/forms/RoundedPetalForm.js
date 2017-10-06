import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "../controls/SliderInput";

const RoundedPetalForm = props => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <SliderInput
                    min={1}
                    max={1000}
                    name={`Inner Radius`}
                    description={`Radius of where the petal will originate`}
                    value={props.innerRadius}
                    updateValue={props.updateInnerRadius}
                />
                <SliderInput
                    min={1}
                    max={1000}
                    name={`Outer Radius`}
                    description={`Radius of where the petal will terminate`}
                    value={props.outerRadius}
                    updateValue={props.updateOuterRadius}
                />
            </Col>
        </Row>
    </Form>
);

export default RoundedPetalForm;