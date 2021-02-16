
let initialState = {
    count: 0
}

export let counter = (state = initialState, action) => {
    let newState = {};
    console.log("Counter reducer: "+JSON.stringify(state));
    switch(action.type){
        case "INCR":
            newState = {
                count: state.count + 1
            }
        break;
        case "DECR":
            newState = {
                count: state.count -1
            }
        break;
        default: // do nothing
            newState = {
                count: state.count
            }
    }

    return newState;
}