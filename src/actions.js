export function buscarPessoas() {
    return async (dispatch) =>{
        try{
            const response = await fetch('/api/pessoas');
            if (!response.ok) {
                throw new Error('Falha em buscar pessoas');
            }
            const pessoas = await response.json();
            dispatch(setPessoas(pessoas));
        }catch (e) {
            console.error('Erro ao buscar pessoas', e);
        }
    }
}

function setPessoas(pessoas){
    return {
        type: 'SET_PESSOAS',
        payload: pessoas
    }
}