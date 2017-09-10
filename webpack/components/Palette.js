import React, { Component } from 'react';
import { Row, Col, Collapse, Form, Input } from 'antd';
import CircleConfig from './CircleConfig';
import SquareConfig from './SquareConfig';
const Panel = Collapse.Panel;
const FormItem = Form.Item;

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: "circle"};
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
        console.log("State is ", this.state);
        this.props.onShapeChange({
            type: key,
            shapeProps: this.state[key],
        })
    }
    render() {
        return (
            <Collapse accordion defaultActiveKey="circle" onChange={this.changeCurrentShape}>
                <Panel header="Circle" key="circle">
                    <CircleConfig 
                        onConfigUpdate={this.updateCurrentShapeProps}/>
                </Panel>
                <Panel header="Square" key="rect">
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
