"use client";

import { useState } from "react";
import ConversorInput from "../../components/ConversorInput";
import TituloPagina from "../../components/TituloPagina";
import VoltarHome from "@/components/VoltarHome";

export default function ConversorMedida() {
  const [metros, setMetros] = useState("");
  const [pes, setPes] = useState("");
  const [polegadas, setPolegadas] = useState("");

  const handleMetrosChange = (e) => {
    const valor = e.target.value;
    setMetros(valor);

    const numero = parseFloat(valor.replace(",", "."));
    if (!isNaN(numero)) {
      const p = numero * 3.28084;
      const pi = numero * 39.3701;
      setPes(p.toFixed(2));
      setPolegadas(pi.toFixed(2));
    } else {
      setPes("");
      setPolegadas("");
    }
  };

  const handlePesChange = (e) => {
    const valor = e.target.value;
    setPes(valor);

    const numero = parseFloat(valor.replace(",", "."));
    if (!isNaN(numero)) {
      const m = numero / 3.28084;
      const pi = m * 39.3701;
      setMetros(m.toFixed(2));
      setPolegadas(pi.toFixed(2));
    } else {
      setMetros("");
      setPolegadas("");
    }
  };

  const handlePolegadasChange = (e) => {
    const valor = e.target.value;
    setPolegadas(valor);

    const numero = parseFloat(valor.replace(",", "."));
    if (!isNaN(numero)) {
      const m = numero / 39.3701;
      const p = m * 3.28084;
      setMetros(m.toFixed(2));
      setPes(p.toFixed(2));
    } else {
      setMetros("");
      setPes("");
    }
  };

  return (
    <main className="p-8 space-y-4">
      <TituloPagina
        titulo="Conversor de Medidas"
        descricao="Converta entre metros, pés e polegadas em tempo real"
      />

      <div className="flex flex-col gap-4 max-w-sm">
        <ConversorInput
          label="Metros (m)"
          value={metros}
          onChange={handleMetrosChange}
          placeholder="Digite em metros"
        />
        <ConversorInput
          label="Pés (ft)"
          value={pes}
          onChange={handlePesChange}
          placeholder="Digite em pés"
        />
        <ConversorInput
          label="Polegadas (in)"
          value={polegadas}
          onChange={handlePolegadasChange}
          placeholder="Digite em polegadas"
        />
      </div>

      <VoltarHome />
    </main>
  );
}
