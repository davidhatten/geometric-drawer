import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import HistoryRow from '../components/HistoryRow';
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import { DragTypes } from "../shapeConstants";
import { DropTarget } from 'react-dnd';
import styles from './History.scss';


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
        console.log(styles);
        return this.props.connectDropTarget(
            <div className={styles.history}>
                <List style={{ padding: 0, margin: 0 }} size="small" locale={{ emptyText: `No shapes drawn yet` }} itemLayout="vertical" dataSource={[...history].reverse()} renderItem={item => (
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