const init_State = {
    Accepted: '',
    NotAccepted: '',
    Accepting: false,
    ////////////////  
    Declined: '',
    Declinting: false,
    NotDeclined: '',
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Accepting':
            return { ...state, Accepting: action.payload, Accepted: '', NotAccepted: '' }
        case 'Accepted':
            return { ...state, Accepted: action.payload, Accepting: false, NotAccepted: '' }
        case 'NotAccepted':
            return { ...state, NotAccepted: action.payload, Accepted: '', Accepting: false }
        case 'Declinting':
            return { ...state, Declinting: action.payload, Declined: '', NotDeclined: '' }
        case 'Declined':
            return { ...state, Declined: action.payload, NotDeclined: '', Declinting: false }
        case 'NotDeclined':
            return { ...state, NotDeclined: action.payload, Declined: '', Declinting: false }
        default:
            return state
    }
}