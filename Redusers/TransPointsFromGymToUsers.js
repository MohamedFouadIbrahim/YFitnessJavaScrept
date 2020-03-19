const init_State = {
    Loading: false,
    Error: '',
    UserNumber: 0,
    Sended: '',
    TransPoints: 0
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'UserNumber':
            return { ...state, UserNumber: action.payload }
        case 'TransPoints':
            return { ...state, TransPoints: action.payload }
        case 'Send':
            return { ...state, Loading: action.payload, Error:'' }
        case 'Sended':
            return { ...state, Sended: action.payload, Loading: false, Error:'' }
        case 'NotSend':
            return { ...state, Loading: false, Sended: '', Error: action.payload }
        default:
            return state
    }
}