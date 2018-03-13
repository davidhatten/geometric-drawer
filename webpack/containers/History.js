import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import HistoryRow from '../components/HistoryRow';
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import { DragTypes } from "../shapeConstants";
import { DropTarget } from 'react-dnd';
import './History.css';


const cardTarget = {
    drop() {},
};

function cardConnect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { history } = this.props;


        return this.props.connectDropTarget(
            <div  className="History">
                <List locale={{ emptyText: `No shapes drawn yet` }} itemLayout="vertical" dataSource={history} renderItem={item => (
                    <div onMouseEnter={this.props.highlightShape(item)} onMouseLeave={this.props.unhighlightShape(item)}>
                        <HistoryRow shapeId={item} />
                    </div>
                )}>
                </List>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    history: state.shapeHistory.allIds,
});

const mapDispatchToProps = dispatch => ({
    highlightShape: id => () => {dispatch(changeHistoryStyle(id, `stroke`, `red`));},
    unhighlightShape: id => () => {dispatch(changeHistoryStyle(id, `stroke`, `black`));},
});

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget(DragTypes.HISTORY_CARD, cardTarget, cardConnect)(History));