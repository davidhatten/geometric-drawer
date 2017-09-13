import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input } from 'antd';
import { FOL_NAME } from './../shapeConstants';
const FormItem = Form.Item;

class FlowerOfLifeConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterations: 3,
            location: (position) => {
                return {
                    position: position,
                    iterations: this.state.iterations,
                };
            },
        };
    }
    componentDidMount() {
        console.log(`FlowerOfLifeConfig - componentDidMount`);

        this.props.initializeConfig(FOL_NAME, this.state.location);
    }
    updateIterations = (event) => {
        this.setState({
            iterations: event.target.value,
        });
    }
    render() {
        return (
            <Form>
                <Row type="flex">
                    <Col span={3}>
                        <FormItem label="Iterations">
                            <Input value={this.state.iterations} defaultValue={this.state.iterations} onChange={this.updateIterations}/>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }

}

FlowerOfLifeConfig.propTypes = {
    initializeConfig: PropTypes.func.isRequired,
};

export default FlowerOfLifeConfig;
