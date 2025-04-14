import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {CadastrarPessoa} from './CadastrarPessoa.jsx';
import App from './App.jsx';

export function Roteador(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/cadastrar" element={<CadastrarPessoa/>} />
            </Routes>
        </BrowserRouter>
    );
}