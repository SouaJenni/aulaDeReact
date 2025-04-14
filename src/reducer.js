const estadoInicial = {
    pessoas: []
};

export const pessoaReducer = (state = estadoInicial, action) => {
    switch (action.type) {
    case 'SET_PESSOAS':
        return{
            ...state,
            pessoas: action.payload
        };
    case 'SET_NOME':
        return{
            ...state,
            temporario: {...state.temporario, nome: action.payload}
        }; 
    case 'SET_IDADE':
        return{
            ...state,
            temporario: {...state.temporario, idade: action.payload}
        };
    default:
        return state;
    }
};