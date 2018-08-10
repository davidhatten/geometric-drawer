import AbstractHistory from "./AbstractHistory.js";
import Circle from "../containers/shapes/Circle";
import CircleForm from "../components/forms/CircleForm";
import {changeHistoryProp} from "../actions/changeHistoryProp";

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
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateRadius: (value) => {dispatch(changeHistoryProp(this.id, `radius`, parseInt(value) ));},
            ...this.universalDispatch(dispatch),
        };
    }
}
