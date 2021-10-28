function isNumber(n: any): n is number {
  return typeof n === 'number';
}

function circleArea(radius: any): number | false {
  if (!isNumber(radius) || radius <= 0) {
    return false;
  }

  const area = Math.PI * radius ** 2;

  return Math.round((area + Number.EPSILON) * 100) / 100;
}

export default circleArea;
