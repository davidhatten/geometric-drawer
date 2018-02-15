import AbstractHistory from "./AbstractHistory.js";
import Circle from "../containers/shapes/Circle";
import CircleForm from "../components/forms/CircleForm";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import {lineWidthDispatch, lineWidthState} from "../shapeConstants";

export default class CircleHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return Circle;
    }

    form() {
        return CircleForm;
    }

    stateToPropsMap(state) {
        return {
            radius: state.shapeProps.byId[this.id].radius,
            lineWidth: lineWidthState(state, this.id),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateRadius: (value) => {dispatch(changeHistoryProp(this.id, `radius`, parseInt(value) ));},
            updateLineWidth: lineWidthDispatch(dispatch, this.id),
        };
    }
}
