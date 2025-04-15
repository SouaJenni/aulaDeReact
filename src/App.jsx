import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Button, H1, H2} from '@blueprintjs/core';
import {Cell, Column, Table2} from '@blueprintjs/table';
import '@blueprintjs/table/lib/css/table.css';

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
        <div style={{padding: '20px'}}>
            <H1>Pessoas:</H1>
            <div style={{height: `${pessoas.length * 40+40}px`, width: '100%', marginBottom: '20px', overflow: 'hidden'}}>
                <Table2
                    numRows={pessoas.length}
                    enableRowHeader={false}
                    enableColumnResizing={false}
                    defaultColumnWidth={200}
                    rowHeights={Array(pessoas.length).fill(40)}
                >
                    <Column
                        name='Nome'
                        cellRenderer={rowIndex => <Cell>{pessoas[rowIndex].nome}</Cell>}
                    />
                    <Column
                        name='Idade'
                        cellRenderer={rowIndex => <Cell>{pessoas[rowIndex].idade}</Cell>}
                    />
                </Table2>
            </div>
            <Button text={'Cadastrar Pessoa'} onClick={() => navigator('/cadastrar')}></Button>

        </div>
    );
}

export default App;
