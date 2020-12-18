import Circle from './circle';

function circleArea(circle: Circle): number {
  return Math.PI * circle.radius ** 2;
}

export default circleArea;
