function spacey(array: string[]): string[] {
  let string = '';

  return array.map((item) => {
    string += item;

    return string;
  });
}

export default spacey;
