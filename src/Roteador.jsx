import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import App from './App.jsx';
import {CadastrarPessoa} from './CadastrarPessoa.jsx';

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