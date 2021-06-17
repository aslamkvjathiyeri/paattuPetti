let initialStage = {
    userData: null,
}

const user = (state = initialStage, actions) => {
    switch (actions.type) {
        case "LOGIN_FETCHING_SUCCESS":
            return { ...state, userData: actions.userData }
            break;
        // case "USER_LOGOUT":
        //     return {  userData: null }
        //     break;
        default:
            return state
    }
}

export default user
