import Navbar from "@/components/navbar" // Assumendo che tu voglia la navbar anche qui
import Footer from "@/components/footer" // Assumendo che tu voglia il footer anche qui

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding bg-white text-gray-800 pt-24 md:pt-32">
        <div className="container-custom">
          <h1 className="heading-lg text-primary mb-8 text-center">Informativa sui Cookie</h1>
          <div className="decorative-line mx-auto mb-12"></div>

          <div className="prose lg:prose-xl max-w-4xl mx-auto text-body">
            <p>
              La presente Informativa sui Cookie spiega cosa sono i cookie e come Avv. Clara Falomo li utilizza su
              questo sito web. Ti invitiamo a leggere questa informativa per comprendere quali tipi di cookie
              utilizziamo, le informazioni che raccogliamo tramite i cookie e come tali informazioni vengono utilizzate.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Cosa sono i Cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali
              (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla
              successiva visita del medesimo utente. Possono contenere dati come, ad esempio, l&apos;indirizzo IP, il
              tipo di browser e dispositivo utilizzato, le preferenze di lingua o informazioni sulle pagine visitate.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Come utilizziamo i Cookie?</h2>
            <p>Questo sito web potrebbe utilizzare le seguenti tipologie di cookie:</p>
            <ul>
              <li>
                <strong>Cookie Tecnici Essenziali:</strong> Questi cookie sono strettamente necessari per consentire il
                corretto funzionamento del sito e per permetterti di navigare e utilizzare le sue funzionalità di base.
                Senza questi cookie, il sito potrebbe non funzionare correttamente. Ad esempio, potrebbero essere
                utilizzati per ricordare lo stato di avanzamento di un modulo o per gestire la sessione di navigazione.
                Attualmente, questo sito è principalmente dimostrativo e potrebbe non implementare attivamente cookie
                tecnici complessi, ma sono menzionati per completezza informativa.
              </li>
              <li>
                <strong>Cookie Analitici (Anonimizzati):</strong> Potremmo utilizzare cookie analitici forniti da terze
                parti (es. Google Analytics, opportunamente anonimizzati) per raccogliere informazioni in forma
                aggregata e anonima sul numero degli utenti e su come questi visitano il sito stesso. Queste
                informazioni ci aiutano a capire come migliorare il sito. In un contesto reale, l&apos;anonimizzazione
                degli IP sarebbe configurata.
              </li>
              <li>
                <strong>Cookie di Funzionalità:</strong> Questi cookie permettono al sito di ricordare le scelte che fai
                (come la lingua o altre preferenze) per fornire una funzionalità più personalizzata. Attualmente non
                sono implementati cookie di funzionalità specifici su questo sito dimostrativo.
              </li>
            </ul>
            <p>
              Il modulo di contatto presente sul sito non imposta di per sé cookie specifici per il suo funzionamento,
              ma l&apos;interazione con il sito nel suo complesso potrebbe coinvolgere i cookie tecnici sopra
              menzionati.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Cookie di Terze Parti</h2>
            <p>
              In alcuni casi, potremmo utilizzare cookie forniti da terze parti fidate. Ad esempio, se integrassimo
              mappe di Google Maps o video da YouTube, queste terze parti potrebbero impostare i propri cookie. Non
              abbiamo controllo diretto su questi cookie. Ti invitiamo a consultare le informative sulla privacy e sui
              cookie di queste terze parti per maggiori informazioni.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Come controllare i Cookie</h2>
            <p>
              Puoi controllare e/o eliminare i cookie come desideri. La maggior parte dei browser accetta i cookie
              automaticamente, ma puoi modificare le impostazioni del tuo browser per rifiutare i cookie o per essere
              avvisato quando un cookie viene inviato al tuo dispositivo. La disabilitazione dei cookie potrebbe
              influire sulla tua esperienza di navigazione e impedire il corretto funzionamento di alcune parti del
              sito.
            </p>
            <p>Puoi trovare informazioni su come gestire i cookie nei browser più comuni ai seguenti link:</p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge / Internet Explorer
                </a>
              </li>
            </ul>

            <h2 className="heading-md text-primary mt-8 mb-4">Modifiche a questa Informativa sui Cookie</h2>
            <p>
              La presente informativa potrebbe essere soggetta a modifiche. Ogni modifica sostanziale verrà pubblicata
              su questa pagina. Ti invitiamo a controllare regolarmente questa sezione per verificare la versione più
              recente.
            </p>

            <p className="mt-8">Ultimo aggiornamento: 5 giugno 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
