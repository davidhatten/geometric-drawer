import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Palette from './Palette';
import Canvas from './Canvas';
import History from './History';
import { saveSvgAsPng } from 'save-svg-as-png';
import { connect } from "react-redux";
import { clearShapeHistory } from "../actions/removeShapes";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    title: {
        paddingTop: `20px`,
        paddingBottom: `10px`,
    },
};

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
                <Typography variant="h4" align="center" className={this.props.classes.title}>
                    Select a shape and click the canvas!
                </Typography>
                <Grid container spacing={1} justify="flex-start">
                    <Grid item lg={3}>
                        <Typography variant="h5" align="center">History</Typography>
                        <br/>
                        <History/>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h5" align="center">Canvas</Typography>
                        <br/>
                        <Canvas/>
                    </Grid>
                    <Grid container item lg={3} direction="column" alignItems="center">
                        <Grid item>
                            <Typography variant="h5" align="center">Shapes</Typography>
                            <br/>
                        </Grid>
                        <Grid item>
                            <Palette/>
                        </Grid>
                        <Grid item>
                            <Button color="primary" onClick={this.exportCanvas}>Export Canvas</Button>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" onClick={this.confirmClearHistory}>Clear Canvas</Button>
                        </Grid>
                        <Grid item>
                            <Typography align="center" variant="subtitle1">Version: 1.6.3</Typography>
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


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Studio));
