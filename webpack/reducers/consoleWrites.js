import { WRITE_CONSOLE } from '../actions/consoleWrites';

const initialState = {
    message: 'initial message',
}

const consoleWrites = (state = initialState, action) => {
    switch (action.type) {
    case WRITE_CONSOLE:
        console.log("Got a thing about writing to a console");
        console.log("My state is ", state);
        console.log("My action is ", action);
        let newstate = {message: action.payload};
        console.log("my newstate is ", newstate)
        return newstate;
    default:
        return state;
    }
};

export default consoleWrites;
