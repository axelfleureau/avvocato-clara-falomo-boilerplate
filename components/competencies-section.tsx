import { Card, CardContent } from "@/components/ui/card"
import { Building2, Landmark, LifeBuoy, FileCheck, Users } from "lucide-react"

const CompetenciesSection = () => {
  const competencies = [
    {
      title: "Composizione crisi d'impresa",
      description:
        "Assistenza nella gestione e risoluzione delle crisi aziendali attraverso procedure negoziate, con particolare attenzione alla continuità aziendale.",
      icon: <LifeBuoy className="h-10 w-10 text-primary" />,
    },
    {
      title: "Consulenza legale per imprese",
      description:
        "Supporto legale completo per aziende di ogni dimensione, dalla costituzione alla gestione ordinaria e straordinaria.",
      icon: <Building2 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Governance e compliance",
      description:
        "Consulenza su modelli di governance societaria, adeguamenti normativi e implementazione di sistemi di compliance aziendale.",
      icon: <FileCheck className="h-10 w-10 text-primary" />,
    },
    /*
        {
          title: "Collaborazioni interstudio",
          description:
            "Disponibilità per collaborazioni con altri studi legali in regime di subappalto o consulenza specialistica.",
          icon: <Users className="h-10 w-10 text-primary" />,
        },
    */
    {
      title: "Diritto bancario e societario",
      description:
        "Assistenza in operazioni bancarie, contrattualistica specializzata e consulenza in materia societaria e finanziaria.",
      icon: <Landmark className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="competencies" className="section-padding bg-pearl-gray/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Competenze Principali</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Offro servizi legali specializzati in diverse aree del diritto civile, con un approccio
            personalizzato e orientato alle soluzioni.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {competencies.map((competency, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{competency.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{competency.title}</h3>
                  <p className="text-gray-600">{competency.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompetenciesSection
