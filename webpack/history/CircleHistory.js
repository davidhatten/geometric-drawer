import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";

export default class CircleHistory extends AbstractHistory {
    constructor(id) {
        super(id);
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
