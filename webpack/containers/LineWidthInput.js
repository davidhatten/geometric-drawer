import {connect} from "react-redux";
import SliderInput from "../components/SliderInput";
import {changeGeneralConfig} from "../actions/changeGeneralConfig";

const mapStateToProps = state => ({
    lineWidth: state.generalConfig.strokeWidth,
});

const mapDispatchToProps = dispatch => ({
    updateLineWidth: (event) => {dispatch(changeGeneralConfig({strokeWidth: parseInt(event)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderInput);