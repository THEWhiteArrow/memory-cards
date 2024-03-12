interface IMemoryCard {
  word: string;
  translation: string[];
}

const get_random_memory_card = async (album: string) => {
  if (!memory_cards[album]) {
    throw new Error(`Album ${album} not found`);
  }
  const random_index = Math.floor(Math.random() * memory_cards[album].length);
  const random_card = memory_cards[album][random_index];
  return random_card;
};

const memory_cards: Record<string, Array<IMemoryCard>> = {
  verbs: [
    { word: "be (være)", translation: ["er", "var", "har været"] },
    { word: "have (have)", translation: ["har", "havde", "har haft"] },
    { word: "do (gøre)", translation: ["gør", "gjorde", "har gjort"] },
    { word: "say (sige)", translation: ["siger", "sagde", "har sagt"] },
    { word: "get (få)", translation: ["får", "fik", "har fået"] },
    { word: "come (komme)", translation: ["kommer", "kom", "er kommet"] },
    { word: "see (se)", translation: ["ser", "så", "har set"] },
    { word: "can (kan)", translation: ["kan", "kunne", "har kunnet"] },
    { word: "will (ville)", translation: ["vil", "ville", "har villet"] },
    { word: "go (gå)", translation: ["går", "gik", "er gået"] },
    { word: "give (give)", translation: ["giver", "gav", "har givet"] },
    { word: "take (tage)", translation: ["tager", "tog", "har taget"] },
    { word: "should (skulle)", translation: ["skal", "skulle", "har skullet"] },
    { word: "let (lade)", translation: ["lader", "lod", "har ladet"] },
    { word: "know (vide)", translation: ["ved", "vidste", "har vidst"] },
    { word: "become (blive)", translation: ["bliver", "blev", "er blevet"] },
    { word: "find (finde)", translation: ["finder", "fandt", "har fundet"] },
    { word: "stand (stå)", translation: ["står", "stod", "har stået"] },
    { word: "think (tænke)", translation: ["tænker", "tænkte", "har tænkt"] },
    { word: "mean (mene)", translation: ["mener", "mente", "har ment"] },
    { word: "think (synes)", translation: ["synes", "syntes", "har syntes"] },
    { word: "feel (føle)", translation: ["føler", "følte", "har følt"] },
    { word: "live (leve)", translation: ["lever", "levede", "har levet"] },
    { word: "love (elske)", translation: ["elsker", "elskede", "har elsket"] },
    {
      word: "work (arbejde)",
      translation: ["arbejder", "arbejdede", "har arbejdet"],
    },
    { word: "eat (spise)", translation: ["spiser", "spiste", "har spist"] },
    { word: "read (læse)", translation: ["læser", "læste", "har læst"] },
    {
      word: "write (skrive)",
      translation: ["skriver", "skrev", "har skrevet"],
    },
    { word: "live (bo)", translation: ["bor", "boede", "har boet"] },
    {
      word: "understand (forstå)",
      translation: ["forstår", "forstod", "har forstået"],
    },
    { word: "hear (høre)", translation: ["hører", "hørte", "har hørt"] },
    { word: "lay (lægge)", translation: ["lægger", "lagde", "har lagt"] },
    { word: "buy (købe)", translation: ["køber", "købte", "har købt"] },
    { word: "drink (drikke)", translation: ["drikker", "drak", "har drukket"] },
    { word: "pull (trække)", translation: ["trækker", "trak", "har trukket"] },
    { word: "run (løbe)", translation: ["løber", "løb", "har løbet"] },
    {
      word: "play (spille)",
      translation: ["spiller", "spillede", "har spillet"],
    },
    { word: "fall (falde)", translation: ["falder", "faldt", "er faldet"] },
    {
      word: "remember (huske)",
      translation: ["husker", "huskede", "har husket"],
    },
    {
      word: "begin (begynde)",
      translation: ["begynder", "begyndte", "har begyndt"],
    },
    { word: "talk (tale)", translation: ["taler", "talte", "har talt"] },
    { word: "use (bruge)", translation: ["bruger", "brugte", "har brugt"] },
    { word: "pay (betale)", translation: ["betaler", "betalte", "har betalt"] },
    { word: "sit (sidde)", translation: ["sidder", "sad", "har siddet"] },
    { word: "show (vise)", translation: ["viser", "viste", "har vist"] },
    { word: "lose (miste)", translation: ["mister", "mistede", "har mistet"] },
    { word: "kill (dræbe)", translation: ["dræber", "dræbte", "har dræbt"] },
    { word: "follow (følge)", translation: ["følger", "fulgte", "har fulgt"] },
    { word: "sleep (sove)", translation: ["sover", "sov", "har sovet"] },
    { word: "bring (bringe)", translation: ["bringer", "bragte", "har bragt"] },
    { word: "hold (holde)", translation: ["holder", "holdt", "har holdt"] },
    { word: "lie (ligge)", translation: ["ligger", "lå", "har ligget"] },
    { word: "put (sætte)", translation: ["sætter", "satte", "har sat"] },
    { word: "meet (møde)", translation: ["møder", "mødte", "har mødt"] },
    { word: "hit (slå)", translation: ["slår", "slog", "har slået"] },
    {
      word: "move (flytte)",
      translation: ["flytter", "flyttede", "har flyttet"],
    },
    { word: "travel (rejse)", translation: ["rejser", "rejste", "er rejst"] },
    { word: "sail (sejle)", translation: ["sejler", "sejlede", "har sejlet"] },
    { word: "wait (vente)", translation: ["venter", "ventede", "har ventet"] },
    { word: "laugh (grine)", translation: ["griner", "grinede", "har grinet"] },
    { word: "carry (bære)", translation: ["bærer", "bar", "har båret"] },
    { word: "solve (løse)", translation: ["løser", "løste", "har løst"] },
    { word: "create (skabe)", translation: ["skaber", "skabte", "har skabt"] },
    { word: "help (hjælpe)", translation: ["hjælper", "hjalp", "har hjulpet"] },
    { word: "grow (vokse)", translation: ["vokser", "voksede", "er vokset"] },
    { word: "hope (håbe)", translation: ["håber", "håbede", "har håbet"] },
    { word: "build (bygge)", translation: ["bygger", "byggede", "har bygget"] },
    { word: "hide (gemme)", translation: ["gemmer", "gemte", "har gemt"] },
    { word: "look (kigge)", translation: ["kigger", "kiggede", "har kigget"] },
    { word: "dance (danse)", translation: ["danser", "dansede", "har danset"] },
    {
      word: "press (trykke)",
      translation: ["trykker", "trykkede", "har trykket"],
    },
    {
      word: "destroy (ødelægge)",
      translation: ["ødelægger", "ødelagde", "har ødelagt"],
    },
    { word: "touch (røre)", translation: ["rører", "rørte", "har rørt"] },
    { word: "throw (smide)", translation: ["smider", "smed", "har smidt"] },
    {
      word: "change (ændre)",
      translation: ["ændrer", "ændrede", "har ændret"],
    },
    { word: "try (prøve)", translation: ["prøver", "prøvede", "har prøvet"] },
    { word: "wish (ønske)", translation: ["ønsker", "ønskede", "har ønsket"] },
    { word: "send (sende)", translation: ["sender", "sendte", "har sendt"] },
    { word: "call (ringe)", translation: ["ringer", "ringede", "har ringet"] },
    { word: "break (bryde)", translation: ["bryder", "brød", "har brudt"] },
    {
      word: "jump (springe)",
      translation: ["springer", "sprang", "er sprunget"],
    },
    {
      word: "demand (kræve)",
      translation: ["kræver", "krævede", "har krævet"],
    },
    {
      word: "teach (undervise)",
      translation: ["underviser", "underviste", "har undervist"],
    },
    {
      word: "chat (snakke)",
      translation: ["snakker", "snakkede", "har snakket"],
    },
    { word: "open (åbne)", translation: ["åbner", "åbnede", "har åbnet"] },
    {
      word: "steal (stjæle)",
      translation: ["stjæler", "stjal", "har stjålet"],
    },
    { word: "draw (tegne)", translation: ["tegner", "tegnede", "har tegnet"] },
    { word: "shoot (skyde)", translation: ["skyder", "skød", "har skudt"] },
    {
      word: "swim (svømme)",
      translation: ["svømmer", "svømmede", "har svømmet"],
    },
    {
      word: "stop (stoppe)",
      translation: ["stopper", "stoppede", "har stoppet"],
    },
    { word: "choose (vælge)", translation: ["vælger", "valgte", "har valgt"] },
    { word: "kiss (kysse)", translation: ["kysser", "kyssede", "har kysset"] },
    { word: "turn (vende)", translation: ["vender", "vendte", "har vendt"] },
    { word: "die (dø)", translation: ["dør", "døde", "er død"] },
    { word: "share (dele)", translation: ["deler", "delte", "har delt"] },
    { word: "play (lege)", translation: ["leger", "legede", "har leget"] },
    {
      word: "tell (fortælle)",
      translation: ["fortæller", "fortalte", "har fortalt"],
    },
    { word: "cry (græde)", translation: ["græder", "græd", "har grædt"] },
    { word: "throw (kaste)", translation: ["kaster", "kastede", "har kastet"] },
    {
      word: "start (starte)",
      translation: ["starter", "started", "er startet"],
    },
  ],
};

export { get_random_memory_card };

export type { IMemoryCard };
