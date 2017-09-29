import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import FOLIterations from "../containers/FOLIterations";

const FlowerOfLifeForm = (props) => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={24}>
                <FOLIterations />
            </Col>
        </Row>
    </Form>
);

export default FlowerOfLifeForm;