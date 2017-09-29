import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import Iterations from "../containers/inputs/flowerOfLife/Iterations";
import Radius from "../containers/inputs/flowerOfLife/Radius";

const FlowerOfLifeForm = (props) => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <Iterations />
                <Radius />
            </Col>
        </Row>
    </Form>
);

export default FlowerOfLifeForm;