import React, { Component } from 'react';
import { Button, Popover } from "antd";
import { connect } from "react-redux";
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import { beginEditing, stopEditing } from "../actions/changeEditPopover";
import HistoryLineWidth from "../components/controls/HistoryLineWidth";

class HistoryEditPane extends Component {
    constructor(props) {
        super(props);
    }
    openOrClose = (val) => {
        val ? this.props.openPopover(this.props.shapeId) : this.props.closePopover(this.props.shapeId);
    }
    render() {
        let shapeId = this.props.shapeId;
        const shape = this.props.historyData[shapeId];
        const optionsConnect = connect(shape.mapStateToProps, shape.mapDispatchToProps);
        const ShapeHistoryOptions = optionsConnect(shape.formTag);
        const LineWidthOption = optionsConnect(HistoryLineWidth);
        const ContentForm = () => (
            <div>
                <ShapeHistoryOptions />
                <LineWidthOption />
            </div>
        );
        return (
            <Popover onVisibleChange={this.openOrClose} overlayStyle={{ width: `30%` }} placement={`bottom`} title={shape.name} content={<ContentForm />} trigger={`click`}>
                <Button>Edit</Button>
            </Popover>
        );
    }
}


const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
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

export default connect(mapStateToProps, mapDispatchToProps)(HistoryEditPane);