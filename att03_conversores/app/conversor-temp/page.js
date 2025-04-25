"use client";

import VoltarHome from "@/components/VoltarHome";
import { useState } from "react";
import ConversorInput from "../../components/ConversorInput";
import TituloPagina from "../../components/TituloPagina";

export default function ConversorTemp() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const valor = e.target.value;
    setCelsius(valor);

    const numero = parseFloat(valor.replace(",", "."));
    if (!isNaN(numero)) {
      const f = (numero * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (e) => {
    const valor = e.target.value;
    setFahrenheit(valor);

    const numero = parseFloat(valor.replace(",", "."));
    if (!isNaN(numero)) {
      const c = ((numero - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <main className="p-8 space-y-4">
      <TituloPagina
        titulo="Conversor de Temperatura"
        descricao="Converta entre Celsius e Fahrenheit em tempo real"
      />

      <div className="flex flex-col gap-4 max-w-sm">
        <ConversorInput
          label="Celsius (°C)"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Digite em °C"
        />
        <ConversorInput
          label="Fahrenheit (°F)"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Digite em °F"
        />
      </div>
      <VoltarHome />
    </main>
  );
}
