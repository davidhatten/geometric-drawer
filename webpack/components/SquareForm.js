import React from 'react';
import { Col, Form, Row } from "antd";
import SliderInput from "./SliderInput";
import { standardSquareLength } from "../shapeConstants";

const SquareForm = (props) => (
    <Form>
        <Row type="flex">
            <Col span={24}>
                <SliderInput
                    min={standardSquareLength.min}
                    max={standardSquareLength.max}
                    name={standardSquareLength.name}
                    description={`The side length of the sqaure.`}
                    value={props.length}
                    updateValue={props.updateLength}
                />
            </Col>
        </Row>
    </Form>
);

export default SquareForm;