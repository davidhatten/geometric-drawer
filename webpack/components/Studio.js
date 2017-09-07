import React, { Component } from 'react';
import { Row, Col, Collapse, Form, Input } from 'antd';
const Panel = Collapse.Panel;
const FormItem = Form.Item;

class Studio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const svgStyle = {
            borderWidth: `1px`,
            borderStyle: `solid`,
            display: `block`,
            margin: `auto`,
        };
        return (
            <div>
                <Row type="flex" justify="space-around">
                    <Col lg={10} md={10} sm={10}>
                        <svg viewBox="0 0 2550 3300" width="100%" height="100%" style={svgStyle}></svg>
                    </Col>
                    <Col lg={10} md={10} sm={10}>
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
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Studio;
