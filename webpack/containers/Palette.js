import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import PaletteHeader from '../components/PaletteHeader';
import CircleConfig from './CircleConfig';
import SquareConfig from './SquareConfig';
import FlowerOfLifeConfig from './FlowerOfLifeConfig';
import { CIRCLE_CONFIG, SQUARE_CONFIG, FOL_CONFIG, FOL_NAME, CIRCLE_NAME, SQUARE_NAME } from '../shapeConstants';

import { selectShape } from '../actions/selectShape';

const Panel = Collapse.Panel;

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Collapse accordion defaultActiveKey={this.props.selectedShape} onChange={this.props.changeCurrentShape}>
                <Panel key={FOL_CONFIG} header={<PaletteHeader
                    name={FOL_NAME}
                    img="assets/img/fol_80x80.png"
                    description="A circle drawn, centered where you click, followed by layers of intersecting circles to form a flower."/>}>
                    <FlowerOfLifeConfig/>
                </Panel>
                <Panel key={CIRCLE_CONFIG} header={<PaletteHeader
                    name={CIRCLE_NAME}
                    img="assets/img/circle.png"
                    description="A simple circle. Centered on your click."/>}>
                    <CircleConfig/>
                </Panel>
                <Panel key={SQUARE_CONFIG} header={<PaletteHeader
                    name={SQUARE_NAME}
                    img="assets/img/square.png"
                    description="A simple square. Centered on your click."/>}>
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
