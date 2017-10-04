import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import SliderInput from "./SliderInput";
import { standardRadius } from "../shapeConstants";

const FlowerOfLifeForm = (props) => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <SliderInput
                    min={1}
                    max={10}
                    name={`Iterations`}
                    value={props.iterations}
                    updateValue={props.updateIterations}/>
                <SliderInput
                    min={standardRadius.min}
                    max={standardRadius.max}
                    name={standardRadius.name}
                    value={props.radius}
                    updateValue={props.updateRadius} />
            </Col>
        </Row>
    </Form>
);

export default FlowerOfLifeForm;