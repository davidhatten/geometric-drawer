import React, { Component } from 'react';
import { Row, Col, Form, Input, Popover, Button } from 'antd';

class HistoryRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const content = (
            <div>
                <p>Content</p>
            </div>
        );
        const mapStateToProps = state => ({
            iterations: state.shapeHistory[this.props.shape.id].iterations,
            radius: state.shapeHistory[this.props.shape.id].radius,
        })
        return (
            <Row type="flex" justify="space-around">
                <Col>
                    {this.props.shape.name}
                </Col>
                <Col>
                    <Popover placement={`left`} title={this.props.name} content={content} trigger={`click`}>
                        <Button>Edit</Button>
                    </Popover>
                </Col>
            </Row>
        );
    }
}

export default HistoryRow;