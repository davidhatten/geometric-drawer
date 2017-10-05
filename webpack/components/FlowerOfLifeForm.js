import React from 'react';
import { Row, Col, Form, Input, Tooltip } from 'antd';
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
                    description={`Number of layers to build around the central circle.`}
                    value={props.iterations}
                    updateValue={props.updateIterations}/>
                <SliderInput
                    min={standardRadius.min}
                    max={standardRadius.max}
                    name={standardRadius.name}
                    description={`The radius of each circle.`}
                    value={props.radius}
                    updateValue={props.updateRadius} />
            </Col>
        </Row>
    </Form>
);

export default FlowerOfLifeForm;