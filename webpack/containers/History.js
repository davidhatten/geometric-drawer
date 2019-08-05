import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryRow from '../components/HistoryRow';
import { changeHistoryStyle } from "../actions/changeHistoryProp";
import { DragTypes } from "../shapeConstants";
import { DropTarget } from 'react-dnd';
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
    historyPaper: {
        borderRadius: `8px`,
    },
};

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
        let listItems = [];
        if ([...history].length > 0) {
            listItems = [...history].reverse().map(item => (
                <div onMouseEnter={this.props.highlightShape(item)} onMouseLeave={this.props.unhighlightShape(item)}>
                    <HistoryRow shapeId={item} />
                </div>
            ));
        } else {
            listItems = [<ListItem><ListItemText primary={`No Shapes Drawn`} /></ListItem>];
        }

        return this.props.connectDropTarget(
            <div>
                <Paper className={this.props.classes.historyPaper} elevation={1}>
                    <List dense={true}>
                        {listItems}
                    </List>
                </Paper>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DropTarget(DragTypes.HISTORY_CARD, cardTarget, cardConnect)(History)));