const initState = {name: "0", email: "", password: "", remember: "", gender: "", age: ""}
export default (state = initState, action) => {
    switch (action.type) {
        case 'USER_DETAIL':
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}
