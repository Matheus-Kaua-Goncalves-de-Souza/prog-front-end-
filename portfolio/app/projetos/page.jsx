import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";

export default function Projetos() {
  const projects = [
    {
      title: "E-commerce - Recifeirinha",
      description:
        "Recifeirinha é uma plataforma de e-commerce voltada para o comércio local do Recife, oferecendo praticidade e inclusão digital para pequenos empreendedores.",
      image: "recifeirinha.png",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "SpringBoot",
        "PostgreSQL",
      ],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/usuario/ecommerce-project",
      date: "Junho 2025",
      status: "Em andamento",
      featured: true,
      color: "from-sky-500 to-sky-600",
    },
    {
      title: "Dashboard - Gerenciamento de Produtos",
      description:
        "É uma aplicação web que utiliza JavaScript, API REST (Back4App) e uma API pública, com funcionalidades de CRUD e design responsivo feito com CSS, promovendo interatividade e integração de dados.",
      image: "dashbord.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl:
        "https://projeto-final-programacao-web-2024-2-six.vercel.app/?classId=c80711a3-3c91-4594-a054-566cb5051346&assignmentId=0753673d-efe1-41fb-aa63-54a75121955a&submissionId=2b4311a9-97ae-547e-b832-83a5fee1c665",
      githubUrl:
        "https://github.com/Ewayrton/projetoFinal-programacaoWeb-2024.2.git",
      date: "Dezembro 2024",
      status: "Concluído",
      featured: true,
      color: "from-green-500 to-green-600",
    },

    {
      title: "Conversor",
      description:
        "É uma aplicação prática que converte dólar/real, temperatura e medidas, facilitando o uso diário.",
      image: "conversor.png",
      technologies: ["React", "Next.js"],
      liveUrl: "https://prog-front-end-two.vercel.app",
      githubUrl:
        "https://github.com/Matheus-Kaua-Goncalves-de-Souza/prog-front-end-/tree/main/att03_conversores",
      date: "Abril 2025",
      status: "Concluído",
      featured: false,
      color: "from-green-500 to-yellow-400",
    },
    {
      title: "Jogo do Dado",
      description: "Jogo do dado qque aparece varios dados no momento do click",
      image: "jogo-dado.png",
      technologies: ["Next.js", "React"],
      liveUrl: "https://prog-front-end-fyn8.vercel.app",
      githubUrl:
        "https://github.com/Matheus-Kaua-Goncalves-de-Souza/prog-front-end-/tree/main/att02",
      date: "Abril 2025",
      status: "Concluído",
      featured: false,
      color: "from-sky-500 to-green-500",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen px-6">
      <div className="container mx-auto max-w-7xl">
        <PageHeader
          title="Projetos Desenvolvidos"
          subtitle="Portfólio de projetos e aplicações criadas"
          gradient={true}
        />

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center mb-12">
            <Star className="w-6 h-6 mr-3 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">
              Projetos em Destaque
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                variant="glass"
                className="group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === "Concluído"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        <span className="text-xs font-semibold">Destaque</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center text-slate-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-sky-500 to-green-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center font-semibold"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800/50 border border-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center font-semibold"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12">
            Outros Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} variant="gradient" className="group">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        project.status === "Concluído"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-slate-400 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-800/30 text-slate-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800/30 text-slate-400 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-sky-500/20 border border-sky-500/30 text-sky-400 px-3 py-2 rounded-lg hover:bg-sky-500/30 transition-colors flex items-center justify-center text-sm font-semibold"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Ver
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700/50 border border-slate-600 text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-600/50 transition-colors flex items-center justify-center text-sm font-semibold"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Código
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
