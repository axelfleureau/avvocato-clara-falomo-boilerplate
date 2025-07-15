import Navbar from "@/components/navbar" // Assumendo che tu voglia la navbar anche qui
import Footer from "@/components/footer" // Assumendo che tu voglia il footer anche qui

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding bg-white text-gray-800 pt-24 md:pt-32">
        <div className="container-custom">
          <h1 className="heading-lg text-primary mb-8 text-center">Informativa sulla Privacy</h1>
          <div className="decorative-line mx-auto mb-12"></div>

          <div className="prose lg:prose-xl max-w-4xl mx-auto text-body">
            <p>
              La presente Informativa sulla Privacy descrive come Avv. Clara Falomo raccoglie, utilizza e protegge le
              informazioni personali che potresti fornire utilizzando questo sito web, in particolare attraverso il
              modulo di contatto.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Titolare del Trattamento dei Dati</h2>
            <p>
              Avv. Clara Falomo
              <br />
              Indirizzo: [Inserire Indirizzo Completo]
              <br />
              Email: info@avvocatoclarafalomo.it
              <br />
              Telefono: +39 349 805 7326
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Dati Personali Raccolti</h2>
            <p>
              Quando utilizzi il modulo di contatto presente su questo sito, potremmo raccogliere i seguenti dati
              personali:
            </p>
            <ul>
              <li>Nome e Cognome</li>
              <li>Indirizzo Email</li>
              <li>Oggetto del messaggio</li>
              <li>Contenuto del messaggio</li>
            </ul>
            <p>
              La navigazione sul sito potrebbe comportare la raccolta di dati di navigazione anonimi tramite cookie,
              come descritto nella nostra Cookie Policy.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Finalità del Trattamento</h2>
            <p>I dati personali forniti attraverso il modulo di contatto saranno utilizzati esclusivamente per:</p>
            <ul>
              <li>Rispondere alle tue richieste di informazioni o di contatto.</li>
              <li>Fornire assistenza o consulenza legale, se richiesta.</li>
              <li>Adempiere ad eventuali obblighi di legge.</li>
            </ul>
            <p>
              Il conferimento dei dati per queste finalità è facoltativo, tuttavia il mancato conferimento potrebbe
              comportare l&apos;impossibilità di rispondere alla tua richiesta.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Modalità del Trattamento e Conservazione</h2>
            <p>
              I dati raccolti sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate
              alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              Attualmente, il sito simula l&apos;invio del modulo e i dati non vengono conservati permanentemente su un
              server a seguito dell&apos;invio tramite il form di questo sito dimostrativo. In un contesto reale, i dati
              sarebbero conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati
              raccolti, nel rispetto dei principi di liceità, limitazione delle finalità e minimizzazione dei dati.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Comunicazione dei Dati</h2>
            <p>
              I tuoi dati personali non saranno diffusi. Potranno essere comunicati a soggetti terzi (es. collaboratori,
              consulenti tecnici) solo se strettamente necessario per l&apos;espletamento delle finalità sopra indicate
              e sempre nel rispetto della normativa vigente.
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Diritti dell&apos;Interessato</h2>
            <p>
              In qualità di interessato, hai il diritto di chiedere al titolare del trattamento l&apos;accesso ai dati
              personali, la rettifica o la cancellazione degli stessi, la limitazione del trattamento che ti riguarda o
              di opporti al loro trattamento, oltre al diritto alla portabilità dei dati, secondo quanto previsto dagli
              artt. 15 e ss. del Regolamento UE 2016/679 (GDPR). Le richieste possono essere inviate ai recapiti del
              Titolare del Trattamento indicati sopra. Hai inoltre il diritto di proporre reclamo a un&apos;autorità di
              controllo (es. Garante per la Protezione dei Dati Personali).
            </p>

            <h2 className="heading-md text-primary mt-8 mb-4">Modifiche a questa Informativa sulla Privacy</h2>
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
