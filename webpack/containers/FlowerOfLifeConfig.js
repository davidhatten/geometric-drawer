import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { FOL_CONFIG } from '../shapeConstants';
import { connect } from 'react-redux';

import { changeFOLConfig } from '../actions/changeFOLConfig';

const FormItem = Form.Item;

class FlowerOfLifeConfig extends Component {
    constructor(props) {
        super(props);
        console.log(`FOLConfig - props`, this.props);
    }
    render() {
        return (
            <Form>
                <Row type="flex" justify="space-around">
                    <Col span={3}>
                        <FormItem label="Iterations">
                            <Input value={this.props.iterations} onChange={this.props.updateIterations}/>
                        </FormItem>
                    </Col>
                    <Col span={3}>
                        <FormItem label="Radius">
                            <Input value={this.props.radius} onChange={this.props.updateRadius} />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }

}

const mapStateToProps = state => ({
    iterations: state.shapeConfig[FOL_CONFIG].iterations,
    radius: state.shapeConfig[FOL_CONFIG].radius,
});

const mapDispatchToProps = dispatch => ({
    updateIterations: (event) => {dispatch(changeFOLConfig({iterations: parseInt(event.target.value)}));},
    updateRadius: (event) => {dispatch(changeFOLConfig({radius: parseInt(event.target.value)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(FlowerOfLifeConfig);
