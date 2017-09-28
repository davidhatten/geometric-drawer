import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import PaletteHeader from './PaletteHeader';
import CircleConfig from './CircleConfig';
import SquareConfig from './SquareConfig';
import FlowerOfLifeConfig from './FlowerOfLifeConfig';
import { CIRCLE_CONFIG, SQUARE_CONFIG, FOL_CONFIG, FOL_NAME, CIRCLE_NAME, SQUARE_NAME } from './../shapeConstants';

import { selectShape } from '../actions/selectShape';

const Panel = Collapse.Panel;

class Palette extends Component {
    constructor(props) {
        super(props);
        console.log("Palette - props", this.props);
    }
    render() {
        return (
            <Collapse accordion defaultActiveKey={this.props.selectedShape} onChange={this.props.changeCurrentShape}>
                <Panel key={FOL_CONFIG} header=<PaletteHeader name={FOL_NAME} img="assets/img/fol_80x80.png"/>>
                    <FlowerOfLifeConfig/>
                </Panel>
                <Panel key={CIRCLE_CONFIG} header=<PaletteHeader name={CIRCLE_NAME} img="assets/img/circle.png"/>>
                    <CircleConfig/>
                </Panel>
                <Panel key={SQUARE_CONFIG} header=<PaletteHeader name={SQUARE_NAME} img="assets/img/square.png"/>>
                    <SquareConfig
                        height="100"
                        width="100" />
                </Panel>
            </Collapse>
        );
    }
}

const mapStateToProps = state => ({
    selectedShape: state.selectShape.selectedShape,
});

const mapDispatchToProps = dispatch => ({
    changeCurrentShape: (key) => {dispatch(selectShape(key));},
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
