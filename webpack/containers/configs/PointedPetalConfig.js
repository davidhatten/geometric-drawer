import { connect } from "react-redux";
import { changeInnerRadius, changeOuterRadius, POINTED_PETAL_CONFIG } from "../../shapeConstants";
import {changePointedPetalConfig} from "../../actions/changePointedPetalConfig";
import PointedPetalForm from "../../components/forms/PointedPetalForm";

const mapStateToProps = state => ({
    innerRadius: state[POINTED_PETAL_CONFIG].innerRadius,
    outerRadius: state[POINTED_PETAL_CONFIG].outerRadius,
    xControl: state[POINTED_PETAL_CONFIG].xControl,
    yControl: state[POINTED_PETAL_CONFIG].yControl,
    axes: state[POINTED_PETAL_CONFIG].axes,
    innerGap: state[POINTED_PETAL_CONFIG].innerGap,
    outerGap: state[POINTED_PETAL_CONFIG].outerGap,
    rotation: state[POINTED_PETAL_CONFIG].rotation,
});

const mapDispatchToProps = dispatch => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(changePointedPetalConfig, parseInt(value)));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(changePointedPetalConfig, parseInt(value)));},
    updateXControl: value => {dispatch(changePointedPetalConfig(`xControl`, parseInt(value)));},
    updateYControl: value => {dispatch(changePointedPetalConfig(`yControl`, parseInt(value)));},
    updateAxes: value => {dispatch(changePointedPetalConfig(`axes`, parseInt(value)));},
    updateInnerGap: value => {dispatch(changePointedPetalConfig(`innerGap`, parseInt(value)));},
    updateOuterGap: value => {dispatch(changePointedPetalConfig(`outerGap`, parseInt(value)));},
    updateRotation: value => {dispatch(changePointedPetalConfig(`rotation`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(PointedPetalForm);