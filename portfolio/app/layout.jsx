import "./globals.css"
import Navigation from "@/components/Navigation"

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio pessoal desenvolvido com Next.js e React",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900 text-slate-100 min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-sky-900/20 via-slate-900 to-green-900/20 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent pointer-events-none" />
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
