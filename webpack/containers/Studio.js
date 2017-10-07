import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import Palette from './Palette';
import Canvas from './Canvas';
import History from './History';
import GeneralOptions from '../components/GeneralOptionsConfig';
import ReactCursorPosition from 'react-cursor-position';
import { saveSvgAsPng } from 'save-svg-as-png';
import { connect } from "react-redux";
import { clearShapeHistory } from "../actions/removeShapes";

const confirm = Modal.confirm;

class Studio extends Component {
    constructor(props) {
        super(props);
    }
    exportCanvas = () => {
        const canvas = document.getElementById(`drawingCanvas`);
        saveSvgAsPng(canvas, `geometry.png`);
    }
    confirmClearHistory = () => {
        const self = this;
        confirm({
            title: `Do you want to delete everything on the canvas?`,
            content: `Every shape on the canvas will be deleted. This cannot be undone. Are you sure?`,
            onOk() {
                self.props.clearHistory();
            },
            onCancel() {},
            okText: `Yes`,
        });
    }
    render() {
        return (
            <div>
                <Row type="flex" justify="space-around">
                    <Col lg={6} md={6} sm={6}>
                        <h2>Drawing History</h2>
                        <br />
                        <History />
                    </Col>
                    <Col lg={10} md={10} sm={10}>
                        <h2>Drawing Canvas</h2>
                        <br />
                        <ReactCursorPosition>
                            <Canvas />
                        </ReactCursorPosition>
                        <div>
                            <h4>Version: 1.1.0</h4>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <Row>
                            <h2>Drawing Options</h2>
                            <br />
                        </Row>
                        <Row>
                            <Palette />
                        </Row>
                        <Row>
                            <GeneralOptions />
                        </Row>
                        <Row type="flex" justify="space-around">
                            <Button type="primary" onClick={this.exportCanvas}>Export Canvas</Button>
                            <Button type="danger" onClick={this.confirmClearHistory}>Clear Canvas</Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    clearHistory: () => {dispatch(clearShapeHistory());},
});


export default connect((state) => {}, mapDispatchToProps)(Studio);
