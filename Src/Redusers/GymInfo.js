const init_State = {
    Name: '',
    Email: '',
    Erorr: '',
    Points: 0,
    Price: 0,
    Number: 0,
    _id: ''
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'GymInfo':
            return {
                ...state,
                _id: action.payload._id,
                Email: action.payload.Email,
                Name: action.payload.Name,
                Points: action.payload.Points,
                Price: action.payload.Price,
                Number: action.payload.Number
            }
        case 'GymInfoFail':
            return {
                ...state,
                _id: '',
                Erorr: action.payload,
                Email: '',
                Name: '',
                Points: '',
                Price: '',
                Number: ''
            }
        default:
            return state
    }
}