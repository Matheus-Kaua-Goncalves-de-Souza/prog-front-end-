export default function TituloPagina({ titulo, descricao }) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">{titulo}</h1>
      <p>{descricao}</p>
    </div>
  );
}
