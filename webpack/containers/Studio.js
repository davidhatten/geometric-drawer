import React, { Component } from 'react';
import { Row, Col, Button, Modal, Affix } from 'antd';
import Palette from './Palette';
import Canvas from './Canvas';
import History from './History';
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
        saveSvgAsPng(canvas, `geometry.png`, { backgroundColor: `transparent` });
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
                <Row type="flex" justify="center" style={{ padding: `12px` }} align="middle">
                    <Col>
                        <h1>
                            Select a style and click the canvas!
                        </h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Col lg={6} md={6} sm={6}>
                        <h2 align="center">History</h2>
                        <br />
                        <History />
                    </Col>
                    <Col lg={10} md={10} sm={10}>
                        <h2 align="center">Canvas</h2>
                        <br />
                        <Affix>
                            <ReactCursorPosition>
                                <Canvas />
                            </ReactCursorPosition>
                        </Affix>
                    </Col>
                    <Col lg={7} md={7} sm={7}>
                        <Row>
                            <h2 align="center">Options</h2>
                            <br />
                        </Row>
                        <Row>
                            <Palette />
                        </Row>

                        <Row type="flex" justify="space-around" style={{ padding: `12px` }}>
                            <Button type="primary" onClick={this.exportCanvas}>Export Canvas</Button>
                            <Button type="danger" onClick={this.confirmClearHistory}>Clear Canvas</Button>
                        </Row>
                        <Row>
                            <div>
                                <h4>Version: 1.6.3</h4>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    clearHistory: () => {dispatch(clearShapeHistory());},
});


export default connect(mapStateToProps, mapDispatchToProps)(Studio);
