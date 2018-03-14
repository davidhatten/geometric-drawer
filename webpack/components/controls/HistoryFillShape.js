import React from 'react';
import { Col, Row, Switch, Form } from 'antd';

const FormItem = Form.Item;

const HistoryFillShape = props => (
    <Row type="flex" justify="start" align="middle">
        <FormItem label="Fill Shape">
            <Switch size="small" checked={props.fillShape} onChange={props.toggleFillShape} />
        </FormItem>
    </Row>
);

export default HistoryFillShape;