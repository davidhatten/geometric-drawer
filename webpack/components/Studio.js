import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Palette from '../containers/Palette';
import Canvas from '../containers/Canvas';
import History from '../containers/History';
import GeneralOptions from './GeneralOptionsConfig';
import ReactCursorPosition from 'react-cursor-position';
import { saveSvgAsPng } from 'save-svg-as-png';
import { connect } from "react-redux";
import { clearShapeHistory } from "../actions/clearShapeHistory";

class Studio extends Component {
    constructor(props) {
        super(props);
    }
    exportCanvas = () => {
        const canvas = document.getElementById(`drawingCanvas`);
        saveSvgAsPng(canvas, `geometry.png`);
    }
    render() {
        return (
            <div>
                <Row type="flex" justify="space-around">
                    <Col lg={6} md={6} sm={6}>
                        <h2>Drawing History</h2>
                        <hr />
                        <br />
                        <History />
                    </Col>
                    <Col lg={10} md={10} sm={10}>
                        <h2>Drawing Canvas</h2>
                        <hr />
                        <br />
                        <ReactCursorPosition>
                            <Canvas />
                        </ReactCursorPosition>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <Row>
                            <h2>Drawing Options</h2>
                        </Row>
                        <Row>
                            <Palette />
                        </Row>
                        <Row>
                            <GeneralOptions />
                        </Row>
                        <Button type="primary" onClick={this.exportCanvas}>Export Canvas</Button>
                        <Button type="danger" onClick={this.props.clearHistory}>Clear Canvas</Button>
                    </Col>
                </Row>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    clearHistory: () => {dispatch(clearShapeHistory());},
});

export default connect(mapDispatchToProps)(Studio);
