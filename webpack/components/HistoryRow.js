import React, { Component } from 'react';
import { Row, Col, Form, Input, Popover, Button } from 'antd';
import { connect } from "react-redux";
import FlowerOfLifeForm from "./FlowerOfLifeForm";

class HistoryRow extends Component {
    constructor(props) {
        super(props);
        console.log("HistoryRow constructor", props);
    }
    render() {
        const Content = connect(this.props.shape.mapStateToProps, this.props.shape.mapDispatchToProps)(this.props.shape.formTag);
        return (
            <Row type="flex" justify="space-around">
                <Col>
                    {this.props.shape.name}
                </Col>
                <Col>
                    <Popover overlayStyle={{width: `25%`}} placement={`bottom`} title={this.props.name} content={<Content />} trigger={`focus`}>
                        <Button>Edit</Button>
                    </Popover>
                </Col>
            </Row>
        );
    }
}

export default HistoryRow;