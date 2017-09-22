import { WRITE_CONSOLE } from '../action/consoleWrites';

const initialState = {
    message: 'initial message',
}

const consoleWrites = (state = initialState, action) => {
    switch (action.type) {
    case WRITE_CONSOLE:
        console.log("Got a thing about writing to a console");
        console.log("My state is ", state);
        let newstate = {message: "lolololololol"};
        console.log("my newstate is ", newstate)
        return newstate;
    default:
        return state;
    }
};

export default consoleWrites;
