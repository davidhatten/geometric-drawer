import React, { Fragment, Component } from 'react';
import Popover from "@material-ui/core/Popover";
import { connect } from "react-redux";
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import { beginEditing, stopEditing } from "../actions/changeEditPopover";
import LineWidth from "../components/controls/LineWidth";
import XPosition from "../components/controls/XPosition";
import YPosition from "../components/controls/YPosition";
import FillShape from "../components/controls/FillShape";
import './HistoryEditPane.scss';
import EditIcon from "@material-ui/icons/EditRounded";
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
    editButton: {
        marginLeft: 15,
        marginRight: 15,
    },
    paper: {
        width: 300,
        padding: 8,
    },
};

class HistoryEditPane extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, anchorEl: null };
    }
    openPopup = event => {
        this.props.openPopover(this.props.shapeId);
        this.setState({ open: true, anchorEl: event.currentTarget });
    }
    closePopup = () => {
        if (this.props.currentlyEditing === this.props.shapeId) {
            this.props.closePopover(this.props.shapeId);
            this.setState({ open: false, anchorEl: null });
        }
    }
    render() {
        let shapeId = this.props.shapeId;
        const shape = this.props.historyData[shapeId];
        const optionsConnect = connect(shape.mapStateToProps, shape.mapDispatchToProps);
        const ShapeHistoryOptions = optionsConnect(shape.formTag);
        const LineWidthOption = optionsConnect(LineWidth);
        const XPosOption = optionsConnect(XPosition);
        const YPosOption = optionsConnect(YPosition);
        const FillShapeOption = optionsConnect(FillShape);
        const ContentForm = () => (
            <Fragment>
                <Grid container direction='column'>
                    <ShapeHistoryOptions/>
                    <LineWidthOption/>
                    <XPosOption/>
                    <YPosOption/>
                    <FillShapeOption/>
                </Grid>
            </Fragment>
        );
        return (
            <Fragment>
                <IconButton className={this.props.classes.editButton} onClick={this.openPopup}>
                    <EditIcon />
                </IconButton>
                <Popover className={this.props.classes.popover}
                    classes={{ paper: this.props.classes.paper }}
                    open={this.state.open}
                    onClose={this.closePopup}
                    anchorOrigin={{ vertical: `bottom`, horizontal: `center` }}
                    anchorEl={this.state.anchorEl}>
                    <ContentForm />
                </Popover>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
    currentlyEditing: state.currentlyEditing,
});

// This feels like a weird antipattern
const mapDispatchToProps = dispatch => ({
    openPopover: id => {
        dispatch(changeHistoryStyle(id, `stroke`, `red`));
        dispatch(beginEditing(id));
    },
    closePopover: id => {
        dispatch(stopEditing(id));
        dispatch(changeHistoryStyle(id, `stroke`, `black`));
    },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HistoryEditPane));