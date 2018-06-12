import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "../controls/SliderInput";
import { standardSquareLength } from "../../shapeConstants";

const SquareForm = (props) => (
    <Form>
        <Row type="flex">
            <Col span={24}>
                <SliderInput
                    min={standardSquareLength.min}
                    max={standardSquareLength.max}
                    name={standardSquareLength.name}
                    description={`The side length of the square.`}
                    value={props.length}
                    updateValue={props.updateLength}
                />
                <SliderInput
                    min={0}
                    max={360}
                    name={`Rotation`}
                    description={`The rotation of the square.`}
                    value={props.rotation}
                    updateValue={props.updateRotation}
                />
            </Col>
        </Row>
    </Form>
);

export default SquareForm;