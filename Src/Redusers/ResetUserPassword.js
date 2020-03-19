const init_State = {
    OldPassword: '',
    NewPassword: '',
    Resiting: false,
    Rested: '',
    FailRested: '',
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Resiting':
            return { ...state, Resiting: action.payload, Rested: '', FailRested: '' }
        case 'Rested':
            return { ...state, Rested: action.payload, Resiting: false, FailRested: '' }
        case 'FailRested':
            return { ...state, FailRested: action.payload, Rested: '', Resiting: false }
        case 'OldPassword':
            return { ...state,  OldPassword: action.payload }
        case 'NewPassword':
            return { ...state,  NewPassword: action.payload }
        default:
            return state
    }
}