'use client'
import { useState } from 'react';


function Dados({ valor }) {
  return (
    <div>
      <img 
        src={`/images/dice-${valor}.svg`} 
        alt={`Dado mostrando ${valor}`} 
        width={100} 
      />
    </div>
  );
}

export default function App() {
  const [valorDado, setValorDado] = useState(1);

  function rolarDado() {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Jogo do Dado</h1>
      <Dados valor={valorDado} />
      <button onClick={rolarDado} style={{ marginTop: '10px', padding: '10px', fontSize: '16px' }}>
        Rolar Dado
      </button>
    </div>
  );
}
