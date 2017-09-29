import { FOL_CONFIG } from '../shapeConstants';
import { connect } from 'react-redux';
import { changeFOLConfig } from '../actions/changeFOLConfig';
import FlowerOfLifeForm from "../components/FlowerOfLifeForm";

const mapStateToProps = state => ({
    iterations: state.shapeConfig[FOL_CONFIG].iterations,
    radius: state.shapeConfig[FOL_CONFIG].radius,
});

const mapDispatchToProps = dispatch => ({
    updateRadius: (event) => {dispatch(changeFOLConfig({radius: parseInt(event.target.value)}));},
});

export default connect(mapStateToProps, mapDispatchToProps)(FlowerOfLifeForm);
