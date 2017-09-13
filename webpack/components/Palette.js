import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import CircleConfig from './CircleConfig';
import SquareConfig from './SquareConfig';
import FlowerOfLifeConfig from './FlowerOfLifeConfig';
import { CIRCLE_NAME, SQUARE_NAME, FOL_NAME } from './../shapeConstants';
const Panel = Collapse.Panel;

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    initializeShapeProps = (key, shapeProps) => {
        console.log(`Palette - initializeShapeProps ${key}`, shapeProps);

        this.props.onShapeChange({
            type: key,
            location: shapeProps,
        });

        this.setState({
            [key]: shapeProps,
        });
    }
    changeCurrentShape = (key) => {
        console.log(`Palette - changeCurrentShape ${key}`, this.state[key]);

        this.props.onShapeChange({
            type: key,
            location: this.state[key],
        });
    }
    render() {
        return (
            <Collapse accordion defaultActiveKey={FOL_NAME} onChange={this.changeCurrentShape}>
                <Panel header="Flower of Life" key={FOL_NAME}>
                    <FlowerOfLifeConfig
                        initializeConfig={this.initializeShapeProps}/>
                </Panel>
                <Panel header="Circle" key={CIRCLE_NAME}>
                    <CircleConfig
                        initializeConfig={this.initializeShapeProps}/>
                </Panel>
                <Panel header="Square" key={SQUARE_NAME}>
                    <SquareConfig
                        initializeConfig={this.initializeShapeProps}
                        height="100"
                        width="100" />
                </Panel>
            </Collapse>
        );
    }
}

Palette.propTypes = {
    onShapeChange: PropTypes.func.isRequired,
};

export default Palette;
