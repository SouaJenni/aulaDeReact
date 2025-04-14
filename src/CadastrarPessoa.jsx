import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {Button, FormGroup, H1, InputGroup, NumericInput} from '@blueprintjs/core';

import {cadastrarPessoa, setIdade, setNome} from './actions.js';
import './App.css';

export function CadastrarPessoa(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <H1>Cadastro:</H1>
            <FormGroup label={'Nome:'} labelFor="nome-input">
                <InputGroup 
                    id='nome-input' 
                    placeholder={'Digite seu nome'} 
                    onChange={(event) => dispatch(setNome(event.target.value))}
                />
            </FormGroup>

            <FormGroup label={'Idade:'} labelFor="idade-input">
                <NumericInput
                    min={0}
                    max={120}
                    minorStepSize={1}
                    clampValueOnBlur
                    buttonPosition={'none'}
                    id='idade-input' 
                    placeholder={'Digite sua idade'} 
                    onValueChange={(idade) => dispatch(setIdade(idade))}
                />
            </FormGroup>

            <Button text={'Salvar'} className={'space'} onClick={() => dispatch(cadastrarPessoa(navigate))} />
            <Button text={'Voltar'} onClick={() => navigate('/')} />
        </>
    );
}