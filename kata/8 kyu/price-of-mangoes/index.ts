function mango(quantity: number, price: number): number {
  return (quantity - Math.floor(quantity / 3)) * price;
}

export default mango;
