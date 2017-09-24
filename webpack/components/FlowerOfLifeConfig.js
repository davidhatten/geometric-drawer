import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Input } from 'antd';
import { FOL_CONFIG } from './../shapeConstants';
import { connect } from 'react-redux';

import changeFOLConfig from '../reducer/changeFOLConfig';

const FormItem = Form.Item;

class FlowerOfLifeConfig extends Component {
    constructor(props) {
        super(props);
        console.log("FOLConfig - props", this.props);
    }

    render() {
        return (
            <Form>
                <Row type="flex">
                    <Col span={3}>
                        <FormItem label="Iterations">
                            <Input value={this.props.iterations} defaultValue={this.props.iterations} onChange={this.props.updateIterations}/>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }

}

const mapStateToProps = state => ({
    iterations: state.changeFOLConfig[FOL_CONFIG].iterations,
});

const mapDispatchToProps = dispatch => ({
    updateIterations: (iterations) => {dispatch(changeFOLConfig({iterations: iterations}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(FlowerOfLifeConfig);
