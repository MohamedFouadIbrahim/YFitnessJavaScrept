const init_State = {
    Sucess: '',
    Fail: '',
    Loading: false
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Sending':
            return { ...state, Loading: action.payload }
        case 'SendR':
            return { ...state, Sucess: action.payload, Loading: false, Fail: '' }
        case 'FailSendR':
            return { ...state, Fail: action.payload, Loading: false, Sucess: '' }
        default:
            return state
    }
}