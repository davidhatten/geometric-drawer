import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import {lineWidthDispatch, lineWidthState} from "../shapeConstants";
import Square from "../containers/shapes/Square";
import SquareForm from "../components/forms/SquareForm";

export default class SquareHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return Square;
    }

    form() {
        return SquareForm;
    }

    stateToPropsMap(state) {
        return {
            length: state.shapeProps.byId[this.id].length,
            rotation: state.shapeProps.byId[this.id].rotation,
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateLength: (value) => {dispatch(changeHistoryProp(this.id, `length`, parseInt(value)));},
            updateRotation: (value) => {dispatch(changeHistoryProp(this.id, `rotation`, parseInt(value)));},
            ...this.universalDispatch(dispatch),
        };
    }
}
