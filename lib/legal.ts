/**
 * Dati condivisi dai documenti legali (privacy e cookie policy).
 *
 * I due documenti ripetono alla lettera il titolare e l'intero glossario:
 * tenerli qui evita che una riesportazione da iubenda aggiorni una pagina sola.
 */

export const LEGAL_LAST_UPDATED = "11 agosto 2026"

export const IUBENDA_PRIVACY_URL = "https://www.iubenda.com/privacy-policy/65494109"
export const IUBENDA_COOKIE_URL = `${IUBENDA_PRIVACY_URL}/cookie-policy`

export const LEGAL_OWNER = {
  name: "Avv. Clara Falomo",
  addressLines: ["Piazza XX Settembre n. 8", "33170 Pordenone (PN), Italia"],
  vat: "P. IVA: IT01537350934",
  bar: "Iscritta all'Ordine degli Avvocati di Pordenone",
  email: "avvocato@clarafalomo.it",
} as const

export type LegalDefinition = {
  term: string
  text: string
}

/** Sezione "Definizioni e riferimenti legali", identica nei due documenti. */
export const LEGAL_DEFINITIONS: LegalDefinition[] = [
  {
    term: "Dati Personali (o Dati)",
    text: "Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.",
  },
  {
    term: "Dati di Utilizzo",
    text: "Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l'orario della richiesta, il metodo utilizzato nell'inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all'itinerario seguito all'interno dell'Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all'ambiente informatico dell'Utente.",
  },
  {
    term: "Utente",
    text: "L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.",
  },
  {
    term: "Interessato",
    text: "La persona fisica cui si riferiscono i Dati Personali.",
  },
  {
    term: "Responsabile del Trattamento (o Responsabile)",
    text: "La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.",
  },
  {
    term: "Titolare del Trattamento (o Titolare)",
    text: "La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.",
  },
  {
    term: "Questa Applicazione",
    text: "Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.",
  },
  {
    term: "Servizio",
    text: "Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.",
  },
  {
    term: "Unione Europea (o UE)",
    text: "Salvo ove diversamente specificato, ogni riferimento all'Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell'Unione Europea e dello Spazio Economico Europeo.",
  },
]
