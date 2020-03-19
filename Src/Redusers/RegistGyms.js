const init_State = {
    Name: '',
    Email: '',
    Password: '',
    ConfimPassword: '',
    Mobile: '',
    Price: '',
    Status: '',
    Erorr: '',
    Loading: false
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Name':
            return { ...state, Name: action.payload }
        case 'Email':
            return { ...state, Email: action.payload }
        case 'Mobile':
            return { ...state, Mobile: action.payload }
        case 'Price':
            return { ...state, Price: action.payload }
        case 'Password':
            return { ...state, Password: action.payload }
        case 'ConfimPassword':
            return { ...state, ConfimPassword: action.payload }
        case 'Regist':
            return { ...state, Loading: action.payload }
        case 'RegistSuc':
            return { ...state, Loading: false, Token: action.payload, Erorr: '' }
        case 'RegistNotSuc':
            return { ...state, Loading: false, Erorr: action.payload, Token: '' }
        case 'RegistFail':
            return { ...state, Loading: false, Erorr: action.payload, Token: '' }
        default:
            return state
    }
}