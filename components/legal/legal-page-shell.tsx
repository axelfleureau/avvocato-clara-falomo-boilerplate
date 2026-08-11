import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IubendaEmbedLink from "@/components/legal/iubenda-embed-link"
import { LegalPageHeader } from "@/components/legal/legal-ui"
import { LEGAL_LAST_UPDATED } from "@/lib/legal"

export type LegalSummaryItem = {
  href: string
  label: string
}

type LegalPageShellProps = {
  title: string
  intro: string
  summary: LegalSummaryItem[]
  /** Documento ufficiale su iubenda, linkato in fondo alla pagina. */
  officialUrl: string
  children: React.ReactNode
}

/**
 * Impaginazione comune di privacy policy e cookie policy: intestazione,
 * sommario navigabile, corpo del documento e rimando alla versione iubenda.
 */
export default function LegalPageShell({ title, intro, summary, officialUrl, children }: LegalPageShellProps) {
  return (
    <>
      <Navbar />
      {/* Spaziatura definita in globals.css: vedi la nota su .legal-page-padding. */}
      <main className="legal-page-padding bg-white text-gray-800">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <LegalPageHeader title={title} subtitle={intro} lastUpdated={LEGAL_LAST_UPDATED} />

            <nav aria-label="Sommario" className="mb-12 border border-gray-200 bg-gray-50 px-6 py-6">
              <h2 className="font-montserrat text-sm font-semibold uppercase tracking-wide text-primary">Sommario</h2>
              <ul className="mt-4 space-y-2">
                {summary.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-body text-primary underline-offset-4 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {children}

            <div className="mt-16 border-t border-gray-200 pt-8 text-center">
              <p className="text-body">
                Versione ufficiale e sempre aggiornata del documento:{" "}
                <IubendaEmbedLink href={officialUrl} label={title} title={title} />
              </p>
              <p className="mt-4 font-montserrat text-xs uppercase tracking-wide text-gray-500">
                Documento generato con iubenda
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
