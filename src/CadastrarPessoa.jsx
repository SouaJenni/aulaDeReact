import React from 'react';
import './App.css';
import {Button, FormGroup, H1, InputGroup} from '@blueprintjs/core';

export function CadastrarPessoa(){
    return (
        <>
            <H1>Cadastro:</H1>
            <FormGroup label={'Nome:'} labelFor="nome-input">
                <InputGroup id='nome-input' placeholder={'Digite seu nome'} onChange={(event) => console.log('event', event.target.value)}/>
            </FormGroup>

            <FormGroup label={'Idade:'} labelFor="idade-input">
                <InputGroup id='idade-input' placeholder={'Digite sua idade'} onChange={(event) => console.log('event', event.target.value)}/>
            </FormGroup>

            <Button text={'Salvar'} className={'space'} onClick={() => console.log('Salvando')} />
            <Button text={'Voltar'} onClick={() => console.log('Voltando')} />
        </>
    );
}