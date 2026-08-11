import type React from "react"

/**
 * Piccolo set di componenti di presentazione condivisi dalle pagine legali
 * (Privacy Policy e Cookie Policy). Il progetto non include il plugin
 * @tailwindcss/typography, quindi lo stile dei testi lunghi è esplicito.
 */

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-28 first:mt-0">
      <h2 className="heading-md text-primary mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export function LegalSubsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className="font-cormorant text-xl md:text-2xl font-light text-primary mb-3">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-body leading-relaxed">{children}</p>
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6 text-body leading-relaxed marker:text-gold">{children}</ul>
}

export function LegalDefinition({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <dt className="font-montserrat text-sm font-semibold uppercase tracking-wide text-primary">{term}</dt>
      <dd className="mt-2 text-body leading-relaxed">{children}</dd>
    </div>
  )
}

export function LegalCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gold bg-gray-50 px-5 py-4 text-body leading-relaxed">{children}</div>
  )
}

export function LegalPageHeader({ title, subtitle, lastUpdated }: { title: string; subtitle: string; lastUpdated: string }) {
  return (
    <header className="mb-12 text-center">
      <h1 className="heading-lg text-primary mb-6">{title}</h1>
      <div className="decorative-line mx-auto mb-8"></div>
      <p className="mx-auto max-w-3xl text-body leading-relaxed">{subtitle}</p>
      <p className="mt-4 font-montserrat text-sm uppercase tracking-wide text-gray-500">
        Ultima modifica: {lastUpdated}
      </p>
    </header>
  )
}
