import React, { Component } from 'react';
import { Row, Col, Collapse, Form, Input } from 'antd';
const Panel = Collapse.Panel;
const FormItem = Form.Item;

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Collapse accordion>
                <Panel header={`Flower of Life`} key="flowerOfLife">
                    <Form>
                        <Row type="flex">
                            <Col span={2}>
                                <FormItem label={`Iterations`}>
                                    <Input defaultValue="3"/>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Panel>
                <Panel header={`Metatron's Cube`} key="metatronsCube">
                    <p>Options for Metatrons cube</p>
                </Panel>
            </Collapse>
        );
    }
}

export default Palette;
