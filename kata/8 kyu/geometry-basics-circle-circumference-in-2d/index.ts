import Circle from './circle.ts';

function circleCircumference(circle: Circle): number {
  return 2 * Math.PI * circle.radius;
}

export default circleCircumference;
