import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { SQUARE_NAME } from './../shapeConstants';

const FormItem = Form.Item;

class SquareConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 100,
            config: {
                location: (position) => {
                    return {
                        x: position.x - (this.state.length/2),
                        y: position.y - (this.state.length/2),
                        width: this.state.length,
                        height: this.state.length,
                    };
                },
            },
        };
    }
    componentDidMount() {
        console.log(`SquareConfig - componentDidMount`);

        this.props.initializeConfig(SQUARE_NAME, this.state.config);
    }
    updateLength = (event) => {
        this.setState({
            length: event.target.value,
        });
    }
    render() {
        return (
            <Form>
                <Row type="flex">
                    <Col span={3}>
                        <FormItem label="Side Length">
                            <Input value={this.state.length} defaultValue={this.state.length} onChange={this.updateLength}/>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default SquareConfig;
