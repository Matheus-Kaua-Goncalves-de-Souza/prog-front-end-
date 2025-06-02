import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { Calendar, MapPin, Briefcase, CheckCircle } from "lucide-react";

export default function ExperienciaProfissional() {
  const experiences = [
    {
      position: "Residente",
      company: "FCx - Ferreira Costa",
      period: "1 semestre 2025",
      location: "Recife, PE",
      type: "",
      description:
        "Atuação na área de banco de dados com foco em soluções corporativas utilizando Oracle Database, com ênfase em SQL e PL/SQL. Participação em equipe ágil para apoio em sistemas internos e melhorias em processos de manipulação de dados.",
      responsibilities: [
        "Atuação prática em projetos internos com foco em banco de dados Oracle",
        "Criação, manutenção e otimização de consultas SQL e PL/SQL",
        "Apoio na modelagem de dados e no gerenciamento de estruturas relacionais",
        "Experiência em ambiente corporativo com boas práticas de versionamento e documentação técnica.",
      ],
      technologies: ["SQL", "PL/SQL", "Oracle Database", "Metodologias Ágeis"],
      color: "from-sky-500 to-sky-600",
      status: "current",
    },
  ];

  return (
    <div className="min-h-screen px-6">
      <div className="container mx-auto max-w-6xl">
        <PageHeader
          title="Experiência Profissional"
          subtitle="Histórico profissional e principais conquistas"
          gradient={true}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              variant="glass"
              className="p-8 relative overflow-hidden"
            >
              {/* Status Indicator */}
              <div className="absolute top-6 right-6">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    exp.status === "current"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-slate-700/50 text-slate-400 border border-slate-600/30"
                  }`}
                >
                  {exp.status === "current" ? "Atual" : "Concluído"}
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className={`w-5 h-5 mr-2 text-sky-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-sky-400 font-semibold mb-4">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="lg:text-right space-y-2 mt-4 lg:mt-8">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    Principais Responsabilidades:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-4">
                    Tecnologias Utilizadas:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-green-500/20 text-sky-400 text-sm rounded-full border border-sky-500/30 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
