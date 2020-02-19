interface Mistakes {
  [key: string]: string;
}

const mistakes: Mistakes = {
  '0': 'O',
  '1': 'I',
  '5': 'S',
};

function correct(string: string): string {
  return string.replace(/[015]/g, character => mistakes[character]);
}

export default correct;
