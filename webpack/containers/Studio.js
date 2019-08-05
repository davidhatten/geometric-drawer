import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Palette from './Palette';
import Canvas from './Canvas';
import History from './History';
import { saveSvgAsPng, svgAsDataUri } from 'save-svg-as-png';
import { connect } from "react-redux";
import { clearShapeHistory } from "../actions/removeShapes";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const styles = {
    title: {
        paddingTop: `20px`,
        paddingBottom: `10px`,
    },
};

class Studio extends Component {
    constructor(props) {
        super(props);
        this.state = { confirmClearOpen: false };
    }
    exportSvg = () => {
        const canvas = document.getElementById(`drawingCanvas`);
        svgAsDataUri(canvas, { backgroundColor: `transparent` }).then(uri => {
            const link = document.createElement(`a`);
            link.href = uri;
            link.download = `geometry_svg.svg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    exportCanvas = () => {
        const canvas = document.getElementById(`drawingCanvas`);
        saveSvgAsPng(canvas, `geometry.png`, { backgroundColor: `transparent` });
    }
    closeConfirm = () => {
        this.setState({ confirmClearOpen: false });
    }
    openClearHistory = () => {
        this.setState({ confirmClearOpen: true });
    }
    confirmClearHistory = () => {
        this.props.clearHistory();
        this.setState({ confirmClearOpen: false });
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
                        <Grid item container spacing={2}>
                            <Palette/>
                        </Grid>
                        <Grid item>
                            <Button color="primary" onClick={this.exportCanvas}>Export As PNG</Button>
                        </Grid>
                        <Grid item>
                            <Button color="primary" onClick={this.exportSvg}>Export As SVG</Button>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" onClick={this.openClearHistory}>Clear Canvas</Button>
                        </Grid>
                        <Grid item>
                            <Typography align="center" variant="subtitle1">Version: 1.6.4</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Dialog open={this.state.confirmClearOpen} onClose={this.closeConfirm}>
                    <DialogTitle>Do you want to delete everything on the canvas?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Every shape on the canvas will be deleted. This cannot be undone. Are you sure?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.confirmClearHistory} color="primary">
                            Yes
                        </Button>
                        <Button onClick={this.closeConfirm} color="primary" autoFocus>
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
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
