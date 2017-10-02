import React, { Component } from 'react';
import { Button, Popover } from "antd";
import { connect } from "react-redux";

class HistoryEditPane extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(`History Edit Pane - render()`);
        const shape = this.props.historyData[this.props.shapeId];
        const Content = connect(shape.mapStateToProps, shape.mapDispatchToProps)(shape.formTag);
        return (
            <Popover overlayStyle={{width: `25%`}} placement={`bottom`} title={shape.name} content={<Content />} trigger={`click`}>
                <Button>Edit</Button>
            </Popover>
        );
    }
}


const mapStateToProps = state => ({
    historyData: state.shapeHistory.byId,
});

export default connect(mapStateToProps)(HistoryEditPane);