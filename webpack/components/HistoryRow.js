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
        const mapStateToProps = state => ({
            iterations: state.shapeHistory[this.props.shape.id].props.iterations,
            radius: state.shapeHistory[this.props.shape.id].props.radius,
        });
        const mapDispatchtoProps = dispatch => ({
            updateIterations: (value) => {},
            updateRadius: (value) => {},
        });
        const Content = connect(mapStateToProps, mapDispatchtoProps)(FlowerOfLifeForm);
        return (
            <Row type="flex" justify="space-around">
                <Col>
                    {this.props.shape.name}
                </Col>
                <Col>
                    <Popover overlayStyle={{width: `15%`}} placement={`bottom`} title={this.props.name} content={<Content />} trigger={`click`}>
                        <Button>Edit</Button>
                    </Popover>
                </Col>
            </Row>
        );
    }
}

export default HistoryRow;