import React, {useEffect} from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@blueprintjs/core";
import {buscarPessoas} from "./actions.js";
import {Link} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        buscarPessoas(setPessoas);
    }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        {pessoas.map(pessoa =>(
            <h2>{pessoa.nome}-{pessoa.idade}</h2>
        ))}
      <div className="card">
        <Button intent="primary" text={"Contador é: " + count} onClick={() => setCount(count + 1)} />
        <Link to={'/cadastrar'}>Cadastrar Pessoas</Link>
          <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
