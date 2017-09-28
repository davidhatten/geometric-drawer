import React, { Component } from 'react';
import { Form, InputNumber, Row, Col, Slider } from 'antd';
import { connect } from 'react-redux';
import { changeGeneralConfig } from '../actions/changeGeneralConfig';

class GeneralOptionsConfig extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Form> 
                <Row>
                    <label>Line Width:</label>
                </Row>
                <Row type="flex" justify="space=around" align="middle">
                    <Col span={12}>
                        <Slider min={1} max={1000} value={this.props.lineWidth} onChange={this.props.updateLineWidth}/>
                    </Col>
                    <Col span={1}>
                        <InputNumber size="small" min={0} max={1000} value={this.props.lineWidth} onChange={this.props.updateLineWidth}/>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    lineWidth: state.generalConfig.strokeWidth,
});

const mapDispatchToProps = dispatch => ({
    updateLineWidth: (event) => {dispatch(changeGeneralConfig({strokeWidth: parseInt(event)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralOptionsConfig);