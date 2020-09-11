function shark(
  pontoonDistance: number,
  sharkDistance: number,
  youSpeed: number,
  sharkSpeed: number,
  dolphin: boolean,
): 'Alive!' | 'Shark Bait!' {
  const youTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);

  return youTime < sharkTime ? 'Alive!' : 'Shark Bait!';
}

export default shark;
