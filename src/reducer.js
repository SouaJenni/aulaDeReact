const estadoInicial = {
    pessoas: []
}

export const pessoaReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case 'CADASTRAR_PESSOA':
            return {
                ...state
            }
        default:
            return state;
    }
}