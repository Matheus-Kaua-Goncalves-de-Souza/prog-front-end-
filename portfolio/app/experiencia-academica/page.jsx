import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function ExperienciaAcademica() {
  const education = [
    {
      degree: "Tecnólogo em Sistemas para Internet",
      institution: "Universidade Católica de Pernambuco",
      period: "2024 - 2026",
      location: "Recife, PE",
      description:
        "Formação voltada ao desenvolvimento de soluções digitais para a web, com foco em software, empreendedorismo, tecnologia e inclusão socioambiental.",
      highlights: [
        "Residênsia Tecnológica do Porto Digital",
        "Desenvolvimento Full Stack",
        "Gerenciamento de Banco de Dados",
      ],
      color: "from-sky-500 to-sky-600",
      status: "cursando",
    },
    {
      degree: "Curso Técnico em Informática",
      institution: "ETE - Jurandir Bezerra Lins",
      period: "2020 - 2022",
      location: "Igarassu, PE",
      description:
        "Capacitação em manutenção de computadores, redes, lógica de programação e desenvolvimento de sistemas básicos, com foco no suporte e infraestrutura de TI.",
      highlights: [
        "Desenvolvimento de aplicações desktop",
        "Administração de redes",
        "Monitoria em Lógica de Programação",
      ],
      color: "from-green-500 to-green-600",
      status: "concluido",
    },
  ];

  const courses = [
    {
      name: "Trilha Node.js",
      provider: "Rocketseat",
      year: "2025",
      duration: "70 horas",
      color: "green",
    },
    {
      name: "Marketing Digital",
      provider: "Instituto Darwin/Porto Digital",
      year: "2025",
      duration: "100 horas",
      color: "yellow",
    },
  ];

  return (
    <div className="min-h-screen px-6">
      <div className="container mx-auto max-w-6xl">
        <PageHeader
          title="Experiência Acadêmica"
          subtitle="Formação educacional e cursos complementares"
          gradient={true}
        />

        {/* Formação Acadêmica */}
        <div className="mb-16">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-green-500 flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Formação Acadêmica
            </h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-8 relative overflow-hidden"
              >
                {/* Status Indicator */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === "cursando"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {edu.status === "cursando" ? "Cursando" : "Concluído"}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl text-sky-400 font-semibold mb-4">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="lg:text-right space-y-2 mt-4 lg:mt-8">
                      <div className="flex items-center text-slate-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-slate-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" />
                      <h5 className="font-semibold text-white">Destaques:</h5>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {edu.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-green-400 rounded-full mr-3" />
                          <span className="text-slate-300 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cursos Complementares */}
        <div>
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Cursos Complementares
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                variant="gradient"
                className="p-6 group hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-3 h-3 rounded-full bg-${course.color}-400 mt-2`}
                  />
                  <div className="text-right text-slate-400 text-sm">
                    <div>{course.year}</div>
                    <div>{course.duration}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {course.name}
                </h3>
                <p className="text-green-400 font-semibold text-sm">
                  {course.provider}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
