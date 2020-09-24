interface Animal {
  color: string;
  legs: number;
  name: string;
}

function animal(obj: Animal): string {
  const { color, legs, name } = obj;

  return `This ${color} ${name} has ${legs} legs.`;
}

export default animal;
