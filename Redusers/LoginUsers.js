const init_State = {
    Name: '',
    Email: '',
    Password: '',
    Loading: false,
    Error: ''
}
export default (state = init_State, action) => {
    switch (action.type) {
        case 'Email':
            return { ...state, Email: action.payload }
        case 'Password':
            return { ...state, Password: action.payload }
        case 'Login':
            return { ...state, Loading: action.payload }
        case 'LogSuc':
            return { ...state, Loading: false, Token: action.payload, Erorr: '' }
        case 'LogNotSuc':
            return { ...state, Loading: false, Token: '', Erorr: action.payload }
        case 'LogFail':
            return { ...state, Loading: false, Token: '', Erorr: action.payload }
        default:
            return state
    }
}