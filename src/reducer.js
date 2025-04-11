const estadoInicial = {
    pessoas: []
}

export const pessoaReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case 'CADASTRAR_PESSOA':
            return {
                ...state
            }
        case 'SET_PESSOAS':
            return{
                ...state,
                pessoas: action.payload
            }
        default:
            return state;
    }
}