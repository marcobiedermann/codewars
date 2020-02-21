function rentalCarCost(d: number): number {
  let discount = 0;

  if (d >= 7) {
    discount = 50;
  } else if (d >= 3) {
    discount = 20;
  } else {
    discount = 0;
  }

  return d * 40 - discount;
}

export default rentalCarCost;
