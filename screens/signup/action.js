import { CommonActions } from '@react-navigation/native'


export function fetchUser(user, navigation,) {
    return function (dispatch) {
        dispatch({ type: 'LOGIN_FETCHING_SUCCESS', loginData: user })
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Home' }
                ]
            })
        )
    }
}

export function userLogout(aaa,navigation) {
    console.log('naaac',navigation);
    return function (dispatch) {
        dispatch({ type: 'USER_LOGOUT'})
        // navigation.dispatch(
        //     CommonActions.reset({
        //         index: 0,
        //         routes: [
        //             { name: 'Login' }
        //         ]
        //     })
        // )
    }
}

