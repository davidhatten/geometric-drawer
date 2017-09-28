import React from 'react';
import { Row, Col, Form, Input } from 'antd';

const FormItem = Form.Item;

const FlowerOfLifeForm = (props) => (
    <Form>
        <Row type="flex" justify="space-around">
            <Col span={3}>
                <FormItem label="Iterations">
                    <Input value={props.iterations} onChange={props.updateIterations}/>
                </FormItem>
            </Col>
            <Col span={3}>
                <FormItem label="Radius">
                    <Input value={props.radius} onChange={props.updateRadius} />
                </FormItem>
            </Col>
        </Row>
    </Form>
);

export default FlowerOfLifeForm;