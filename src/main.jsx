import React from 'react';
import { StrictMode } from 'react';
import {Provider} from 'react-redux';
import { createRoot } from 'react-dom/client';

import {Roteador} from './Roteador.jsx';
import {store} from './store.js';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Roteador />
        </Provider>
    </StrictMode>,
);
