import React from 'react';
import {Col, Form, Input, Row} from "antd";

const FormItem = Form.Item;

const CircleForm = (props) => (
    <Form>
        <Row type="flex">
            <Col span={3}>
                <FormItem label={`Radius`}>
                    <Input value={props.radius} onChange={props.updateRadius}/>
                </FormItem>
            </Col>
        </Row>
    </Form>
);

export default CircleForm;