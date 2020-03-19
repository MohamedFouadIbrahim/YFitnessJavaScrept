const init_State = {
    Name: '',
    Email: '',
    Erorr: '',
    Points: 0,
    Age: 0,
    Number: 0,
    _id: '',
    Charge: []
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Sucess':
            return {
                ...state,
                _id: action.payload._id,
                Email: action.payload.Email,
                Name: action.payload.Name,
                Points: action.payload.Points,
                Age: action.payload.Age,
                Number: action.payload.Number,
                Charge: action.payload.Charge
            }
        case 'Fail':
            return {
                ...state,
                _id: '',
                Erorr: action.payload,
                Email: '',
                Name: '',
                Points: '',
                Age: '',
                Number: '',
                Charge: []
            }
        default:
            return state
    }
}