"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Smartphone,
  Globe,
  Users,
  Lightbulb,
  Award,
  Target,
  CheckCircle,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["about", "experience", "education", "skills"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const downloadCV = () => {
    const cvContent = `
MARINA VARELA SÁNCHEZ
Desarrolladora de Aplicaciones Multiplataforma

SOBRE MÍ:
Soy una persona responsable, dinámica y creativa, con gran capacidad de adaptación y trabajo en equipo. Me desenvuelvo bien bajo presión, aportando iniciativa para la resolución eficiente de problemas y el cumplimiento de objetivos. Mi pasión por la tecnología y el desarrollo de software me motiva a seguir aprendiendo y mejorando constantemente en el ámbito de la informática.

EXPERIENCIA LABORAL:
• Crew Member | McDonald's (Nov 2024 - Actualidad)
  - Atención al cliente y gestión de pedidos
  - Trabajo en equipo en un entorno dinámico
  - Cumplimiento de protocolos de higiene y seguridad alimentaria

• Community Manager (Prácticas) | Magic Store Disney (2021)
  - Gestión de redes sociales y creación de contenido
  - Estrategias de marketing digital y fidelización de clientes

FORMACIÓN ACADÉMICA:
• Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)
  ITP Pablo de la Torre - Dos Hermanas (Sevilla) | Septiembre 2024 - Actualidad

• Bachillerato (Septiembre 2022 - Junio 2024)
  IES Virgen de Valme - Dos Hermanas (Sevilla)

HABILIDADES TÉCNICAS:
• Desarrollo Web
• Desarrollo de aplicaciones Android
• Python
• JavaScript
• Java
• SQL

APTITUDES PERSONALES:
• Organización y responsabilidad
• Trabajo en equipo y adaptación
• Iniciativa y creatividad
• Empatía y atención al cliente
• Conocimiento y respeto de las normas
• Dedicación y compromiso

IDIOMAS:
• Castellano: Nativo
• Inglés: Nivel medio

INFORMACIÓN ADICIONAL:
• Carné de conducir
• Vehículo propio
• Disponibilidad total
    `

    const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Marina_Varela_Sanchez_CV.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const skills = [
    { name: "JavaScript", icon: Code },
    { name: "Java", icon: Code },
    { name: "Python", icon: Code },
    { name: "SQL", icon: Database },
    { name: "Android Development", icon: Smartphone },
    { name: "Web Development", icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-emerald-500/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Marina Varela
            </h1>
            <div className="hidden md:flex items-center gap-6">
              {["about", "experience", "education", "skills"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-gray-300 hover:text-emerald-400 transition-all duration-300 capitalize relative ${
                    activeSection === section ? "text-emerald-400" : ""
                  }`}
                >
                  {section === "about"
                    ? "Sobre mí"
                    : section === "experience"
                      ? "Experiencia"
                      : section === "education"
                        ? "Formación"
                        : "Tecnologías"}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full" />
                  )}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 animate-pulse" />
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-40 h-40 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-emerald-500/25">
              MV
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 text-balance bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Marina Varela Sánchez
            </h1>
            <p className="text-2xl text-emerald-400 mb-6 font-semibold">
              Desarrolladora de Aplicaciones Multiplataforma
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
              Estudiante de DAM con pasión por la tecnología y el desarrollo de software. Persona responsable, dinámica
              y creativa con gran capacidad de adaptación y enfoque en soluciones innovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <a href="mailto:marinavarelasanchez@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 bg-transparent shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <a href="https://www.linkedin.com/in/marina-varela-sanchez" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 bg-transparent shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <a href="https://github.com/Marinavs03" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Sobre mí</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-300 leading-relaxed text-pretty mb-6">
                      Soy una persona responsable, dinámica y creativa, con gran capacidad de adaptación y trabajo en
                      equipo. Me desenvuelvo bien bajo presión, aportando iniciativa para la resolución eficiente de
                      problemas y el cumplimiento de objetivos.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed text-pretty">
                      Mi pasión por la tecnología y el desarrollo de software me motiva a seguir aprendiendo y mejorando
                      constantemente en el ámbito de la informática, siempre buscando crear soluciones innovadoras.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Carné de conducir</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Vehículo propio</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Disponibilidad total</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Experiencia Laboral</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-emerald-400 text-xl">Crew Member</CardTitle>
                      <CardDescription className="text-lg text-gray-300">
                        McDonald's - Dos Hermanas, Sevilla
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                    Nov 2024 - Actualidad
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Atención al cliente y gestión eficiente de pedidos
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Trabajo colaborativo en equipo en entorno dinámico
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Cumplimiento riguroso de protocolos de higiene y seguridad
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-emerald-400 text-xl">Community Manager (Prácticas)</CardTitle>
                      <CardDescription className="text-lg text-gray-300">
                        Magic Store Disney - Dos Hermanas, Sevilla
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                    2021
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Gestión estratégica de redes sociales y creación de contenido
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Desarrollo de estrategias de marketing digital y fidelización
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Formación Académica</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-emerald-400 text-xl">
                        Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-300">
                        ITP Pablo de la Torre - Dos Hermanas (Sevilla)
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                    Sep 2024 - Actualidad
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Formación especializada en desarrollo de aplicaciones para múltiples plataformas, incluyendo
                  programación orientada a objetos, bases de datos, desarrollo web y móvil.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-emerald-400 text-xl">Bachillerato</CardTitle>
                      <CardDescription className="text-lg text-gray-300">
                        IES Virgen de Valme, Dos Hermanas (Sevilla)
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                    2022 - 2024
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Tecnologías y Competencias</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Technical Skills */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Habilidades Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                      >
                        <skill.icon className="w-5 h-5 text-emerald-400" />
                        <span className="font-medium text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Personal Skills */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Aptitudes Personales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Organización y responsabilidad",
                      "Trabajo en equipo y adaptación",
                      "Iniciativa y creatividad",
                      "Empatía y atención al cliente",
                      "Conocimiento y respeto de las normas",
                      "Dedicación y compromiso",
                    ].map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-emerald-900/50 text-emerald-300 justify-center py-2 hover:bg-emerald-800/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-emerald-500/20 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Idiomas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-300">Castellano</span>
                        <span className="text-emerald-400">Nativo</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-300">Inglés</span>
                        <span className="text-emerald-400">Nivel medio</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-gray-500">© 2025 Marina Varela Sánchez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
