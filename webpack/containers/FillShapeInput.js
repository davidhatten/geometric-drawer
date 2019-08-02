import { connect } from 'react-redux';
import FillShape from '../components/controls/FillShape';
import { changeGeneralConfig } from "../actions/changeGeneralConfig";

const mapStateToProps = state => ({
    fillShape: state.generalConfig.fillShape,
});

const mapDispatchToProps = dispatch => ({
    toggleFillShape: (event) => {dispatch(changeGeneralConfig({fillShape: checked}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(FillShape);