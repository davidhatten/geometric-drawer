import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input } from 'antd';
import { CIRCLE_CONFIG } from '../shapeConstants';
import { changeCircleConfig } from '../actions/changeCircleConfig';
const FormItem = Form.Item;

class CircleConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Form>
                <Row type="flex">
                    <Col span={3}>
                        <FormItem label={`Radius`}>
                            <Input value={this.props.radius} onChange={this.props.updateRadius}/>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    radius: state.shapeConfig[CIRCLE_CONFIG].radius,
});

const mapDispatchToProps = dispatch => ({
    updateRadius: (event) => {dispatch(changeCircleConfig({radius: parseInt(event.target.value)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(CircleConfig);
