import React, { Component } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { SQUARE_CONFIG } from './../shapeConstants';
import { connect } from 'react-redux';

import { changeSquareConfig } from '../action/changeSquareConfig';

const FormItem = Form.Item;

class SquareConfig extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <Row type="flex">
                    <Col span={3}>
                        <FormItem label="Side Length">
                            <Input value={this.props.length} onChange={this.props.updateLength}/>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    length: state.shapeConfig[SQUARE_CONFIG].length,
});

const mapDispatchToProps = dispatch => ({
    updateLength: (event) => {dispatch(changeSquareConfig({length: parseInt(event.target.value)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SquareConfig);
