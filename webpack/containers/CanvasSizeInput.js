import { connect } from 'react-redux';
import { changeGeneralConfig } from "../actions/changeGeneralConfig";
import CanvasSize from "../components/controls/CanvasSize";

const mapStateToProps = state => ({
    canvasHeight: state.generalConfig.canvasHeight,
    canvasWidth: state.generalConfig.canvasWidth,
});

const mapDispatchToProps = dispatch => ({
    updateCanvasHeight: (value) => {dispatch(changeGeneralConfig({ canvasHeight: value }));},
    updateCanvasWidth: (value) => {dispatch(changeGeneralConfig({ canvasWidth: value }));},
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasSize);