import { connect } from "react-redux";
import { changeClawPetalConfig } from "../../actions/changeClawPetalConfig";
import ClawPetalForm from "../../components/forms/ClawPetalForm";
import { basicRingDispatch, basicRingProps, CLAW_PETAL_CONFIG } from "../../shapeConstants";

const mapStateToProps = state => (basicRingProps(state, CLAW_PETAL_CONFIG));

const mapDispatchToProps = dispatch => (basicRingDispatch(dispatch, changeClawPetalConfig));

export default connect(mapStateToProps, mapDispatchToProps)(ClawPetalForm);