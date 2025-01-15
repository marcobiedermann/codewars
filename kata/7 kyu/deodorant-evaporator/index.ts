function evaporator(_content: number, evap_per_day: number, threshold: number): number {
  return Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));
}

export default evaporator;
