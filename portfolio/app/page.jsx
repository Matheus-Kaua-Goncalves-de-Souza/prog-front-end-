import Card from "@/components/Card";
import Link from "next/link";
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Gamepad2,
  ArrowRight,
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const sections = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Sobre Mim",
      description:
        "Conheça as tecnologias e ferramentas utilizadas neste portfólio",
      href: "/sobre",
      color: "from-sky-500 to-sky-600",
      delay: "0ms",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Experiência Acadêmica",
      description: "Minha formação educacional e cursos realizados",
      href: "/experiencia-academica",
      color: "from-green-500 to-green-600",
      delay: "100ms",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Experiência Profissional",
      description: "Histórico profissional e principais conquistas",
      href: "/experiencia-profissional",
      color: "from-sky-500 to-green-500",
      delay: "200ms",
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: "Projetos",
      description: "Portfólio de projetos desenvolvidos",
      href: "/projetos",
      color: "from-green-500 to-yellow-400",
      delay: "300ms",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Jogo da Senha",
      description: "Divirta-se com o jogo Bulls and Cows",
      href: "/jogo",
      color: "from-yellow-400 to-orange-500",
      delay: "400ms",
    },
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "mkmateus.dev@gmail.com",
      href: "mailto:mkmateus.dev@gmail.com",
      color: "text-green-400 hover:text-green-300",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B7zt3p11TRUaNpJTDWqB4Ww%3D%3D",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      label: "Instagram",
      href: "https://www.instagram.com/kauan_matews/",
      color: "text-pink-400 hover:text-pink-300",
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: "WhatsApp",
      href: "https://wa.me/5581989524750",
      color: "text-green-400 hover:text-green-300",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-500/20 to-green-500/20 rounded-full border border-sky-500/30 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm text-slate-300">
                  Desenvolvedor Full Stack
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-sky-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                  Olá, eu sou
                </span>
                <br />
                <span className="text-white">Mateus Kauã</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
                Desenvolvedor apaixonado por transformar ideias em experiências
                digitais marcantes. Tenho foco em aplicações web modernas, com
                especialização em React, Next.js e Spring Boot, unindo front-end
                e back-end para construir soluções completas, escaláveis e de
                alta qualidade.
              </p>

              {/* Contact Info */}
              <div className="flex flex-nowrap justify-center lg:justify-start gap-4 mb-8 overflow-x-auto">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center transition-all duration-300 hover:scale-105 whitespace-nowrap ${social.color}`}
                  >
                    <span className="mr-1">{social.icon}</span>
                    <span className="text-xs md:text-sm font-medium">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projetos">
                  <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-green-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 flex items-center justify-center backdrop-blur-sm">
                    Ver Projetos
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
                <Link href="/sobre">
                  <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl font-semibold hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm">
                    Sobre
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Photo Container */}
                {/* Main Photo Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-green-500 to-yellow-400 rounded-3xl p-1">
                    <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden">
                      <img
                        src="/myphot.jpg"
                        alt="Mateus Kauã - Desenvolvedor Full Stack"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-sky-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Code className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-r from-sky-500/10 to-green-500/10 rounded-3xl" />
              </div>
            </div>
          </div>

          {/* Floating Code Icon - Repositioned */}
          <div className="absolute top-20 right-4 opacity-10 animate-pulse hidden xl:block">
            <Code className="w-24 h-24 text-sky-400" />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Meu Portfólio
            </h2>
            <p className="text-slate-400 text-lg">
              Conheça minha jornada profissional e projetos desenvolvidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link key={index} href={section.href}>
                <Card
                  variant="glass"
                  className="p-8 h-full group cursor-pointer"
                  style={{ animationDelay: section.delay }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{section.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                    {section.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {section.description}
                  </p>

                  <div className="flex items-center text-sky-400 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-semibold">Explorar</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
