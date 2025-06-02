import "./globals.css"
import Navigation from "@/components/Navigation"

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio pessoal desenvolvido com Next.js e React",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
