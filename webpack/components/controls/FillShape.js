import React from 'react';
import Row from 'antd/lib/row';
import 'antd/lib/row/style';
import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style';
import Form from 'antd/lib/form';
import 'antd/lib/form/style';

const FormItem = Form.Item;

const FillShape = props => (
    <Row type="flex" justify="center" align="middle">
        <FormItem labelCol={{ span: 17 }} wrapperCol={{ span: 2 }} label="Fill Shape">
            <Switch size="small" checked={props.fillShape} onChange={props.toggleFillShape} />
        </FormItem>
    </Row>
);

export default FillShape;