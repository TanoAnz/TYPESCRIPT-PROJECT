interface IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoFormazioneInteresse: string;
    
    iscrivitiCorso(corso: ICorso): void;
  }
  interface ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number; // Durata in ore
    elencoIscritti: IPartecipante[];
  
    aggiungiPartecipante(partecipante: IPartecipante): void;
  }
  interface IAzienda {
    nomeAzienda: string;
    settoreAttività: string;
    descrizione: string;
    posizioniAperte: string[];
  
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
  }
  class Partecipante implements IPartecipante {
    constructor(
      public nome: string,
      public cognome: string,
      public paeseOrigine: string,
      public livelloIstruzione: string,
      public competenzeLinguistiche: string[],
      public ambitoFormazioneInteresse: string
    ) {}
  
    iscrivitiCorso(corso: ICorso): void {
      corso.aggiungiPartecipante(this);
      console.log(this.nome + " si è iscritto/a al corso")
    }
  }
  class Corso implements ICorso {
    elencoIscritti: IPartecipante[] = [];
  
    constructor(
      public titolo: string,
      public descrizione: string,
      public settoreProfessionale: string,
      public durata: number
    ) {}
  
    aggiungiPartecipante(partecipante: IPartecipante): void {
      this.elencoIscritti.push(partecipante);
    }
  }
  class Azienda implements IAzienda {
    posizioniAperte: string[] = [];
  
    constructor(
      public nomeAzienda: string,
      public settoreAttività: string,
      public descrizione: string
    ) {}
  
    offriPosizione(partecipante: IPartecipante, posizione: string): void {
      this.posizioniAperte.push(posizione);
      console.log(`Posizione ${posizione} offerta a ${partecipante.nome} ${partecipante.cognome}`);
    }
  }
  // Creazione di alcuni partecipanti
  const partecipante1 = new Partecipante(
    'Ahmed',
    'Hassan',
    'Siria',
    'Laurea',
    ['Arabo', 'Inglese'],
    'Programmazione'
  );
  
  const partecipante2 = new Partecipante(
    'Maria',
    'Gonzalez',
    'Venezuela',
    'Diploma',
    ['Spagnolo', 'Italiano'],
    'Marketing'
  );
  
  // Creazione di corsi
  const corso1 = new Corso(
    'Corso di Programmazione Web',
    'Introduzione allo sviluppo web con HTML, CSS e JavaScript.',
    'Informatica',
    100
  );
  
  const corso2 = new Corso(
    'Corso di Marketing Digitale',
    'Principi di marketing digitale e social media.',
    'Marketing',
    80
  );
  
  // Iscrizione dei partecipanti ai corsi
  partecipante1.iscrivitiCorso(corso1);
  partecipante2.iscrivitiCorso(corso2);
  
  // Creazione di un'azienda
  const azienda1 = new Azienda(
    'IncluDO',
    'Creazione Corsi di formazione',
    'Creare percorsi di formazione professionale per migranti e persone svantaggiate per includerle nel mondo del lavoro e salvare mestieri centenari.'
  );
  
  // Offerta di una posizione lavorativa al partecipante
  azienda1.offriPosizione(partecipante1, 'Sviluppatore Web Junior');
  azienda1.offriPosizione(partecipante2, 'Digital Marketing Specialist');
  