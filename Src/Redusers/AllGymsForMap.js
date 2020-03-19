const init_State = {
    Sucess: '',
    Fail: '',
    Loading: false,
    Gyms:[]
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Getall':
            return { ...state, Gyms: action.payload, Loading: false }
        case 'NotGetall':
            return { ...state, Fail: action.payload, Loading: false }
        default:
            return state
    }
}