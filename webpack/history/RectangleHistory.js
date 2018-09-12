import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";

export default class RectangleHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    stateToPropsMap(state) {
        return {
            height: state.shapeProps.byId[this.id].height,
            width: state.shapeProps.byId[this.id].width,
            rotation: state.shapeProps.byId[this.id].rotation,
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateHeight: (value) => {dispatch(changeHistoryProp(this.id, `height`, parseInt(value)));},
            updateWidth: (value) => {dispatch(changeHistoryProp(this.id, `width`, parseInt(value)));},
            updateRotation: (value) => {dispatch(changeHistoryProp(this.id, `rotation`, parseInt(value)));},
            ...this.universalDispatch(dispatch),
        };
    }
}
