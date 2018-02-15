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
        const id = this.id;
        return {
            radius: state.shapeProps.byId[id].radius,
            lineWidth: lineWidthState(state, this.id),
        };
    }

    dispatchToPropsMap(dispatch) {
        const id = this.id;
        return {
            updateRadius: (value) => {dispatch(changeHistoryProp(id, `radius`, parseInt(value) ));},
            updateLineWidth: lineWidthDispatch(dispatch, id),
        };
    }
}
