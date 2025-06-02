import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { Code, Palette, Zap, Globe } from "lucide-react";

export default function Sobre() {
  const technologies = [
    {
      category: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      color: "from-sky-500 to-sky-600",
      items: [
        {
          name: "React",
          description: "Biblioteca JavaScript para construção de interfaces",
          level: 90,
        },
        {
          name: "Next.js",
          description: "Framework React para aplicações web modernas",
          level: 85,
        },
        {
          name: "TailwindCSS",
          description: "Framework CSS utilitário para estilização rápida",
          level: 95,
        },
        {
          name: "JavaScript",
          description: "Linguagem de programação principal do projeto",
          level: 88,
        },
      ],
    },
    {
      category: "Ferramentas",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      items: [
        {
          name: "Lucide React",
          description: "Biblioteca de ícones SVG para React",
          level: 80,
        },
        {
          name: "CSS Grid & Flexbox",
          description: "Layouts responsivos e modernos",
          level: 92,
        },
        {
          name: "Hooks do React",
          description: "useState, useEffect e outros hooks",
          level: 87,
        },
        {
          name: "Next.js App Router",
          description: "Sistema de roteamento moderno",
          level: 83,
        },
      ],
    },
    {
      category: "Funcionalidades",
      icon: <Globe className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-500",
      items: [
        {
          name: "Navegação Responsiva",
          description: "Menu adaptável para desktop e mobile",
          level: 95,
        },
        {
          name: "Componentes Reutilizáveis",
          description: "Arquitetura modular e escalável",
          level: 90,
        },
        {
          name: "Jogo Interativo",
          description: "Bulls and Cows com lógica completa",
          level: 85,
        },
        {
          name: "Design System",
          description: "Cores consistentes e tipografia harmoniosa",
          level: 88,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6">
      <div className="container mx-auto max-w-6xl">
        <PageHeader
          title="Sobre Este Projeto"
          subtitle="Tecnologias e ferramentas utilizadas no desenvolvimento"
          gradient={true}
        />

        <div className="mb-16">
          <Card variant="glass" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-green-500 flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Visão Geral</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Este portfólio foi desenvolvido como projeto final da disciplina
              de Programação Front-End. Utilizando as tecnologias React, Next.js
              e TailwindCSS, o projeto aplica boas práticas de desenvolvimento,
              responsividade, componentização e integração com APIs. Cada página
              foi construída com atenção à usabilidade e organização do código,
              demonstrando na prática os conhecimentos adquiridos ao longo da
              disciplina.
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} variant="gradient" className="p-8">
              <div className="flex items-center mb-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mr-4`}
                >
                  <div className="text-white">{tech.icon}</div>
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {tech.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-white text-lg">
                        {item.name}
                      </h3>
                      <span className="text-sky-400 text-sm font-medium">
                        {item.level}%
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000`}
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
