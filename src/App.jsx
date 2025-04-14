import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Button, H1, H2} from '@blueprintjs/core';

import {buscarPessoas} from './actions.js';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const pessoas = useSelector(state => state.pessoa.pessoas);

    useEffect(() => {
        dispatch(buscarPessoas());
    }, []);

    return (
        <>
            <H1>Pessoas:</H1>
            {pessoas.map(pessoa =>(
                <H2 key={pessoa.id}>{pessoa.nome}-{pessoa.idade}</H2>
            ))}
            <Button text={'Cadastrar Pessoa'} onClick={() => navigator('/cadastrar')}></Button>
        </>
    );
}

export default App;
