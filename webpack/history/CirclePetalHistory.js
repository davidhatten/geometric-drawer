import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";

export default class CirclePetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    stateToPropsMap(state) {
        return {
            ringRadius: state.shapeProps.byId[this.id].ringRadius,
            petalRadius: state.shapeProps.byId[this.id].petalRadius,
            rotation: state.shapeProps.byId[this.id].rotation,
            axes: state.shapeProps.byId[this.id].axes,
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateRingRadius : value => {dispatch(changeHistoryProp(this.id, `ringRadius`, parseInt(value)));},
            updatePetalRadius : value => {dispatch(changeHistoryProp(this.id, `petalRadius`, parseInt(value)));},
            updateRotation : value => {dispatch(changeHistoryProp(this.id, `rotation`, parseInt(value)));},
            updateAxes : value => {dispatch(changeHistoryProp(this.id, `axes`, parseInt(value)));},
            ...this.universalDispatch(dispatch),
        };
    }
}
