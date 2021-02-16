
let initialState = {
    plan: "No Plan"
}

export let todo = (state = initialState, action) => {
    let newState = {};
    console.log("Todo reducer: "+JSON.stringify(state));
    switch(action.type){
        case "TODAY":
            newState = {
                plan: "Plan Today"
            }
        break;
        case "TOMORROW":
            newState = {
                plan: "Plan Tomorrow"
            }
        break;
        default: // do nothing
            newState = {
                plan: initialState.plan
            }
    }

    return newState;
}