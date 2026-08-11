import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IubendaEmbedLink from "@/components/legal/iubenda-embed-link"
import {
  LegalCallout,
  LegalDefinition,
  LegalList,
  LegalPageHeader,
  LegalParagraph,
  LegalSection,
  LegalSubsection,
} from "@/components/legal/legal-ui"

export const metadata: Metadata = {
  title: "Privacy Policy | Avv. Clara Falomo",
  description:
    "Informativa sul trattamento dei dati personali di www.clarafalomo.it: titolare, dati raccolti, finalità, base giuridica e diritti dell'interessato ai sensi del Regolamento UE 2016/679.",
}

const IUBENDA_PRIVACY_URL = "https://www.iubenda.com/privacy-policy/65494109"

const SUMMARY = [
  { href: "#owner-and-data-controller", label: "Titolare del Trattamento dei Dati" },
  { href: "#types-of-data", label: "Tipologie di Dati raccolti" },
  { href: "#mode-and-place", label: "Modalità e luogo del trattamento dei Dati raccolti" },
  { href: "#purpose-of-processing", label: "Finalità del Trattamento dei Dati raccolti" },
  { href: "#data-processing-detailed-info", label: "Dettagli sul trattamento dei Dati Personali" },
  { href: "#cookie-policy", label: "Cookie Policy" },
  { href: "#further-info-eu-users", label: "Ulteriori informazioni per gli utenti nell'Unione Europea" },
  { href: "#additional-info-on-collection-and-processing", label: "Ulteriori informazioni sul trattamento" },
  { href: "#definitions-and-legal-references", label: "Definizioni e riferimenti legali" },
  { href: "#exercise-your-rights", label: "Come esercitare i tuoi diritti" },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      {/*
        Niente .section-padding qui: la regola e' dichiarata dopo @tailwind utilities
        in globals.css, quindi il suo py-12 vince su pt-24 e il titolo finiva sotto
        la navbar fissa (80px) su mobile. Spaziatura verticale esplicita.
      */}
      <main className="bg-white text-gray-800 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <LegalPageHeader
              title="Privacy Policy"
              subtitle="Benvenuto nella privacy policy di www.clarafalomo.it. Questa policy ti aiuterà a comprendere quali dati raccogliamo, perché li raccogliamo e quali sono i tuoi diritti in merito."
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

            <LegalSection id="summary" title="Riepilogo">
              <LegalSubsection title="Dati che raccogliamo automaticamente">
                <LegalParagraph>
                  Raccogliamo automaticamente i tuoi dati, ad esempio quando visiti www.clarafalomo.it.
                </LegalParagraph>
                <LegalList>
                  <li>Dati di utilizzo</li>
                </LegalList>
              </LegalSubsection>

              <LegalSubsection title="Terze parti affidabili che ci aiutano a trattarli">
                <LegalList>
                  <li>Vercel Inc.</li>
                </LegalList>
              </LegalSubsection>

              <LegalSubsection title="Come li usiamo">
                <LegalList>
                  <li>Hosting ed infrastruttura backend</li>
                </LegalList>
              </LegalSubsection>
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

            <LegalSection id="types-of-data" title="Tipologie di Dati raccolti">
              <LegalParagraph>
                Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:
              </LegalParagraph>
              <LegalList>
                <li>Dati di utilizzo</li>
              </LegalList>
              <LegalParagraph>
                Dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate
                di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei
                Dati stessi.
              </LegalParagraph>
              <LegalParagraph>
                I Dati Personali possono essere liberamente forniti dall&apos;Utente o, nel caso di Dati di Utilizzo,
                raccolti automaticamente durante l&apos;uso di questa Applicazione.
              </LegalParagraph>
              <LegalParagraph>
                Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori. Se
                l&apos;Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il
                Servizio. Nei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono
                liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla
                disponibilità del Servizio o sulla sua operatività.
              </LegalParagraph>
              <LegalParagraph>
                Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori sono incoraggiati a contattare il
                Titolare.
              </LegalParagraph>
              <LegalParagraph>
                L&apos;eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa
                Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione ha la finalità di
                fornire il Servizio richiesto dall&apos;Utente, oltre alle ulteriori finalità descritte nel presente
                documento e nella Cookie Policy.
              </LegalParagraph>
              <LegalParagraph>
                L&apos;Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi
                mediante questa Applicazione.
              </LegalParagraph>
            </LegalSection>

            <LegalSection id="mode-and-place" title="Modalità e luogo del trattamento dei Dati raccolti">
              <LegalSubsection title="Modalità di trattamento">
                <LegalParagraph>
                  Il Titolare adotta le opportune misure di sicurezza volte ad impedire l&apos;accesso, la divulgazione,
                  la modifica o la distruzione non autorizzate dei Dati Personali.
                </LegalParagraph>
                <LegalParagraph>
                  Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità
                  organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in
                  alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell&apos;organizzazione di
                  questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di
                  sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting
                  provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili
                  del Trattamento da parte del Titolare. L&apos;elenco aggiornato dei Responsabili potrà sempre essere
                  richiesto al Titolare del Trattamento.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Luogo">
                <LegalParagraph>
                  I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti
                  coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.
                </LegalParagraph>
                <LegalParagraph>
                  I Dati Personali dell&apos;Utente potrebbero essere trasferiti in un paese diverso da quello in cui
                  l&apos;Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l&apos;Utente
                  può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Periodo di conservazione">
                <LegalParagraph>
                  Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il
                  tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un
                  periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.
                </LegalParagraph>
              </LegalSubsection>
            </LegalSection>

            <LegalSection id="purpose-of-processing" title="Finalità del Trattamento dei Dati raccolti">
              <LegalParagraph>
                I Dati dell&apos;Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli
                obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o
                quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le
                seguenti finalità:
              </LegalParagraph>
              <LegalList>
                <li>Hosting ed infrastruttura backend</li>
              </LegalList>
            </LegalSection>

            <LegalSection id="data-processing-detailed-info" title="Dettagli sul trattamento dei Dati Personali">
              <LegalSubsection title="Hosting ed infrastruttura backend">
                <LegalParagraph>
                  Questo tipo di servizio ha lo scopo di ospitare Dati e file che consentono a questa Applicazione di
                  funzionare e di essere distribuito o di fornire un&apos;infrastruttura pronta all&apos;uso per
                  eseguire funzionalità specifiche o parti di questa Applicazione.
                </LegalParagraph>
                <LegalParagraph>
                  Alcuni servizi tra quelli elencati di seguito, se presenti, possono funzionare su server
                  geograficamente distribuiti, rendendo difficile determinare l&apos;effettiva ubicazione in cui sono
                  conservati i Dati Personali.
                </LegalParagraph>

                <LegalCallout>
                  <p className="font-montserrat text-sm font-semibold uppercase tracking-wide text-primary">Vercel</p>
                  <p className="mt-3">Azienda: Vercel Inc.</p>
                  <p>Luogo del trattamento: Stati Uniti</p>
                  <p className="mt-3">
                    Vercel è un servizio di hosting e backend fornito da Vercel Inc.
                  </p>
                  <p className="mt-3 font-semibold">Dati Personali trattati:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-gold">
                    <li>Dati di utilizzo</li>
                    <li>varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio</li>
                  </ul>
                  <p className="mt-3">
                    Servizio fornito da: Vercel Inc. (Stati Uniti) –{" "}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </LegalCallout>
              </LegalSubsection>
            </LegalSection>

            <LegalSection id="cookie-policy" title="Cookie Policy">
              <LegalParagraph>
                Questa Applicazione fa utilizzo di Strumenti di Tracciamento. Per saperne di più, gli Utenti possono
                consultare la{" "}
                <Link href="/cookie-policy" className="text-primary underline-offset-4 hover:underline">
                  Cookie Policy
                </Link>
                .
              </LegalParagraph>
            </LegalSection>

            <LegalSection id="further-info-eu-users" title="Ulteriori informazioni per gli utenti nell'Unione Europea">
              <LegalSubsection title="Base giuridica del trattamento">
                <LegalParagraph>
                  Il Titolare tratta Dati Personali relativi all&apos;Utente in caso sussista una delle seguenti
                  condizioni:
                </LegalParagraph>
                <LegalList>
                  <li>l&apos;Utente ha prestato il consenso per una o più finalità specifiche;</li>
                  <li>
                    il trattamento è necessario all&apos;esecuzione di un contratto con l&apos;Utente e/o
                    all&apos;esecuzione di misure precontrattuali;
                  </li>
                  <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
                  <li>
                    il trattamento è necessario per l&apos;esecuzione di un compito di interesse pubblico o per
                    l&apos;esercizio di pubblici poteri di cui è investito il Titolare;
                  </li>
                  <li>
                    il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.
                  </li>
                </LegalList>
                <LegalParagraph>
                  È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun
                  trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un
                  contratto o necessario per concludere un contratto.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Ulteriori informazioni sul tempo di conservazione">
                <LegalParagraph>
                  Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il
                  tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un
                  periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.
                </LegalParagraph>
                <LegalParagraph>Pertanto:</LegalParagraph>
                <LegalList>
                  <li>
                    I Dati Personali raccolti per scopi collegati all&apos;esecuzione di un contratto tra il Titolare e
                    l&apos;Utente saranno trattenuti sino a quando sia completata l&apos;esecuzione di tale contratto.
                  </li>
                  <li>
                    I Dati Personali raccolti per finalità riconducibili all&apos;interesse legittimo del Titolare
                    saranno trattenuti sino al soddisfacimento di tale interesse. L&apos;Utente può ottenere ulteriori
                    informazioni in merito all&apos;interesse legittimo perseguito dal Titolare nelle relative sezioni
                    di questo documento o contattando il Titolare.
                  </li>
                </LegalList>
                <LegalParagraph>
                  Quando il trattamento è basato sul consenso dell&apos;Utente, il Titolare può conservare i Dati
                  Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare potrebbe
                  essere obbligato a conservare i Dati Personali per un periodo più lungo per adempiere ad un obbligo
                  di legge o per ordine di un&apos;autorità.
                </LegalParagraph>
                <LegalParagraph>
                  Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare
                  di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità
                  dei Dati non potranno più essere esercitati.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Diritti dell'Utente sulla base del Regolamento Generale sulla Protezione dei Dati (GDPR)">
                <LegalParagraph>
                  Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
                </LegalParagraph>
                <LegalParagraph>In particolare, nei limiti previsti dalla legge, l&apos;Utente ha il diritto di:</LegalParagraph>
                <LegalList>
                  <li>
                    <strong>revocare il consenso in ogni momento.</strong> L&apos;Utente può revocare il consenso al
                    trattamento dei propri Dati Personali precedentemente espresso.
                  </li>
                  <li>
                    <strong>opporsi al trattamento dei propri Dati.</strong> L&apos;Utente può opporsi al trattamento
                    dei propri Dati quando esso avviene in virtù di una base giuridica diversa dal consenso.
                  </li>
                  <li>
                    <strong>accedere ai propri Dati.</strong> L&apos;Utente ha diritto ad ottenere informazioni sui Dati
                    trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati
                    trattati.
                  </li>
                  <li>
                    <strong>verificare e chiedere la rettificazione.</strong> L&apos;Utente può verificare la
                    correttezza dei propri Dati e richiederne l&apos;aggiornamento o la correzione.
                  </li>
                  <li>
                    <strong>ottenere la limitazione del trattamento.</strong> L&apos;Utente può richiedere la
                    limitazione del trattamento dei propri Dati. In tal caso il Titolare non tratterà i Dati per alcun
                    altro scopo se non la loro conservazione.
                  </li>
                  <li>
                    <strong>ottenere la cancellazione o rimozione dei propri Dati Personali.</strong> L&apos;Utente può
                    richiedere la cancellazione dei propri Dati da parte del Titolare.
                  </li>
                  <li>
                    <strong>ricevere i propri Dati o farli trasferire ad altro titolare.</strong> L&apos;Utente ha
                    diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo
                    automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro
                    titolare.
                  </li>
                  <li>
                    <strong>proporre reclamo.</strong> L&apos;Utente può proporre un reclamo all&apos;autorità di
                    controllo della protezione dei dati personali competente o agire in sede giudiziale.
                  </li>
                </LegalList>
                <LegalParagraph>
                  Gli Utenti hanno diritto di ottenere informazioni in merito alla base giuridica per il trasferimento
                  di Dati all&apos;estero incluso verso qualsiasi organizzazione internazionale regolata dal diritto
                  internazionale o costituita da due o più paesi, come ad esempio l&apos;ONU, nonché in merito alle
                  misure di sicurezza adottate dal Titolare per proteggere i loro Dati.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Dettagli sul diritto di opposizione">
                <LegalCallout>
                  <p className="font-semibold">
                    Quando i Dati Personali sono trattati nell&apos;interesse pubblico, nell&apos;esercizio di pubblici
                    poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli
                    Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione
                    particolare.
                  </p>
                  <p className="mt-4 font-semibold">
                    Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto,
                    possono opporsi al trattamento in qualsiasi momento, gratuitamente e senza fornire alcuna
                    motivazione. Qualora gli Utenti si oppongano al trattamento per finalità di marketing diretto, i
                    Dati Personali non sono più oggetto di trattamento per tali finalità. Per scoprire se il Titolare
                    tratti Dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive
                    sezioni di questo documento.
                  </p>
                </LegalCallout>
              </LegalSubsection>

              <LegalSubsection title="Come esercitare i diritti">
                <LegalParagraph>
                  Eventuali richieste di esercizio dei diritti dell&apos;Utente possono essere indirizzate al Titolare
                  attraverso i recapiti forniti in questo documento. La richiesta è gratuita e il Titolare risponderà
                  nel più breve tempo possibile, in ogni caso entro un mese, fornendo all&apos;Utente tutte le
                  informazioni previste dalla legge. Eventuali rettifiche, cancellazioni o limitazioni del trattamento
                  saranno comunicate dal Titolare a ciascuno dei destinatari, se esistenti, a cui sono stati trasmessi i
                  Dati Personali, salvo che ciò si riveli impossibile o implichi uno sforzo sproporzionato. Il Titolare
                  comunica all&apos;Utente tali destinatari qualora egli lo richieda.
                </LegalParagraph>
              </LegalSubsection>
            </LegalSection>

            <LegalSection id="additional-info-on-collection-and-processing" title="Ulteriori informazioni sul trattamento">
              <LegalSubsection title="Difesa in giudizio">
                <LegalParagraph>
                  I Dati Personali dell&apos;Utente possono essere utilizzati da parte del Titolare in giudizio o nelle
                  fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell&apos;utilizzo di questa
                  Applicazione o dei Servizi connessi da parte dell&apos;Utente.
                </LegalParagraph>
                <LegalParagraph>
                  L&apos;Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i
                  Dati per ordine delle autorità pubbliche.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Informative specifiche">
                <LegalParagraph>
                  Su richiesta dell&apos;Utente, in aggiunta alle informazioni contenute in questa privacy policy,
                  questa Applicazione potrebbe fornire all&apos;Utente delle informative aggiuntive e contestuali
                  riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Log di sistema e manutenzione">
                <LegalParagraph>
                  Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali
                  servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le
                  interazioni e che possono contenere anche Dati Personali, quali l&apos;indirizzo IP Utente.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Informazioni non contenute in questa policy">
                <LegalParagraph>
                  Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in
                  qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.
                </LegalParagraph>
              </LegalSubsection>

              <LegalSubsection title="Modifiche a questa privacy policy">
                <LegalParagraph>
                  Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy
                  in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa
                  Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti
                  attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con
                  frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
                </LegalParagraph>
                <LegalParagraph>
                  Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare
                  provvederà a raccogliere nuovamente il consenso dell&apos;Utente, se necessario.
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

            <LegalSection id="exercise-your-rights" title="Come esercitare i tuoi diritti">
              <LegalParagraph>
                Puoi scrivere in qualsiasi momento al Titolare per esercitare i diritti previsti dagli artt. 15 e ss.
                del Regolamento UE 2016/679. Di seguito trovi alcuni modelli già pronti:
              </LegalParagraph>
              <LegalList>
                <li>
                  <a
                    href="mailto:avvocato@clarafalomo.it?subject=Diritto%20di%20accesso"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Chiedi di conoscere e accedere ai dati che ti riguardano
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:avvocato@clarafalomo.it?subject=Diritto%20di%20rettifica"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Chiedi di correggere i dati che ti riguardano
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:avvocato@clarafalomo.it?subject=Diritto%20all%27oblio"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Chiedi di esercitare il diritto all&apos;oblio (cancellazione dei dati)
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:avvocato@clarafalomo.it?subject=Diritto%20alla%20portabilit%C3%A0%20dei%20dati"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Chiedi il trasferimento dei dati a un altro servizio
                  </a>
                </li>
              </LegalList>
              <LegalParagraph>
                Puoi inoltre gestire in ogni momento le tue preferenze sulla privacy tramite il pannello di consenso
                disponibile su questo sito.
              </LegalParagraph>
            </LegalSection>

            <div className="mt-16 border-t border-gray-200 pt-8 text-center">
              <p className="text-body">
                Versione ufficiale e sempre aggiornata del documento:{" "}
                <IubendaEmbedLink href={IUBENDA_PRIVACY_URL} label="Privacy Policy" title="Privacy Policy" />
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
