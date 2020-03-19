const init_State = {
    Loading: false,
    Error: '',
    GymNumber: 0,
    Sended: '',
    TransPointss: 0
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'GymNumber':
            return { ...state, GymNumber: action.payload }
        case 'TransPointss':
            return { ...state, TransPointss: action.payload }
        case 'Sending':
            return { ...state, Loading: action.payload, Error:'' }
        case 'SendedToYfitness':
            return { ...state, Sended: action.payload, Loading: false, Error:'' }
        case 'NotSendedToYfitness':
            return { ...state, Loading: false, Sended: '', Error: action.payload }
        default:
            return state
    }
}