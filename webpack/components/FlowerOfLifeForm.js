import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import Iterations from "../containers/inputs/flowerOfLife/Iterations";
import Radius from "../containers/inputs/flowerOfLife/Radius";
import SliderInput from "./SliderInput";

const FlowerOfLifeForm = (props) => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <SliderInput
                    min={props.iterations.min}
                    max={props.iterations.max}
                    name={props.iterations.name}
                    value={props.iterations.value}
                    onChange={props.iterations.updateIterations}/>
                <SliderInput
                    min={props.radius.min}
                    max={props.radius.max}
                    name={props.radius.name}
                    value={props.radius.value}
                    onChange={props.radius.updateRadius} />
            </Col>
        </Row>
    </Form>
);

export default FlowerOfLifeForm;