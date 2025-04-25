import TituloPagina from "../../components/TituloPagina";
import VoltarHome from "../../components/VoltarHome";

export default function Sobre() {
  return (
    <main className="p-8 space-y-4">
      <TituloPagina
        titulo="Sobre mim..."
        descricao="Este app foi desenvolvido por matheus kauã, estudante de tecnologia."
      />

      <p>
        O objetivo deste projeto é praticar React e estilização com Tailwind,
        criando uma aplicação funcional com diferentes conversores em tempo real
        utilizando rotas.
      </p>
      <VoltarHome />
    </main>
  );
}
