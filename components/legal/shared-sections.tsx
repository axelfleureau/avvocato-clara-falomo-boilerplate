import { LegalDefinition, LegalParagraph, LegalSection, LegalSubsection } from "@/components/legal/legal-ui"
import { LEGAL_DEFINITIONS, LEGAL_OWNER } from "@/lib/legal"

/** "Titolare del Trattamento dei Dati": identica nei due documenti. */
export function DataControllerSection() {
  return (
    <LegalSection id="owner-and-data-controller" title="Titolare del Trattamento dei Dati">
      <LegalParagraph>
        {LEGAL_OWNER.name}
        <br />
        {LEGAL_OWNER.addressLines[0]}
        <br />
        {LEGAL_OWNER.addressLines[1]}
        <br />
        {LEGAL_OWNER.vat}
        <br />
        {LEGAL_OWNER.bar}
      </LegalParagraph>
      <LegalParagraph>
        <strong>Indirizzo email del Titolare:</strong>{" "}
        <a href={`mailto:${LEGAL_OWNER.email}`} className="text-primary underline-offset-4 hover:underline">
          {LEGAL_OWNER.email}
        </a>
      </LegalParagraph>
    </LegalSection>
  )
}

/** "Definizioni e riferimenti legali": glossario identico nei due documenti. */
export function DefinitionsSection() {
  return (
    <LegalSection id="definitions-and-legal-references" title="Definizioni e riferimenti legali">
      <dl>
        {LEGAL_DEFINITIONS.map((definition) => (
          <LegalDefinition key={definition.term} term={definition.term}>
            {definition.text}
          </LegalDefinition>
        ))}
      </dl>

      <LegalSubsection title="Riferimenti legali">
        <LegalParagraph>
          Ove non diversamente specificato, questa policy riguarda esclusivamente questa Applicazione.
        </LegalParagraph>
      </LegalSubsection>
    </LegalSection>
  )
}
