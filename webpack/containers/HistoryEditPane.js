import React, { Component } from 'react';
import { Button, Popover } from "antd";
import { connect } from "react-redux";
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import { beginEditing, stopEditing } from "../actions/changeEditPopover";
import LineWidth from "../components/controls/LineWidth";
import XPosition from "../components/controls/XPosition";
import YPosition from "../components/controls/YPosition";
import FillShape from "../components/controls/FillShape";
import './HistoryEditPane.scss';

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
        const LineWidthOption = optionsConnect(LineWidth);
        const XPosOption = optionsConnect(XPosition);
        const YPosOption = optionsConnect(YPosition);
        const FillShapeOption = optionsConnect(FillShape);
        const ContentForm = () => (
            <div>
                <ShapeHistoryOptions />
                <LineWidthOption />
                <XPosOption />
                <YPosOption />
                <FillShapeOption />
            </div>
        );
        return (
            <Popover onVisibleChange={this.openOrClose} overlayStyle={{ width: `28%` }} placement={`bottom`} title={shape.name} content={<ContentForm />} trigger={`click`}>
                <span title={`Edit`}><Button size={`large`} icon={`edit`} /></span>
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