const init_State = {
    Name: '',
    Email: '',
    Password: '',
    ConfimPassword: '',
    Age: 0,
    Mobile: '',
    Status: '',
    Loading: false,
    Error: ''
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Name':
            return { ...state, Name: action.payload }
        case 'Email':
            return { ...state, Email: action.payload }
        case 'Mobile':
            return { ...state, Mobile: action.payload }
        case 'Password':
            return { ...state, Password: action.payload }
        case 'ConfimPassword':
            return { ...state, ConfimPassword: action.payload }
        case 'Age':
            return { ...state, Age: action.payload }
        case 'Regist':
            return { ...state, Loading: action.payload }
        case 'RegistUserSuc':
            return { ...state, Loading: false, Token: action.payload, Erorr: '' }
        case 'RegistUserNotSuc':
            return { ...state, Loading: false, Token: '', Erorr: action.payload }
        case 'RegistUserFail':
            return { ...state, Loading: false, Token: '', Erorr: action.payload }
        default:
            return state
    }
}