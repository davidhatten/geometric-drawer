import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "../controls/SliderInput";

const RoundedPetalForm = props => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <SliderInput
                    min={1}
                    max={3000}
                    name={`Outer Radius`}
                    description={`Radius of where the petal will terminate`}
                    value={props.outerRadius}
                    updateValue={props.updateOuterRadius}
                />
                <SliderInput
                    min={1}
                    max={1400}
                    name={`Inner Radius`}
                    description={`Radius of where the petal will originate`}
                    value={props.innerRadius}
                    updateValue={props.updateInnerRadius}
                />
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`X Control Point`}
                    description={`Offset in pixels of the x coordinate of the control point`}
                    value={props.xControl}
                    updateValue={props.updateXControl}
                />
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`Y Control Point`}
                    description={`Offset in pixels of the y coordinate of the control point`}
                    value={props.yControl}
                    updateValue={props.updateYControl}
                />
                <SliderInput
                    min={1}
                    max={36}
                    name={`Axes`}
                    description={`Number of axes to draw the flower on`}
                    value={props.axes}
                    updateValue={props.updateAxes}
                />
            </Col>
        </Row>
    </Form>
);

export default RoundedPetalForm;