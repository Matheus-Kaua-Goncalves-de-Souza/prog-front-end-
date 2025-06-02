export default function Card({ children, className = "", variant = "default" }) {
  const variants = {
    default: "bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70",
    glass: "bg-white/5 border-white/10 hover:bg-white/10",
    gradient:
      "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:from-slate-800/70 hover:to-slate-900/70",
  }

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/10 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  )
}
