import React, { Component } from 'react';
import { Row, Col, Collapse, Form, Input } from 'antd';
import CircleConfig from './CircleConfig';
import SquareConfig from './SquareConfig';
import { CIRCLE_NAME, SQUARE_NAME } from './../shapeConstants';
const Panel = Collapse.Panel;
const FormItem = Form.Item;

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    updateCurrentShapeProps = (key, shapeProps) => {
        console.log("Palette - updateCurrentShapeProps " + key, shapeProps);
        this.props.onShapeChange({
                                type: key,
                                shapeProps: shapeProps,
                            }
                        );

        this.setState({
            [key]: shapeProps,
        });
    }
    changeCurrentShape = (key) => {
        console.log("Palette - changeCurrentShape " + key, this.state[key]);
        this.props.onShapeChange({
            type: key,
            shapeProps: this.state[key],
        })
    }
    render() {
        return (
            <Collapse accordion defaultActiveKey={CIRCLE_NAME} onChange={this.changeCurrentShape}>
                <Panel header="Circle" key={CIRCLE_NAME}>
                    <CircleConfig 
                        onConfigUpdate={this.updateCurrentShapeProps}/>
                </Panel>
                <Panel header="Square" key={SQUARE_NAME}>
                    <SquareConfig
                        onConfigUpdate={this.updateCurrentShapeProps}
                        height="100"
                        width="100" />
                </Panel>
            </Collapse>
        );
    }
}

export default Palette;
