import AbstractHistory from "./AbstractHistory.js";
import { basicRingProps } from "../shapeConstants";

export default class ClawPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    stateToPropsMap(state) {
        return ({
            ...basicRingProps(state.shapeProps.byId, this.id),
            ...this.universalProps(state),
        });
    }

    dispatchToPropsMap(dispatch) {
        return {
            ...this.basicHistoryDispatch(dispatch, this.id),
            ...this.universalDispatch(dispatch),
        };
    }
}
