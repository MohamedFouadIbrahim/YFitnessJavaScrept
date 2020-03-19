const init_State = {
    Canceled: '',
    NotCanceled: '',
    Canceling: false
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Canceling':
            return { ...state, Canceling: action.payload, Canceled: '', NotCanceled: '' }
        case 'Cancel':
            return { ...state, Canceled: action.payload, Canceling: false, NotCanceled: '' }
        case 'NotCancel':
            return { ...state, NotCanceled: action.payload, Canceling: false, Canceled: '' }
        default:
            return state
    }
}