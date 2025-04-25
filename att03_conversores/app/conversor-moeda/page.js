"use client";

import { useState } from "react";
import ConversorInput from "../../components/ConversorInput";
import TituloPagina from "../../components/TituloPagina";
import VoltarHome from "@/components/VoltarHome";
export default function ConversorMoeda() {
  const [dolar, setDolar] = useState("");
  const [real, setReal] = useState("");
  const cotacaoDolar = 6.1;

  const handleDolarChange = (e) => {
    const valor = e.target.value;
    setDolar(valor);

    const numero = parseFloat(valor.replace(",", "."));
    if (!isNaN(numero)) {
      const r = numero * cotacaoDolar;
      setReal(r.toFixed(2));
    } else {
      setReal("");
    }
  };

  const handleRealChange = (e) => {
    const valor = e.target.value;
    setReal(valor);

    const numero = parseFloat(valor.replace(",", "."));
    if (!isNaN(numero)) {
      const d = numero / cotacaoDolar;
      setDolar(d.toFixed(2));
    } else {
      setDolar("");
    }
  };

  return (
    <main className="p-8 space-y-4">
      <TituloPagina
        titulo="Conversor de Moeda"
        descricao="Converta entre Dólar e Real em tempo real"
      />

      <div className="flex flex-col gap-4 max-w-sm">
        <ConversorInput
          label="Dólar (USD)"
          value={dolar}
          onChange={handleDolarChange}
          placeholder="Digite em USD"
        />
        <ConversorInput
          label="Real (BRL)"
          value={real}
          onChange={handleRealChange}
          placeholder="Digite em BRL"
        />
      </div>

      <VoltarHome />
    </main>
  );
}
