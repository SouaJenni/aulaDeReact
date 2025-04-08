import React from 'react';
import {Button} from "@blueprintjs/core";

export function CadastrarPessoa(){
    return (
        <>
            <h1>Cadastrar Pessoa</h1>
            <label>Nome: </label>
            <input id={'nome'} onChange={() => console.log(document.getElementById('nome').value)}></input> <br/>
            <label>Idade: </label>
            <input id={'idade'} onChange={() => console.log(document.getElementById('idade').value)}></input> <br/><br/>

            <Button text={'Salvar'} onClick={() => console.log('Salvando')} />
            <Button text={'Voltar'} onClick={() => console.log('Voltando')} />
        </>
    )
}