interface Developer {
  age: number;
  continent: string;
  country: string;
  firstName: string;
  language: string;
  lastName: string;
}

function isRubyComing(list: Developer[]): boolean {
  return list.some((developer) => developer.language === 'Ruby');
}

export default isRubyComing;
