function calc(x: string): number {
  return (
    (x.replace(/./g, (character) => character.charCodeAt(0).toString()).match(/7/g) || []).length *
    6
  );
}

export default calc;
