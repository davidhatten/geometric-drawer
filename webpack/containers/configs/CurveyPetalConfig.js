import { connect } from "react-redux";
import CurveyPetalForm from "../../components/forms/CurveyPetalForm";
import { changeCurveyPetalConfig } from "../../actions/changeCurveyPetalConfig";
import { changeInnerRadius, changeOuterRadius, CURVEY_PETAL_CONFIG } from "../../shapeConstants";

const mapStateToProps = state => ({
    innerRadius: state[CURVEY_PETAL_CONFIG].innerRadius,
    outerRadius: state[CURVEY_PETAL_CONFIG].outerRadius,
    innerXControl: state[CURVEY_PETAL_CONFIG].innerXControl,
    innerYControl: state[CURVEY_PETAL_CONFIG].innerYControl,
    outerXControl: state[CURVEY_PETAL_CONFIG].outerXControl,
    outerYControl: state[CURVEY_PETAL_CONFIG].outerYControl,
    axes: state[CURVEY_PETAL_CONFIG].axes,
    innerGap: state[CURVEY_PETAL_CONFIG].innerGap,
    outerGap: state[CURVEY_PETAL_CONFIG].outerGap,
    rotation: state[CURVEY_PETAL_CONFIG].rotation,
});

const mapDispatchToProps = dispatch => ({
    updateInnerRadius: value => {dispatch(changeInnerRadius(changeCurveyPetalConfig, parseInt(value)));},
    updateOuterRadius: value => {dispatch(changeOuterRadius(changeCurveyPetalConfig, parseInt(value)));},
    updateInnerXControl: value => {dispatch(changeCurveyPetalConfig(`innerXControl`, parseInt(value)));},
    updateInnerYControl: value => {dispatch(changeCurveyPetalConfig(`innerYControl`, parseInt(value)));},
    updateOuterXControl: value => {dispatch(changeCurveyPetalConfig(`outerXControl`, parseInt(value)));},
    updateOuterYControl: value => {dispatch(changeCurveyPetalConfig(`outerYControl`, parseInt(value)));},
    updateAxes: value => {dispatch(changeCurveyPetalConfig(`axes`, parseInt(value)));},
    updateInnerGap: value => {dispatch(changeCurveyPetalConfig(`innerGap`, parseInt(value)));},
    updateOuterGap: value => {dispatch(changeCurveyPetalConfig(`outerGap`, parseInt(value)));},
    updateRotation: value => {dispatch(changeCurveyPetalConfig(`rotation`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(CurveyPetalForm);