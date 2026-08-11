import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IubendaEmbedLink from "@/components/legal/iubenda-embed-link"
import {
  LegalDefinition,
  LegalList,
  LegalPageHeader,
  LegalParagraph,
  LegalSection,
  LegalSubsection,
} from "@/components/legal/legal-ui"

export const metadata: Metadata = {
  title: "Cookie Policy | Avv. Clara Falomo",
  description:
    "Cookie policy di www.clarafalomo.it: quali strumenti di tracciamento utilizziamo, per quali finalità e come gestire o revocare il consenso.",
}

const IUBENDA_COOKIE_URL = "https://www.iubenda.com/privacy-policy/65494109/cookie-policy"

const SUMMARY = [
  { href: "#introduction", label: "Introduzione" },
  { href: "#owner-and-data-controller", label: "Titolare del Trattamento dei Dati" },
  { href: "#trackers-usage", label: "Come questa Applicazione utilizza gli Strumenti di Tracciamento" },
  { href: "#manage-preferences", label: "Come gestire le preferenze" },
  { href: "#definitions-and-legal-references", label: "Definizioni e riferimenti legali" },
]

const BROWSER_LINKS = [
  { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies" },
  { label: "Mozilla Firefox", href: "https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" },
  { label: "Apple Safari", href: "https://support.apple.com/it-it/guide/safari/manage-cookies-and-website-data-sfri11471/" },
  { label: "Microsoft Internet Explorer", href: "http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies" },
  { label: "Microsoft Edge", href: "https://support.microsoft.com/it-it/help/4027947" },
  { label: "Brave", href: "https://support.brave.com/hc/articles/360022806212-How-do-I-use-Shields-while-browsing" },
  { label: "Opera", href: "https://help.opera.com/latest/web-preferences/#cookies" },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      {/* Spaziatura definita in globals.css: vedi la nota su .legal-page-padding. */}
      <main className="legal-page-padding bg-white text-gray-800">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <LegalPageHeader
              title="Cookie Policy"
              subtitle="Benvenuto nella cookie policy di www.clarafalomo.it. Questa policy ti aiuterà a comprendere quali cookie e tecnologie di tracciamento utilizziamo, come li utilizziamo e quali sono i tuoi diritti in merito."
              lastUpdated="11 agosto 2026"
            />

            <nav aria-label="Sommario" className="mb-12 border border-gray-200 bg-gray-50 px-6 py-6">
              <h2 className="font-montserrat text-sm font-semibold uppercase tracking-wide text-primary">Sommario</h2>
              <ul className="mt-4 space-y-2">
                {SUMMARY.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-body text-primary underline-offset-4 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <LegalSection id="introduction" title="Introduzione">
              <LegalParagraph>
                Questo documento contiene informazioni in merito alle tecnologie che consentono a questa Applicazione di
                raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e
                salvare informazioni (per esempio tramite l&apos;utilizzo di Cookie) o di utilizzare risorse (per
                esempio eseguendo uno script) sul dispositivo dell&apos;Utente quando quest&apos;ultimo interagisce con
                questa Applicazione.
              </LegalParagraph>
              <LegalParagraph>
                Per semplicità, in questo documento tali tecnologie sono sinteticamente definite &quot;Strumenti di
                Tracciamento&quot;, salvo vi sia ragione di differenziare. Per esempio, sebbene i Cookie possano essere
                usati in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni
                per dispositivi mobili, dal momento che si tratta di Strumenti di Tracciamento che richiedono la
                presenza di un browser. Per questo motivo, all&apos;interno di questo documento il termine Cookie è
                utilizzato solo per indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.
              </LegalParagraph>
              <LegalParagraph>
                Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero, inoltre,
                richiedere il consenso dell&apos;Utente. Se viene prestato il consenso, esso può essere revocato
                liberamente in qualsiasi momento seguendo le istruzioni contenute in questo documento.
              </LegalParagraph>
              <LegalParagraph>
                Questa Applicazione utilizza solo Strumenti di Tracciamento gestiti direttamente dal Titolare
                (comunemente detti Strumenti di Tracciamento &quot;di prima parte&quot;). Durata e scadenza dei Cookie
                di prima parte e degli altri Strumenti di Tracciamento simili possono variare a seconda di quanto
                impostato dal Titolare. Alcuni di essi scadono al termine della sessione di navigazione
                dell&apos;Utente.
              </LegalParagraph>
            </LegalSection>

            <LegalSection id="owner-and-data-controller" title="Titolare del Trattamento dei Dati">
              <LegalParagraph>
                Avv. Clara Falomo
                <br />
                Piazza XX Settembre n. 8
                <br />
                33170 Pordenone (PN), Italia
                <br />
                P. IVA: IT01537350934
                <br />
                Iscritta all&apos;Ordine degli Avvocati di Pordenone
              </LegalParagraph>
              <LegalParagraph>
                <strong>Indirizzo email del Titolare:</strong>{" "}
                <a href="mailto:avvocato@clarafalomo.it" className="text-primary underline-offset-4 hover:underline">
                  avvocato@clarafalomo.it
                </a>
              </LegalParagraph>
            </LegalSection>

            <LegalSection id="trackers-usage" title="Come questa Applicazione utilizza gli Strumenti di Tracciamento">
              <LegalSubsection title="Necessari">
                <LegalParagraph>
                  Questa Applicazione utilizza Cookie comunemente detti &quot;tecnici&quot; o altri Strumenti di
                  Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la
                  fornitura del Servizio.
                </LegalParagraph>
              </LegalSubsection>
            </LegalSection>

            <LegalSection
              id="manage-preferences"
              title="Come gestire le preferenze e prestare o revocare il consenso su questa Applicazione"
            >
              <LegalParagraph>
                Qualora l&apos;utilizzo dei Tracker sia basato sul consenso, l&apos;Utente può fornire o revocare tale
                consenso impostando o aggiornando le proprie preferenze tramite il relativo pannello delle scelte in
                materia di privacy disponibile su questa Applicazione.
              </LegalParagraph>

              <LegalSubsection title="Come controllare o eliminare Cookie e tecnologie simili tramite le impostazioni del tuo dispositivo">
                <LegalParagraph>Gli Utenti possono utilizzare le impostazioni del proprio browser per:</LegalParagraph>
                <LegalList>
                  <li>Vedere quali Cookie o altre tecnologie simili sono stati impostati sul dispositivo;</li>
                  <li>Bloccare Cookie o tecnologie simili;</li>
                  <li>Cancellare i Cookie o tecnologie simili dal browser.</li>
                </LegalList>
                <LegalParagraph>
                  Le impostazioni del browser, tuttavia, non consentono un controllo granulare del consenso per
                  categoria.
                </LegalParagraph>
                <LegalParagraph>
                  Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser
                  più diffusi ai seguenti indirizzi:
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
                  Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili
                  disattivandoli tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità
                  per dispositivi mobili o le impostazioni relative al tracciamento in generale (gli Utenti possono
                  consultare le impostazioni del dispositivo per individuare quella pertinente).
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Conseguenze legate al rifiuto dell'utilizzo di Strumenti di Tracciamento">
                <LegalParagraph>
                  Gli Utenti sono liberi di decidere se permettere o meno l&apos;utilizzo di Strumenti di Tracciamento.
                  Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questa Applicazione di fornire agli
                  Utenti un&apos;esperienza migliore e funzionalità avanzate (in linea con le finalità delineate nel
                  presente documento). Pertanto, qualora l&apos;Utente decida di bloccare l&apos;utilizzo di Strumenti
                  di Tracciamento, il Titolare potrebbe non essere in grado di fornire le relative funzionalità.
                </LegalParagraph>
              </LegalSubsection>
            </LegalSection>

            <LegalSection id="definitions-and-legal-references" title="Definizioni e riferimenti legali">
              <dl>
                <LegalDefinition term="Dati Personali (o Dati)">
                  Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in
                  collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale,
                  renda identificata o identificabile una persona fisica.
                </LegalDefinition>
                <LegalDefinition term="Dati di Utilizzo">
                  Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di
                  parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei
                  computer utilizzati dall&apos;Utente che si connette con questa Applicazione, gli indirizzi in
                  notazione URI (Uniform Resource Identifier), l&apos;orario della richiesta, il metodo utilizzato
                  nell&apos;inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice
                  numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di
                  provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le
                  varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i
                  dettagli relativi all&apos;itinerario seguito all&apos;interno dell&apos;Applicazione, con particolare
                  riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e
                  all&apos;ambiente informatico dell&apos;Utente.
                </LegalDefinition>
                <LegalDefinition term="Utente">
                  L&apos;individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide
                  con l&apos;Interessato.
                </LegalDefinition>
                <LegalDefinition term="Interessato">
                  La persona fisica cui si riferiscono i Dati Personali.
                </LegalDefinition>
                <LegalDefinition term="Responsabile del Trattamento (o Responsabile)">
                  La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati
                  personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.
                </LegalDefinition>
                <LegalDefinition term="Titolare del Trattamento (o Titolare)">
                  La persona fisica o giuridica, l&apos;autorità pubblica, il servizio o altro organismo che,
                  singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e
                  gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla
                  fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato,
                  è il titolare di questa Applicazione.
                </LegalDefinition>
                <LegalDefinition term="Questa Applicazione">
                  Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli
                  Utenti.
                </LegalDefinition>
                <LegalDefinition term="Servizio">
                  Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su
                  questo sito/applicazione.
                </LegalDefinition>
                <LegalDefinition term="Unione Europea (o UE)">
                  Salvo ove diversamente specificato, ogni riferimento all&apos;Unione Europea contenuto in questo
                  documento si intende esteso a tutti gli attuali stati membri dell&apos;Unione Europea e dello Spazio
                  Economico Europeo.
                </LegalDefinition>
              </dl>

              <LegalSubsection title="Riferimenti legali">
                <LegalParagraph>
                  Ove non diversamente specificato, questa policy riguarda esclusivamente questa Applicazione.
                </LegalParagraph>
              </LegalSubsection>
            </LegalSection>

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

            <div className="mt-16 border-t border-gray-200 pt-8 text-center">
              <p className="text-body">
                Versione ufficiale e sempre aggiornata del documento:{" "}
                <IubendaEmbedLink href={IUBENDA_COOKIE_URL} label="Cookie Policy" title="Cookie Policy" />
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
