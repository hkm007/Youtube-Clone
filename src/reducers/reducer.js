const initialState = []

const reducer = (state=initialState, action) => {
    if(action.type === "add") {
        return action.payload
    }
    return state;
}

export default reducer;