interface Developer {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

function countDevelopers(list: Developer[]): number {
  return list.filter(
    (developer) => developer.language === 'JavaScript' && developer.continent === 'Europe',
  ).length;
}

export default countDevelopers;
