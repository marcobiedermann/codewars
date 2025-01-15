function isNumber(n: unknown): n is number {
  return typeof n === 'number';
}

function circleArea(radius: unknown): number | false {
  if (!isNumber(radius) || radius <= 0) {
    return false;
  }

  const area = Math.PI * radius ** 2;

  return Math.round((area + Number.EPSILON) * 100) / 100;
}

export default circleArea;
