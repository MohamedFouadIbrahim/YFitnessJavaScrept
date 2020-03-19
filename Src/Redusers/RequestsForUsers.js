const init_State = {
    Erorr: '',
    Erorrs: '',
    Allrequest: [],
    Allrequests: [],
    Loading: true
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'allrequest':
            return { ...state, Allrequest: action.payload, Loading: false }
        case 'erorr':
            return { ...state, Allrequest: [], Erorr: action.payload }
        case 'allrequests':
            return { ...state, Allrequests: action.payload, Loading: false }
        case 'erorrs':
            return { ...state, Allrequests: [], Erorr: action.payload }
        default:
            return state
    }
}