import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "../controls/SliderInput";

const DoubleControlPointPetalForm = props => (
    <Form>
        <Row align="flex" justify="space-around">
            <Col span={24}>
                <SliderInput
                    min={1}
                    max={3000}
                    name={`Outer Radius (px)`}
                    description={`Radius of where the petal will terminate.`}
                    value={props.outerRadius}
                    updateValue={props.updateOuterRadius}
                />
                <SliderInput
                    min={1}
                    max={1400}
                    name={`Inner Radius (px)`}
                    description={`Radius of where the petal will originate.`}
                    value={props.innerRadius}
                    updateValue={props.updateInnerRadius}
                />
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`Outer X Control Point (px)`}
                    description={`Offset in pixels of the x coordinate of the outer control point. The control point is placed relative to the inner starting point of the petal.`}
                    value={props.outerXControl}
                    updateValue={props.updateOuterXControl}
                />
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`Outer Y Control Point (px)`}
                    description={`Offset in pixels of the y coordinate of the outer control point. The control point is placed relative to the inner starting point of the petal.`}
                    value={props.outerYControl}
                    updateValue={props.updateOuterYControl}
                />
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`Inner X Control Point (px)`}
                    description={`Offset in pixels of the x coordinate of the inner control point. The control point is placed relative to the inner starting point of the petal.`}
                    value={props.innerXControl}
                    updateValue={props.updateInnerXControl}
                />
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`Inner Y Control Point (px)`}
                    description={`Offset in pixels of the y coordinate of the inner control point. The control point is placed relative to the inner starting point of the petal.`}
                    value={props.innerYControl}
                    updateValue={props.updateInnerYControl}
                />
                <SliderInput
                    min={0}
                    max={500}
                    name={`Outer Gap (px)`}
                    description={`How far apart the base points of each petal are.`}
                    value={props.outerGap}
                    updateValue={props.updateOuterGap}
                />
                <SliderInput
                    min={0}
                    max={500}
                    name={`Inner Gap (px)`}
                    description={`How far apart the base points of each petal are.`}
                    value={props.innerGap}
                    updateValue={props.updateInnerGap}
                />
                <SliderInput
                    min={1}
                    max={36}
                    name={`Axes`}
                    description={`Number of axes to draw the petals on.`}
                    value={props.axes}
                    updateValue={props.updateAxes}
                />
                <SliderInput
                    min={0}
                    max={360}
                    name={`Rotation (degrees)`}
                    description={`Rotate the ring by a set amount of degrees`}
                    value={props.rotation}
                    updateValue={props.updateRotation}
                />
            </Col>
        </Row>
    </Form>
);

export default DoubleControlPointPetalForm;