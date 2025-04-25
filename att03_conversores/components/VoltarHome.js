import Link from "next/link";

export default function VoltarHome() {
  return (
    <div className="mt-6">
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
