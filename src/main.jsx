import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Roteador} from './Roteador.jsx';
import {Provider} from 'react-redux';
import {store} from './store.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Roteador />
        </Provider>
    </StrictMode>,
);
