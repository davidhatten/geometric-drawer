import React from 'react';
import {Col, Form, Input, Row} from "antd";

const FormItem = Form.Item;

const SquareForm = (props) => (
    <Form>
        <Row type="flex">
            <Col span={3}>
                <FormItem label="Side Length">
                    <Input value={props.length} onChange={props.updateLength}/>
                </FormItem>
            </Col>
        </Row>
    </Form>
);

export default SquareForm;