interface Developer {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

interface NewDeveloper extends Developer {
  greeting: string;
}

function greetDevelopers(list: Developer[]): NewDeveloper[] {
  return list.map((developer) => {
    const { firstName, language } = developer;

    return {
      ...developer,
      greeting: `Hi ${firstName}, what do you like the most about ${language}?`,
    };
  });
}

export default greetDevelopers;
