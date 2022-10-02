interface Developer {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

function isPythonDeveloper(developer: Developer): boolean {
  return developer.language === 'Python';
}

function getFirstPython(list: Developer[]): string {
  const developer = list.find(isPythonDeveloper);

  if (!developer) {
    return 'There will be no Python developers';
  }

  return `${developer.firstName}, ${developer.country}`;
}

export default getFirstPython;
