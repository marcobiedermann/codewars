const LITRES_PER_GALLON = 4.54609188;
const KILOMETERS_PER_MILE = 1.609344;

function round(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function converter(mpg: number): number {
  return round(mpg * (KILOMETERS_PER_MILE / LITRES_PER_GALLON));
}

export default converter;
