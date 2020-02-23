interface Greeting {
  [key: string]: string;
}

const greetings: Greeting = {
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  english: 'Welcome',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
};

function greet(language: string): string {
  return greetings[language] || greetings.english;
}

export default greet;
