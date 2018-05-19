import {historyPositionDispatch, lineWidthDispatch, lineWidthState, positionProps} from "../shapeConstants";
import { changeHistoryStyle } from "../actions/changeHistoryProp";

export default class AbstractHistory {
    constructor (id){
        this.id = id;

        if (new.target === AbstractHistory) {
            throw new TypeError(`Cannot create an abstract history directly.`);
        }

        if (this.shape === undefined) {
            throw new TypeError(`Must define 'shape' parameter with a name constant`);
        }

        if (this.form === undefined) {
            throw new TypeError(`Must define 'form' parameter with a shape form`);
        }

        if (this.stateToPropsMap === undefined) {
            throw new TypeError(`Must define 'stateToPropsMap' function that accepts a state and returns a stateToProps map`);
        }

        if (this.dispatchToPropsMap === undefined) {
            throw new TypeError(`Must define 'dispatchToPropsMap' function that accepts a dispatch and returns a dispatchToProps map`);
        }
    }

    stateToProps() {
        /*
        https://github.com/davidhatten/geometric-drawer/issues/62

        The try/catch is here to fix the above bug. If you redesign the Edit pane, investigate changing this
        Basically what happens is that Popovers generated by antd somehow get left around and mapped to stale items
        For some reason, when these stale Popovers have more than one item in the History, it fixes itself
        But when there's only one item left in the History, the whole page crashes on hover or selected shape change
         */
        return state => {
            try {
                return this.stateToPropsMap(state);
            } catch (error) {
                return {};
            }
        };

    }

    dispatchToProps() {
        return dispatch => this.dispatchToPropsMap(dispatch);
    }

    universalProps(state) {
        return {
            lineWidth: lineWidthState(state, this.id),
            fillShape: state.shapeStyle.byId[this.id].fill !== `none`,
            ...positionProps(state.shapeProps.byId, this.id),
        };
    }

    universalDispatch(dispatch) {
        return {
            ...historyPositionDispatch(dispatch, this.id),
            updateLineWidth: lineWidthDispatch(dispatch, this.id),
            toggleFillShape: (checked) => (dispatch(changeHistoryStyle(this.id, `fill`, checked ? `white` : `none`))),
        };
    }
}