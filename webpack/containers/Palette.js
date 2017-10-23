import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import PaletteHeader from '../components/PaletteHeader';
import CircleConfig from './configs/CircleConfig';
import SquareConfig from './configs/SquareConfig';
import FlowerOfLifeConfig from './configs/FlowerOfLifeConfig';
import {
    CIRCLE_CONFIG, SQUARE_CONFIG, FOL_CONFIG, FOL_NAME, CIRCLE_NAME, SQUARE_NAME,
    ROUNDED_PETAL_CONFIG, ROUNDED_PETAL_NAME, CIRCLE_PETAL_CONFIG, CIRCLE_PETAL_NAME, CURVEY_PETAL_CONFIG,
    CURVEY_PETAL_NAME,
} from '../shapeConstants';

import { selectShape } from '../actions/selectShape';
import RoundedPetalConfig from "./configs/RoundedPetalConfig";
import CirclePetalConfig from "./configs/CirclePetalConfig";
import CurveyPetalForm from "../components/forms/CurveyPetalForm";
import CurveyPetalConfig from "./configs/CurveyPetalConfig";

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
                    <SquareConfig />
                </Panel>
                <Panel key={ROUNDED_PETAL_CONFIG} header={<PaletteHeader
                    name={ROUNDED_PETAL_NAME}
                    img="assets/img/rounded_petals_80x80.png"
                    description="A ring of petals, each rounded out by gravitating towards a control point. For more info, see 'SVG Quadratic Path'"/>}>
                    <RoundedPetalConfig />
                </Panel>
                <Panel key={CURVEY_PETAL_CONFIG} header={<PaletteHeader
                    name={CURVEY_PETAL_NAME}
                    img="assets/img/curvey_petals_80x80.png"
                    description="A ring of petals, each each one rounded out by two control points. For more info, see 'SVG Bezier Curve'"/>}>
                    <CurveyPetalConfig />
                </Panel>
                <Panel key={CIRCLE_PETAL_CONFIG} header={<PaletteHeader
                    name={CIRCLE_PETAL_NAME}
                    img="assets/img/circle_petals_80x80.png"
                    description="A ring of petals, each one a small circle."/>}>
                    <CirclePetalConfig />
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
