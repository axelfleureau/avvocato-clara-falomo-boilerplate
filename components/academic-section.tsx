import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const AcademicSection = () => {
  const academicTitles = [
    {
      title: "Master II Livello in Giurista Internazionale d'Impresa",
      institution: "Università di Padova",
      year: "2023-2024",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Laurea in Giurisprudenza",
      institution: "Università di Padova",
      year: "2002",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Laurea in Banca e Finanza",
      institution: "Università di Udine",
      year: "2021",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Esperto in Composizione Negoziata Crisi d'Impresa",
      institution: "Unione Triveneta Ordine Avvocati",
      year: "2022",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Corso Governance Società in House e Partecipate",
      institution: "Consiglio Nazionale Forense",
      year: "2023",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: "Certificazione Bloomberg Market Concepts",
      institution: "Bloomberg",
      year: "2020",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "First Certificate",
      institution: "University of Cambridge",
      year: "2000",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Certificazione B2 Advanced",
      institution: "CLAV Udine",
      year: "2019",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section id="academic" className="section-padding bg-pearl-gray/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Titoli Accademici</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Percorso formativo completo e multidisciplinare, con specializzazioni in ambito legale, finanziario e
            linguistico.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            {academicTitles.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-primary mb-1">{item.institution}</p>
                      <p className="text-sm text-gray-500">{item.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademicSection
