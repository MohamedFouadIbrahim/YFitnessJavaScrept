
const init_State = {
    SucessC: '',
    FailC: '',
    LoadingC: false
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'SendingC':
            return { ...state, LoadingC: action.payload }
        case 'SendC':
            return { ...state, SucessC: action.payload, LoadingC: false, FailC: '' }
        case 'FailSendC':
            return { ...state, FailC: action.payload, LoadingC: false, SucessC: '' }
        default:
            return state
    }
}