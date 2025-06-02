export default function PageHeader({ title, subtitle, gradient = false }) {
  return (
    <div className="text-center mb-16 pt-24">
      <h1
        className={`text-5xl md:text-7xl font-bold mb-6 ${
          gradient
            ? "bg-gradient-to-r from-sky-400 via-green-400 to-yellow-400 bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {title}
      </h1>
      {subtitle && <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-sky-500 to-green-500 mx-auto rounded-full" />
    </div>
  )
}
