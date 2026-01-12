function isConsonant(s: string): boolean {
  return /[bcdfghjklmnpqrstvwxyz]/i.test(s);
}

function isVowel(s: string): boolean {
  return /[aeiou]/i.test(s);
}

function nicknameGenerator(name: string): string {
  if (name.length < 4) {
    return 'Error: Name too short';
  }

  if (isConsonant(name[2])) {
    return name.slice(0, 3);
  }

  if (isVowel(name[2])) {
    return name.slice(0, 4);
  }

  return name;
}

export default nicknameGenerator;
