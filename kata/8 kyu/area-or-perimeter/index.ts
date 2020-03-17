function areaOrPerimeter(l: number, w: number): number {
  return l === w ? l * w : 2 * l + 2 * w;
}

export default areaOrPerimeter;
