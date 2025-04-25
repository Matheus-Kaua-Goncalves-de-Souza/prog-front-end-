import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">Bem-vindo ao Conversões Online!</h1>
        <p>
          Esta aplicação permite converter valores entre diferentes unidades.
        </p>
        <ul className="space-y-2">
          <li>
            <Link className="text-blue-500 underline" href="/sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" href="/conversor-moeda">
              Conversor Dólar/Real
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" href="/conversor-temp">
              Conversor Temperatura
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" href="/conversor-medida">
              Conversor Medidas
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
