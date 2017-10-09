import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "../controls/SliderInput";

const CirclePetalForm = props => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <SliderInput
                    min={1}
                    max={1500}
                    name={`Ring Radius (px)`}
                    description={`Radius of the ring on which the petals are drawn.`}
                    value={props.ringRadius}
                    updateValue={props.updateBaseRadius} />
                <SliderInput
                    min={1}
                    max={500}
                    name={`Petal Radius (px)`}
                    description={`Radius of the petals.`}
                    value={props.petalRadius}
                    updateValue={props.updatePetalRadius} />
                <SliderInput
                    min={0}
                    max={360}
                    name={`Rotation (degrees)`}
                    description={`Rotate the ring by a set amount of degrees.`}
                    value={props.rotation}
                    updateValue={props.updateRotation} />
                <SliderInput
                    min={1}
                    max={36}
                    name={`Axes`}
                    description={`Number of axes to draw the petals on.`}
                    value={props.axes}
                    updateValue={props.updateAxes} />
            </Col>
        </Row>
    </Form>
);

export default CirclePetalForm;