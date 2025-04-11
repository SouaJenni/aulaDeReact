import React, {useEffect} from 'react';

import './App.css';
import { Button } from '@blueprintjs/core';
import {buscarPessoas} from './actions.js';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const pessoas = useSelector(state => state.pessoa.pessoas);

    useEffect(() => {
        dispatch(buscarPessoas());
    }, []);

    return (
        <>
            <h1>Pessoas:</h1>
            {pessoas.map(pessoa =>(
                <h2 key={pessoa.id}>{pessoa.nome}-{pessoa.idade}</h2>
            ))}
            <div className="card">
                <Button text={'Cadastrar Pessoa'} onClick={() => navigator('/cadastrar')}></Button>
            </div>
        </>
    );
}

export default App;
