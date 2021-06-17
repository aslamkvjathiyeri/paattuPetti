let initialStage = {
    userData: null,
}

const user = (state = initialStage, actions) => {
    switch (actions.type) {
        case "LOGIN_FETCHING_SUCCESS":
            return { ...state, userData: actions.loginData }
            break;
        default:
            return state
    }
}

export default user
