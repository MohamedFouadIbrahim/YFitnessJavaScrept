const INITIAL_STATE = {
    Show: false,
    Init_region: {
        longitude: 29.924526,
        latitude: 31.205753,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
    }
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MyPlace':
            return { ...state, region: action.payload }
        case 'Modal':
            return { ...state, Show: action.payload }
        default:
            return state
    }
}