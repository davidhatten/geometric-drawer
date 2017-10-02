import React, { Component } from 'react';
import { Button, Popover } from "antd";
import { connect } from "react-redux";
import { changeHistoryStyle } from "../actions/changeHistoryProp";

class HistoryEditPane extends Component {
    constructor(props) {
        super(props);
    }
    mouseEnter = () => {
        console.log(`HistoryEditPane - mouseEnter`);
    }
    openOrClose = (val) => {
        console.log(`HistoryEditPane - openOrClose`, val);
        val ? this.props.highlightShape(this.props.shapeId) : this.props.unhighlightShape(this.props.shapeId);
    }
    render() {
        console.log(`History Edit Pane - render()`);
        let shapeId = this.props.shapeId;
        const shape = this.props.historyData[shapeId];
        const Content = connect(shape.mapStateToProps, shape.mapDispatchToProps)(shape.formTag);
        return (
            <Popover onVisibleChange={this.openOrClose} overlayStyle={{ width: `25%` }} placement={`bottom`} title={shape.name} content={<Content />} trigger={`click`}>
                <Button>Edit</Button>
            </Popover>
        );
    }
}


const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
});


const mapDispatchToProps = dispatch => ({
    highlightShape: id => {dispatch(changeHistoryStyle(id, `stroke`, `red`));},
    unhighlightShape: id => {dispatch(changeHistoryStyle(id, `stroke`, `black`));},
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryEditPane);