import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Palette from './Palette';
import Canvas from './Canvas';
import History from './History';
import ReactCursorPosition from 'react-cursor-position';
import { saveSvgAsPng } from 'save-svg-as-png';
import { connect } from "react-redux";
import { clearShapeHistory } from "../actions/removeShapes";
import GeneralOptionsConfig from "../components/GeneralOptionsConfig";

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
            <React.Fragment>
                <div align="center" style={{ paddingTop: `20px`, paddingBottom: `10px` }}>
                    <h1>
                        Select a shape and click the canvas!
                    </h1>
                </div>
                <Grid container spacing={16} className={`studio`} direction={`row`} justify={`center`} alignItems={`flex-start`}>
                    <Grid item lg={3}>
                        <h2 align="center">History</h2>
                        <br/>
                        <History/>
                    </Grid>
                    <Grid item lg={5}>
                        <h2 align="center">Canvas</h2>
                        <br/>
                        <ReactCursorPosition>
                            <Canvas/>
                        </ReactCursorPosition>
                    </Grid>
                    <Grid item lg={3}>
                        <Grid container direction={`column`} justify={`center`} alignItems={`center`}>
                            <Grid item>
                                <h2 align="center">Shapes</h2>
                                <br/>
                            </Grid>
                            <Grid item>
                                <Palette/>
                            </Grid>

                            <Grid item>
                                <Button color="primary" onClick={this.exportCanvas}>Export Canvas</Button>
                                <Button color="secondary" onClick={this.confirmClearHistory}>Clear Canvas</Button>
                            </Grid>
                            <Grid item>
                                <h4>Version: 1.6.3</h4>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    clearHistory: () => {dispatch(clearShapeHistory());},
});


export default connect(mapStateToProps, mapDispatchToProps)(Studio);
