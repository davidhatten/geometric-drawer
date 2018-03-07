import {historyPositionDispatch, lineWidthDispatch, lineWidthState, positionProps} from "../shapeConstants";

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
        return state => this.stateToPropsMap(state);
    }

    dispatchToProps() {
        return dispatch => this.dispatchToPropsMap(dispatch);
    }

    universalProps(state) {
        return {
            lineWidth: lineWidthState(state, this.id),
            ...positionProps(state.shapeProps.byId, this.id),
        };
    }

    universalDispatch(dispatch) {
        return {
            ...historyPositionDispatch(dispatch, this.id),
            updateLineWidth: lineWidthDispatch(dispatch, this.id),
        };
    }
}