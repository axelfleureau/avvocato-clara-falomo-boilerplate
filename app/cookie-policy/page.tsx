import type { Metadata } from "next"
import Link from "next/link"
import LegalPageShell, { type LegalSummaryItem } from "@/components/legal/legal-page-shell"
import { DataControllerSection, DefinitionsSection } from "@/components/legal/shared-sections"
import { LegalList, LegalParagraph, LegalSection, LegalSubsection } from "@/components/legal/legal-ui"
import { IUBENDA_COOKIE_URL } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Cookie Policy | Avv. Clara Falomo",
  description:
    "Cookie policy di www.clarafalomo.it: quali strumenti di tracciamento utilizziamo, per quali finalità e come gestire o revocare il consenso.",
}

const SUMMARY: LegalSummaryItem[] = [
  { href: "#introduction", label: "Introduzione" },
  { href: "#owner-and-data-controller", label: "Titolare del Trattamento dei Dati" },
  { href: "#trackers-usage", label: "Come questa Applicazione utilizza gli Strumenti di Tracciamento" },
  { href: "#manage-preferences", label: "Come gestire le preferenze" },
  { href: "#definitions-and-legal-references", label: "Definizioni e riferimenti legali" },
]

const BROWSER_LINKS = [
  { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies" },
  { label: "Mozilla Firefox", href: "https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" },
  {
    label: "Apple Safari",
    href: "https://support.apple.com/it-it/guide/safari/manage-cookies-and-website-data-sfri11471/",
  },
  {
    label: "Microsoft Internet Explorer",
    href: "http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies",
  },
  { label: "Microsoft Edge", href: "https://support.microsoft.com/it-it/help/4027947" },
  { label: "Brave", href: "https://support.brave.com/hc/articles/360022806212-How-do-I-use-Shields-while-browsing" },
  { label: "Opera", href: "https://help.opera.com/latest/web-preferences/#cookies" },
]

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      title="Cookie Policy"
      intro="Benvenuto nella cookie policy di www.clarafalomo.it. Questa policy ti aiuterà a comprendere quali cookie e tecnologie di tracciamento utilizziamo, come li utilizziamo e quali sono i tuoi diritti in merito."
      summary={SUMMARY}
      officialUrl={IUBENDA_COOKIE_URL}
    >
      <LegalSection id="introduction" title="Introduzione">
        <LegalParagraph>
          Questo documento contiene informazioni in merito alle tecnologie che consentono a questa Applicazione di
          raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e salvare
          informazioni (per esempio tramite l&apos;utilizzo di Cookie) o di utilizzare risorse (per esempio eseguendo
          uno script) sul dispositivo dell&apos;Utente quando quest&apos;ultimo interagisce con questa Applicazione.
        </LegalParagraph>
        <LegalParagraph>
          Per semplicità, in questo documento tali tecnologie sono sinteticamente definite &quot;Strumenti di
          Tracciamento&quot;, salvo vi sia ragione di differenziare. Per esempio, sebbene i Cookie possano essere usati
          in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni per
          dispositivi mobili, dal momento che si tratta di Strumenti di Tracciamento che richiedono la presenza di un
          browser. Per questo motivo, all&apos;interno di questo documento il termine Cookie è utilizzato solo per
          indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.
        </LegalParagraph>
        <LegalParagraph>
          Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero, inoltre, richiedere
          il consenso dell&apos;Utente. Se viene prestato il consenso, esso può essere revocato liberamente in qualsiasi
          momento seguendo le istruzioni contenute in questo documento.
        </LegalParagraph>
        <LegalParagraph>
          Questa Applicazione utilizza solo Strumenti di Tracciamento gestiti direttamente dal Titolare (comunemente
          detti Strumenti di Tracciamento &quot;di prima parte&quot;). Durata e scadenza dei Cookie di prima parte e
          degli altri Strumenti di Tracciamento simili possono variare a seconda di quanto impostato dal Titolare.
          Alcuni di essi scadono al termine della sessione di navigazione dell&apos;Utente.
        </LegalParagraph>
      </LegalSection>

      <DataControllerSection />

      <LegalSection id="trackers-usage" title="Come questa Applicazione utilizza gli Strumenti di Tracciamento">
        <LegalSubsection title="Necessari">
          <LegalParagraph>
            Questa Applicazione utilizza Cookie comunemente detti &quot;tecnici&quot; o altri Strumenti di Tracciamento
            analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del
            Servizio.
          </LegalParagraph>
        </LegalSubsection>
      </LegalSection>

      <LegalSection
        id="manage-preferences"
        title="Come gestire le preferenze e prestare o revocare il consenso su questa Applicazione"
      >
        <LegalParagraph>
          Qualora l&apos;utilizzo dei Tracker sia basato sul consenso, l&apos;Utente può fornire o revocare tale
          consenso impostando o aggiornando le proprie preferenze tramite il relativo pannello delle scelte in materia
          di privacy disponibile su questa Applicazione.
        </LegalParagraph>

        <LegalSubsection title="Come controllare o eliminare Cookie e tecnologie simili tramite le impostazioni del tuo dispositivo">
          <LegalParagraph>Gli Utenti possono utilizzare le impostazioni del proprio browser per:</LegalParagraph>
          <LegalList>
            <li>Vedere quali Cookie o altre tecnologie simili sono stati impostati sul dispositivo;</li>
            <li>Bloccare Cookie o tecnologie simili;</li>
            <li>Cancellare i Cookie o tecnologie simili dal browser.</li>
          </LegalList>
          <LegalParagraph>
            Le impostazioni del browser, tuttavia, non consentono un controllo granulare del consenso per categoria.
          </LegalParagraph>
          <LegalParagraph>
            Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser più
            diffusi ai seguenti indirizzi:
          </LegalParagraph>
          <LegalList>
            {BROWSER_LINKS.map((browser) => (
              <li key={browser.href}>
                <a
                  href={browser.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {browser.label}
                </a>
              </li>
            ))}
          </LegalList>
          <LegalParagraph>
            Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili disattivandoli
            tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità per dispositivi mobili
            o le impostazioni relative al tracciamento in generale (gli Utenti possono consultare le impostazioni del
            dispositivo per individuare quella pertinente).
          </LegalParagraph>
        </LegalSubsection>

        <LegalSubsection title="Conseguenze legate al rifiuto dell'utilizzo di Strumenti di Tracciamento">
          <LegalParagraph>
            Gli Utenti sono liberi di decidere se permettere o meno l&apos;utilizzo di Strumenti di Tracciamento.
            Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questa Applicazione di fornire agli Utenti
            un&apos;esperienza migliore e funzionalità avanzate (in linea con le finalità delineate nel presente
            documento). Pertanto, qualora l&apos;Utente decida di bloccare l&apos;utilizzo di Strumenti di Tracciamento,
            il Titolare potrebbe non essere in grado di fornire le relative funzionalità.
          </LegalParagraph>
        </LegalSubsection>
      </LegalSection>

      <DefinitionsSection />

      <LegalSection id="privacy-policy" title="Privacy Policy">
        <LegalParagraph>
          Per conoscere nel dettaglio quali Dati Personali vengono trattati, con quali finalità e su quale base
          giuridica, consulta la{" "}
          <Link href="/privacy-policy" className="text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </LegalParagraph>
      </LegalSection>
    </LegalPageShell>
  )
}
