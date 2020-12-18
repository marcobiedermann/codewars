function guessBlue(
  blueStart: number,
  redStart: number,
  bluePulled: number,
  redPulled: number,
): number {
  const blueLeft = blueStart - bluePulled;
  const redLeft = redStart - redPulled;
  const allLeft = blueLeft + redLeft;

  return blueLeft / allLeft;
}

export default guessBlue;
