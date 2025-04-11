import {Intent, OverlayToaster} from '@blueprintjs/core';

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
    };
}

function setPessoas(pessoas){
    return {
        type: 'SET_PESSOAS',
        payload: pessoas
    };
}
export function setNome(nome){
    return {
        type: 'SET_NOME',
        payload: nome
    };
}

export function setIdade(idade){
    return{
        type: 'SET_IDADE',
        payload: idade
    };
}
function addPessoa(pessoa){
    return {
        type: 'CADASTRAR_PESSOA',
        payload: pessoa
    };
}

export function cadastrarPessoa(navigate){
    return async (dispatch, getState) =>{
        const state = getState();
        const nome = state.pessoa.temporario.nome;
        const idade = state.pessoa.temporario.idade;
        const response = await fetch('/api/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome, idade})
        });
        if(response.ok){
            alert('Pessoas cadastrada com sucesso!');
            return navigate('/');
        }
        alert('Algo deu errado!');
    };
}