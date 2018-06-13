import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "../controls/SliderInput";

const RectangleForm = (props) => (
    <Form>
        <Row type="flex">
            <Col span={24}>
                <SliderInput
                    min={0}
                    max={3000}
                    name={`Height`}
                    description={`The side height of the rectangle.`}
                    value={props.height}
                    updateValue={props.updateHeight}
                />
                <SliderInput
                    min={0}
                    max={4000}
                    name={`Width`}
                    description={`The side width of the rectangle.`}
                    value={props.width}
                    updateValue={props.updateWidth}
                />
                <SliderInput
                    min={0}
                    max={360}
                    name={`Rotation`}
                    description={`The rotation of the rectangle.`}
                    value={props.rotation}
                    updateValue={props.updateRotation}
                />
            </Col>
        </Row>
    </Form>
);

export default RectangleForm;