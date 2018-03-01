import RoundedPetalForm from "../../components/forms/RoundedPetalForm";
import { connect } from "react-redux";
import { changeInnerRadius, changeOuterRadius, ROUNDED_PETAL_CONFIG } from "../../shapeConstants";
import { changeRoundedPetalConfig } from "../../actions/changeRoundedPetalConfig";

const mapStateToProps = state => ({
    innerRadius: state[ROUNDED_PETAL_CONFIG].innerRadius,
    outerRadius: state[ROUNDED_PETAL_CONFIG].outerRadius,
    xControl: state[ROUNDED_PETAL_CONFIG].xControl,
    yControl: state[ROUNDED_PETAL_CONFIG].yControl,
    axes: state[ROUNDED_PETAL_CONFIG].axes,
    innerGap: state[ROUNDED_PETAL_CONFIG].innerGap,
    outerGap: state[ROUNDED_PETAL_CONFIG].outerGap,
    rotation: state[ROUNDED_PETAL_CONFIG].rotation,
});

const mapDispatchToProps = dispatch => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(changeRoundedPetalConfig, parseInt(value)));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(changeRoundedPetalConfig, parseInt(value)));},
    updateXControl: value => {dispatch(changeRoundedPetalConfig(`xControl`, parseInt(value)));},
    updateYControl: value => {dispatch(changeRoundedPetalConfig(`yControl`, parseInt(value)));},
    updateAxes: value => {dispatch(changeRoundedPetalConfig(`axes`, parseInt(value)));},
    updateInnerGap: value => {dispatch(changeRoundedPetalConfig(`innerGap`, parseInt(value)));},
    updateOuterGap: value => {dispatch(changeRoundedPetalConfig(`outerGap`, parseInt(value)));},
    updateRotation: value => {dispatch(changeRoundedPetalConfig(`rotation`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundedPetalForm);