import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { CIRCLE_NAME } from './../shapeConstants';

const FormItem = Form.Item;

class CircleConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: 100,
            config: {
                location: (position) => {
                    return {
                        r: this.state.radius,
                        cx: position.x,
                        cy: position.y,
                    };
                },
            },
        };
    }
    componentDidMount() {
        console.log(`CircleConfig - componentDidMount`);

        this.props.initializeConfig(CIRCLE_NAME, this.state.config);
    }
    render() {
        return(
            <Form>
                <Row type="flex">
                    <Col span={2}>
                        <FormItem label={`Iterations`}>
                            <Input defaultValue={this.state.radius}/>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default CircleConfig;
